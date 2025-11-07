import { style } from "@vanilla-extract/css";

export const cookButton = style({
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  width: "calc(100vw - 32px)",
  maxWidth: "600px" /* 600px 넘지 않게 */,
  bottom: "16px",
  padding: "1.25rem 3rem",
  backgroundColor: "#1a1a1a",
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "600",
  border: "none",
  borderRadius: "9999px",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  fontFamily: "Montserrat",
  ":hover": {
    backgroundColor: "#333333",
  },
});
