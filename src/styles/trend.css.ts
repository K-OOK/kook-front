import { keyframes, style } from "@vanilla-extract/css";
import { fontFamilies, fontWeights } from "./fonts.css";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const trendRoot = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "0 0 30px",
});

export const trendHeader = style({
  display: "flex",
  flexDirection: "column",

});

export const trendTitle = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.semiBold,
  fontSize: "26px",
  letterSpacing: "-0.02em",
  margin: 0,
});

export const trendSubtitle = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.medium,
  fontSize: "11px",
  color: "#C5C5C5",
  marginBottom: "20px",
});

export const cardGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "10px",
});

export const card = style({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  minHeight: "250px",
  backgroundColor: "#1d1d1d",
  display: "flex",
  alignItems: "flex-end",
  isolation: "isolate",
  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
});

export const cardImage = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.6s ease",
  selectors: {
    [`${card}:hover &`]: {
      transform: "scale(1.05)",
    },
  },
});

export const cardOverlay = style({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.65) 70%, rgba(0, 0, 0, 0.85) 100%)",
  zIndex: 1,
});

export const cardBody = style({
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "20px 16px 20px",
  color: "#ffffff",
});

export const cardName = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.extraBold,
  fontSize: "20px",
  margin: 0,
});

export const cardDescription = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.medium,
  fontSize: "10px",
  lineHeight: 1.4,
  color: "#ffffff",
  margin: 0,
});

export const cardMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  color: "rgba(255, 255, 255, 0.85)",
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.bold,
  fontSize: "12px",
});

export const emptyState = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.medium,
  color: "#9f9f9f",
});

export const spinner = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  border: "3px solid rgba(0, 0, 0, 0.08)",
  borderTopColor: "#111111",
  animationName: spin,
  animationDuration: "0.9s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
});
