import { globalStyle, style } from "@vanilla-extract/css";

export const chatContainer = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  width: "100%",
  maxWidth: "720px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  boxShadow: "0 16px 36px rgba(38, 42, 58, 0.12)",
  border: "1px solid rgba(38, 42, 58, 0.08)",
  minHeight: "calc(100vh - 160px)",
  overflow: "hidden",
});

export const messagesBox = style({
  flex: 1,
  padding: "20px 24px 16px",
  overflowY: "auto",
  backgroundColor: "#ffffff",
});

export const chatMessage = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "20px",
  fontFamily: "Pretendard, sans-serif",
});

export const assistantMessage = style({
  alignSelf: "flex-start",
  backgroundColor: "#262a3a",
  color: "#ffffff",
  padding: "16px 20px",
  borderRadius: "18px",
  borderTopLeftRadius: "4px",
  fontSize: "0.95rem",
  lineHeight: 1.6,
  maxWidth: "85%",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
});

export const userMessage = style({
  alignSelf: "flex-end",
  marginLeft: "auto",
  background:
    "linear-gradient(135deg, rgba(35, 87, 227, 1) 0%, rgba(82, 132, 255, 1) 100%)",
  color: "#ffffff",
  padding: "14px 18px",
  borderRadius: "18px",
  borderBottomRightRadius: "4px",
  fontSize: "0.95rem",
  lineHeight: 1.5,
  width: "fit-content",
  maxWidth: "75%",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  textAlign: "right",
});

export const errorMessage = style({
  alignSelf: "center",
  backgroundColor: "#ffe9e9",
  color: "#d93025",
  padding: "12px 16px",
  borderRadius: "12px",
  fontSize: "0.9rem",
  fontFamily: "Pretendard, sans-serif",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
});

export const inputForm = style({
  display: "flex",
  alignItems: "center",
  padding: "20px 24px",
  gap: "12px",
  borderTop: "1px solid rgba(0, 0, 0, 0.06)",
  backgroundColor: "#ffffff",
});

export const inputField = style({
  flex: 1,
  height: "52px",
  borderRadius: "999px",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  padding: "0 20px",
  fontSize: "1rem",
  fontFamily: "Pretendard, sans-serif",
  outline: "none",
  backgroundColor: "#f7f8fb",
  transition: "border 0.2s ease, box-shadow 0.2s ease",
  selectors: {
    "&:focus": {
      border: "1px solid #5568ff",
      boxShadow: "0 0 0 3px rgba(85, 104, 255, 0.15)",
      backgroundColor: "#ffffff",
    },
    "&:disabled": {
      opacity: 0.65,
      cursor: "not-allowed",
    },
  },
});

export const sendButton = style({
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(135deg, rgba(35, 87, 227, 1) 0%, rgba(82, 132, 255, 1) 100%)",
  boxShadow: "0 8px 16px rgba(68, 105, 255, 0.35)",
  cursor: "pointer",
  transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
  selectors: {
    "&:hover:not(:disabled)": {
      transform: "translateY(-1px)",
      boxShadow: "0 12px 24px rgba(68, 105, 255, 0.3)",
    },
    "&:active:not(:disabled)": {
      transform: "translateY(0)",
      boxShadow: "0 6px 14px rgba(68, 105, 255, 0.35)",
    },
    "&:disabled": {
      opacity: 0.55,
      cursor: "not-allowed",
      boxShadow: "none",
    },
  },
});

export const sendIcon = style({
  width: "24px",
  height: "24px",
});

export const typingIndicator = style({
  alignSelf: "flex-start",
  fontSize: "0.85rem",
  color: "#8890a7",
});

globalStyle(`${messagesBox}::-webkit-scrollbar`, {
  width: "8px",
});

globalStyle(`${messagesBox}::-webkit-scrollbar-thumb`, {
  backgroundColor: "rgba(0, 0, 0, 0.18)",
  borderRadius: "8px",
});

globalStyle(`${assistantMessage} pre`, {
  margin: 0,
  fontFamily: "Pretendard, monospace",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
});

globalStyle(`${userMessage} p`, {
  margin: 0,
  textAlign: "right",
});




