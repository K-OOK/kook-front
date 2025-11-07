import React from "react";

const ChatPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "32px 16px",
      }}
    >
      <iframe
        src="http://18.233.153.188:8501/"
        width="100%"
        height="800px"
        style={{
          border: "none",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
          maxWidth: "960px",
        }}
        title="AI Chatbot (Streamlit)"
      />
    </div>
  );
};

export default ChatPage;

