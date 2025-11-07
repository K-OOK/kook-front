import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "600px", // 최대 너비 600px 설정
  width: "100%", // 전체 너비 사용
  display: "flex",
  flexDirection: "column",
  padding: "2rem 0",
  backgroundColor: "#ffffff",
  overflowY: "scroll",
  margin: "0 auto", // 중앙 정렬
  position: "relative",
});

export const header = style({
  textAlign: "center",
  //marginBottom: "1rem",
  fontFamily: "Montserrat",
  position: "relative",
  zIndex: 1,
});

export const logo = style({
  fontSize: "2.5rem",
  marginBottom: "1rem",
});

export const title = style({
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "#1a1a1a",
  margin: "0 0 0.5rem 0",
  lineHeight: "1",
  textAlign: "left",
});

export const subtitle = style({
  fontSize: "1.5rem",
  color: "#555555",
  margin: 0,
  fontWeight: "400",
  fontFamily: "Montserrat",
});

export const potSection = style({
  //marginBottom: "2rem",
  //width: "100%",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  zIndex: 1,
  overflow: "visible",
  marginLeft: "-20px",
  marginRight: "-20px",
  // 너비를 100% + 40px (좌우 20px씩)로 확장
  width: "calc(100% + 40px)",
});

export const potContainer = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "250px",
  zIndex: 1,
});

export const potSvg = style({
  width: "280px",
  height: "150px",

  "@media": {
    "(max-width: 768px)": {
      width: "280px",
      height: "150px",
    },
  },
});

export const ingredientsList = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ingredientTag = style({
  backgroundColor: "white",
  color: "black",
  padding: "0.5rem 1.25rem",
  borderRadius: "3.125rem",
  fontSize: "0.95rem",
  fontWeight: "500",
  whiteSpace: "nowrap",
});

export const inputSection = style({
  width: "100%",
  // maxWidth: "500px",
  marginBottom: "2rem",
  position: "relative",
  zIndex: 1,
});

export const hotSection = style({
  width: "100%",
  marginBottom: "2rem",
  position: "relative",
  zIndex: 1,
});

export const hotTitle = style({
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "#1a1a1a",
  marginBottom: "1rem",
  margin: "0 0 1rem 0",
  fontFamily: "Montserrat",
});

export const recipesGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
  width: "100%",
  // "@media": {
  //   "(max-width: 768px)": {
  //     gridTemplateColumns: "repeat(2, 1fr)",
  //   },
  // },
});

export const recipeCard = style({
  aspectRatio: "1",
  backgroundColor: "#e8e8e8",
  borderRadius: "0.75rem",
});

export const backBlue = style({
  position: "absolute",
  top: "-20px",
  right: "-30px",
  width: "200px",
  height: "auto",
  zIndex: 0,
  pointerEvents: "none",
  "@media": {
    "(max-width: 768px)": {
      top: "-10px",
      right: "-20px",
      width: "150px",
    },
  },
});

export const backRed = style({
  position: "absolute",
  bottom: "-20px",
  left: "-30px",
  width: "180px",
  height: "auto",
  zIndex: 0,
  pointerEvents: "none",
  "@media": {
    "(max-width: 768px)": {
      bottom: "-10px",
      left: "-20px",
      width: "130px",
    },
  },
});
