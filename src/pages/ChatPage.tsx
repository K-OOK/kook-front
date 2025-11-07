import React from "react";
import { useLocation } from "react-router-dom";
import ChatComponent from "../components/chat/ChatComponent";
import { chatPageWrapper } from "./ChatPage.css";

interface ChatLocationState {
  ingredients?: string[];
  language?: string;
}

const ChatPage = () => {
  const location = useLocation();
  const state = (location.state ?? {}) as ChatLocationState;

  return (
    <div className={chatPageWrapper}>
      <ChatComponent
        initialIngredients={state.ingredients}
        initialLanguage={state.language}
      />
    </div>
  );
};

export default ChatPage;

