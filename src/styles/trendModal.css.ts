import { style } from "@vanilla-extract/css";
import { fontFamilies, fontWeights } from "./fonts.css";

export const modalOverlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  zIndex: 1000,
});

export const modalContent = style({
  width: "100%",
  maxWidth: "560px",
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  boxShadow: "0 32px 60px rgba(0, 0, 0, 0.25)",
  display: "flex",
  flexDirection: "column",
  gap: "0px",
  padding: "28px 28px 32px",
  position: "relative",
  color: "#111111",
});

export const modalHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const modalTitleRow = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "6px",
  marginBottom: "10px",
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.bold,
  color: "#3C3C3C",
});

export const modalTitleMainRow = style({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: "16px",
  width: "100%",
  flexWrap: "nowrap",
});

export const modalTitleLeading = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  minWidth: 0,
  flex: 1,
  overflow: "hidden",
});

export const modalTitleIcon = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
});

export const modalTitle = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.extraBold,
  fontSize: "22px",
  margin: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const modalTitleIconImage = style({
  width: "25px",
  height: "25px",
});

export const modalMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
});

export const modalMetaItem = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "6px 10px",
  borderRadius: "12px",
  backgroundColor: "#f5f5f5",
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.medium,
  fontSize: "12px",
  color: "#4a4a4a",
});

export const modalTimeChip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "4px 10px",
  borderRadius: "12px",
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.semiBold,
  fontSize: "12px",
});

export const modalMetaIcon = style({
  fontSize: "14px",
});

export const modalDescription = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.medium,
  fontSize: "13px",
  lineHeight: 1.5,
  color: "#4a4a4a",
});

export const modalHeroImage = style({
  width: "100%",
  aspectRatio: "16 / 10",
  borderRadius: "16px",
  objectFit: "cover",
  marginBottom: "20px",
});

export const ingredientsSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const ingredientsHeading = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.semiBold,
  fontSize: "14px",
  margin: 0,
});

export const ingredientList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

export const ingredientItem = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 10px",
  borderRadius: "12px",
  backgroundColor: "#f4f4f4",
});

export const ingredientNameBadge = style({
  padding: "4px 8px",
  borderRadius: "8px",
  backgroundColor: "#111111",
  color: "#ffffff",
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.semiBold,
  fontSize: "12px",
});

export const ingredientAmount = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.medium,
  fontSize: "12px",
  color: "#2b2b2b",
});

export const modalFooter = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const modalPrimaryButton = style({
  width: "48px",
  height: "48px",
  borderRadius: "50px",
  border: "none",
  backgroundColor: "#111111",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
