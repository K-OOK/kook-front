export type ChatRole = "user" | "assistant" | "error";

export interface ChatMessage {
  id: number;
  role: ChatRole;
  content: string;
  rawPayload: string;
}

export interface ChatHistoryPayload {
  role: "user" | "assistant";
  content: string;
}


