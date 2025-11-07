import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  boxSizing: "border-box",
  fontFamily: "Pretendard",
});

export const topRow = style({
  display: "flex",
  justifyContent: "flex-end", // 오른쪽에 배치
  alignItems: "center",
  padding: "0 0.5rem",
});

export const inputWrapper = style({
  background: "#fff",
  borderRadius: "12px",
  padding: "0.75rem",
  boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
  border: "1px solid #eee",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

export const tagsContainer = style({
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",
});

export const ingredientChip = style({
  background: "#111",
  color: "#fff",
  padding: "0.4rem 0.6rem",
  borderRadius: "8px",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const removeBtn = style({
  background: "transparent",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  padding: 0,
  lineHeight: 1,
});

export const input = style({
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: "1rem",
  padding: "0.75rem 0",
  boxSizing: "border-box",
  background: "transparent",
  fontWeight: "500",
  selectors: {
    "&::placeholder": {
      color: "#b8b8b8ff",
    },
  },
});

export const langToggle = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  width: "92px",
  height: "34px",
  padding: "4px",
  borderRadius: "999px",
  backgroundColor: "#111",
  border: "none",
  cursor: "pointer",
  boxSizing: "border-box",
});

export const langToggleOption = style({
  flex: 1,
  textAlign: "center",
  zIndex: 2,
  fontSize: "14px",
  fontWeight: 700,
  color: "#ffffff99",
  selectors: {
    "&[data-active='true']": {
      color: "#000000",
    },
  },
});

export const langToggleSlider = style({
  position: "absolute",
  top: "4px",
  left: "4px",
  width: "calc(50% - 8px)",
  height: "calc(100% - 8px)",
  backgroundColor: "#fff",
  borderRadius: "999px",
  transition: "left 0.28s cubic-bezier(.2,.9,.2,1)",
  zIndex: 1,
});
