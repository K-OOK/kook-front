import { style } from "@vanilla-extract/css";

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  padding: "1.5rem",
  backgroundColor: "white",
  border: "1px solid #EAEAEA",
  borderRadius: "0.75rem",
  width: "calc(100%-3.1rem)",

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
