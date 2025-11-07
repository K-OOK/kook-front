import { style } from "@vanilla-extract/css";

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  backgroundColor: "white",
  border: "1px solid #EAEAEA",
  borderRadius: "0.75rem",
  width: "calc(100%-3.1rem)",
  position: "relative",

  "@media": {
    "(max-width: 768px)": {
      padding: "1rem",
      width: "calc(100% - 2rem)",
    },
  },
});

export const tagsContainer = style({
  display: "flex",
  flexWrap: "wrap",
  columnGap: "0.5rem",
  //minHeight: "2rem",
});

export const ingredientChip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: "#1a1a1a",
  color: "white",
  padding: "0.375rem 0.75rem",
  borderRadius: "0.25rem",
  fontSize: "0.875rem",
  fontWeight: "600",
  marginBottom: "0.75rem",
});

export const removeBtn = style({
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "1.25rem",
  padding: "0",
  margin: "0 -0.25rem 0 0.25rem",
  lineHeight: "1",
  transition: "opacity 0.2s ease",
  ":hover": {
    opacity: "0.7",
  },
});

export const input = style({
  fontSize: "1rem",
  fontFamily: "pretendard",
  fontWeight: "500",
  border: "none",
  backgroundColor: "white",
  color: "#1a1a1a",
  outline: "none",
  transition: "border-color 0.2s ease",
  "::placeholder": {
    color: "#C1C1C1",
  },
  ":focus": {
    borderColor: "#666666",
  },
  ":disabled": {
    color: "#999999",
    cursor: "not-allowed",
  },
});

export const langToggle = style({
  position: "absolute",
  top: "50%",
  right: "1.5rem",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  padding: "4px",
  width: "120px",
  height: "40px",
  backgroundColor: "#111827",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  color: "#fff",
  boxSizing: "border-box",
  zIndex: 10,
  "@media": {
    "(max-width: 768px)": {
      right: "1rem",
    },
  },
});

export const langToggleOption = style({
  position: "relative",
  zIndex: 1,
  width: "50%",
  padding: "8px 0",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 700,
  color: "#ffffff99",
  userSelect: "none",
  selectors: {
    "&[data-active='true']": {
      color: "#000000",
    },
  },
});

export const langToggleSlider = style({
  position: "absolute",
  top: "4px",
  width: "calc(50% - 8px)",
  height: "calc(100% - 8px)",
  backgroundColor: "#ffffff",
  borderRadius: "999px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  zIndex: 0,
  transition: "left 0.2s ease",
});
