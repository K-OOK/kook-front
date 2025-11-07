import { style } from "@vanilla-extract/css";

export const hotBoard = style({
  position: "relative",
  padding: "1.2rem 1.5rem 1.4rem",
  borderRadius: "1.1rem",
  backgroundColor: "#ffffff",
  border: "1px solid rgba(0, 0, 0, 0.04)",
});

export const hotHeader = style({
  display: "flex",
  alignItems: "baseline",
  gap: "0.75rem",
  marginBottom: "1.25rem",
});

export const hotBadge = style({
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "1.05rem",
  color: "#ff5f6d",
});

export const hotSubtitle = style({
  fontFamily: "Pretendard",
  fontWeight: 500,
  fontSize: "0.85rem",
  color: "#8b8b8b",
});

export const hotRows = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "0.75rem",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "1.2rem",
    },
  },
});

export const hotItemButton = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "36px 1fr",
  gap: "0.75rem",
  alignItems: "center",
  padding: "0.7rem 0.85rem",
  borderRadius: "0.9rem",
  border: "0.5px solid rgba(0, 0, 0, 0.18)",
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(250, 250, 250, 0.9))",
  cursor: "pointer",
  transition: "transform 0.2s ease, border 0.2s ease",
  selectors: {
    '&:hover': {
      transform: "translateY(-2px)",
      borderColor: "rgba(255, 95, 109, 0.4)",
    },
    '&:focus-visible': {
      outline: "none",
      borderColor: "#ff5f6d",
    },
    '&:active': {
      transform: "translateY(0)",
    },
  },
});

export const hotItemSelected = style({
  borderColor: "#ff5f6d",
  background: "linear-gradient(135deg, rgba(255, 95, 109, 0.2), rgba(255, 150, 109, 0.15))",
});

export const hotNumber = style({
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "1rem",
  color: "#333333",
  textAlign: "center",
});

export const hotLabelGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  textAlign: "left",
});

export const hotLabel = style({
  fontFamily: "Pretendard",
  fontWeight: 600,
  fontSize: "0.95rem",
  color: "#1f1f1f",
  lineHeight: 1.2,
});

export const hotQuantity = style({
  fontFamily: "Pretendard",
  fontWeight: 500,
  fontSize: "0.8rem",
  color: "#9a9a9a",
});

export const hotState = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "140px",
  borderRadius: "1rem",
  backgroundColor: "#f7f7f7",
  fontFamily: "Pretendard",
  fontWeight: 500,
  fontSize: "0.95rem",
  color: "#6a6a6a",
  textAlign: "center",
  padding: "0 1rem",
});

