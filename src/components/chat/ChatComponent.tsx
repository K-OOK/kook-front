import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { FormEvent } from "react";
import arrowIcon from "../../assets/arrow.svg";
import { cn } from "../../utils/cn";
import type { ChatHistoryPayload, ChatMessage } from "../../types/chat";
import {
  assistantMessage,
  chatContainer,
  chatMessage,
  errorMessage,
  inputField,
  inputForm,
  messagesBox,
  sendButton,
  sendIcon,
  typingIndicator,
  userMessage,
} from "./ChatComponent.css";

const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(
    /\/$/,
    ""
  ) ?? "/api";
const ENDPOINT_URL = `${API_BASE_URL}/chat/stream`;

interface ChatComponentProps {
  initialIngredients?: string[];
  initialLanguage?: string;
}

const mapLanguage = (language?: string): string => {
  if (!language) {
    return "kor";
  }

  const normalized = language.toLowerCase();
  if (["kor", "ko", "kr", "korean"].includes(normalized)) {
    return "kor";
  }

  if (["eng", "en", "english"].includes(normalized)) {
    return "eng";
  }

  return normalized;
};

const ChatBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
  if (message.role === "error") {
    return (
      <div className={cn(chatMessage, errorMessage)}>
        {message.content || "문제가 발생했어요. 잠시 후 다시 시도해주세요."}
      </div>
    );
  }

  if (message.role === "assistant") {
    return (
      <div className={cn(chatMessage, assistantMessage)}>
        <pre>{message.content || "..."}</pre>
      </div>
    );
  }

  return (
    <div className={cn(chatMessage, userMessage)}>
      <p>{message.content}</p>
    </div>
  );
};

const buildChatHistoryPayload = (
  history: ChatMessage[]
): ChatHistoryPayload[] =>
  history
    .filter((msg) => msg.role !== "error")
    .map<ChatHistoryPayload>((msg) => ({
      role: msg.role === "assistant" ? "assistant" : "user",
      content: msg.rawPayload,
    }));

const parseIngredients = (input: string) =>
  input
    .split(/,|\n/)
    .map((item) => item.trim())
    .filter(Boolean);

const ChatComponent: React.FC<ChatComponentProps> = ({
  initialIngredients,
  initialLanguage,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const language = useMemo(
    () => mapLanguage(initialLanguage),
    [initialLanguage]
  );
  const messagesRef = useRef<ChatMessage[]>([]);
  const endAnchorRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    endAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = useCallback(
    async (question: string) => {
      const trimmed = question.trim();
      if (!trimmed || isLoading) {
        return;
      }

      const historyBeforeSend = messagesRef.current;
      const isFirstMessage = historyBeforeSend.length === 0;
      const payloadHistory = buildChatHistoryPayload(historyBeforeSend);

      const userMessage: ChatMessage = {
        id: Date.now(),
        role: "user",
        content: trimmed,
        rawPayload: trimmed,
      };

      const assistantPlaceholder: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: "",
        rawPayload: "",
      };

      setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
      setIsLoading(true);

      // sanitize ingredients (trim, remove empty, limit to 3)
      const parsed = parseIngredients(trimmed)
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 3);

      const ingredientsPayload = isFirstMessage
        ? parsed.length
          ? parsed
          : [trimmed]
        : [trimmed];

      const payload = {
        language,
        ingredients: ingredientsPayload,
        chat_history: payloadHistory,
      };

      let collectedText = "";
      let hasError = false;

      try {
        const response = await fetch(ENDPOINT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          // 응답 텍스트 함께 로깅 및 에러 던지기
          const text = await response.text().catch(() => "");
          throw new Error(
            `API 요청 실패: ${response.status} ${response.statusText} ${text}`
          );
        }

        if (!response.body) {
          throw new Error("스트림 응답이 비어 있습니다.");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          collectedText += decoder.decode(value, { stream: true });

          setMessages((prev) => {
            const last = prev[prev.length - 1];
            if (!last || last.id !== assistantPlaceholder.id) return prev;
            const updated = [...prev];
            updated[updated.length - 1] = {
              ...last,
              content: collectedText,
            };
            return updated;
          });
        }

        collectedText += decoder.decode();
      } catch (error) {
        hasError = true;
        const message =
          error instanceof Error
            ? error.message
            : "알 수 없는 오류가 발생했습니다.";
        collectedText = `<error>${message}</error>`;
        console.error("[ChatComponent] API Fetch Error:", error);
      } finally {
        setIsLoading(false);
        setMessages((prev) => {
          if (!prev.length) return prev;
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last.id !== assistantPlaceholder.id) return updated;
          updated[updated.length - 1] = {
            ...last,
            role: hasError ? "error" : "assistant",
            content: collectedText || (hasError ? "..." : ""),
            rawPayload: hasError ? "" : collectedText,
          };
          return updated;
        });
      }
    },
    [isLoading, language]
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const question = inputValue;
      setInputValue("");
      void sendMessage(question);
    },
    [inputValue, sendMessage]
  );

  useEffect(() => {
    if (initializedRef.current) {
      return;
    }

    if (!initialIngredients || initialIngredients.length === 0) {
      return;
    }

    initializedRef.current = true;
    const firstQuestion = initialIngredients.join(", ");
    setInputValue("");
    void sendMessage(firstQuestion);
  }, [initialIngredients, sendMessage]);

  return (
    <div className={chatContainer}>
      <div className={messagesBox}>
        {messages.length === 0 ? (
          <div className={cn(chatMessage, assistantMessage)}>
            <pre>
              안녕하세요! 사용하실 재료를 먼저 입력해 주세요.
              {"\n"}예: 닭가슴살, 마늘, 올리브유
            </pre>
          </div>
        ) : null}

        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}

        {isLoading ? (
          <div className={cn(chatMessage, typingIndicator)}>
            답변 생성 중...
          </div>
        ) : null}

        <div ref={endAnchorRef} />
      </div>

      <form className={inputForm} onSubmit={handleSubmit}>
        <input
          className={inputField}
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder={
            isLoading
              ? "응답을 기다리는 중이에요..."
              : "재료 혹은 질문을 입력해 주세요."
          }
          disabled={isLoading}
        />
        <button className={sendButton} type="submit" disabled={isLoading}>
          <img className={sendIcon} src={arrowIcon} alt="전송" />
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
