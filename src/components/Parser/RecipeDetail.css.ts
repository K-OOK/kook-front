import { style } from "@vanilla-extract/css";

export const wrap = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "20px",
});

export const heroImg = style({
  width: "100%",
  aspectRatio: "16/9",
  objectFit: "cover",
  borderRadius: "16px",
  background: "#eee",
});

export const h1 = style({
  fontSize: "2rem",
  lineHeight: 1.15,
  fontWeight: 700,
  fontFamily: "Montserrat",
});

export const sub = style({
  color: "#666",
  marginTop: "-8px",
});

export const sectionTitleRow = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontWeight: 700,
  textTransform: "lowercase",
  marginBottom: "10px",
  marginTop: "20px",
});

export const card = style({
  border: "1px solid #e6e6e6",
  borderRadius: "12px",
  padding: "12px",
  background: "#f7f7f7",
  whiteSpace: "pre-line",
});

export const chips = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

export const chip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  background: "#1a1a1a",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: "8px",
  fontSize: "0.9rem",
  fontWeight: 700,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "12ch", // 12글자면 말줄임
});

export const step = style({
  display: "grid",
  gap: "6px",
  marginTop: "8px",
});

export const stepTitle = style({
  fontSize: "1.5rem",
  fontWeight: 800,
});

export const stepBody = style({
  color: "#222",
  lineHeight: 1.6,
});

export const pager = style({
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: "8px",
});

export const dot = style({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: "#ddd",
  selectors: {
    '&[data-active="true"]': {
      background: "#111",
      width: "24px",
      borderRadius: "999px",
    },
  },
});

export const ingredientPair = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "0.75rem",
  marginRight: "0.75rem",
});

export const ingredientName = style({
  backgroundColor: "#1a1a1a",
  color: "white",
  padding: "0.375rem 0.75rem",
  borderRadius: "0.25rem",
  fontSize: "0.875rem",
  fontWeight: 600,
  //maxWidth: "12ch",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const ingredientAmount = style({
  color: "#1a1a1a",
  fontSize: "0.875rem",
  fontWeight: 500,
});

export const langToggle = style({
  position: "relative",
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
