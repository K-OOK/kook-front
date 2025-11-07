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
  fontWeight: 800,
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
});

export const card = style({
  border: "1px solid #e6e6e6",
  borderRadius: "12px",
  padding: "12px",
  background: "#f7f7f7",
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
