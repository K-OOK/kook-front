// src/styles/slick.css.ts

import { globalStyle } from "@vanilla-extract/css";

const DOT_SIZE = "8px";
const ACTIVE_WIDTH = "28px"; // 캡슐의 너비

// 1. 컨테이너 (<ul>) 설정
globalStyle(".slick-dots", {
  bottom: "-30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  margin: "0",
});

// 2. 각 점을 포함하는 <li> 요소 설정
globalStyle(".slick-dots li", {
  listStyle: "none",
  display: "inline-block",
  margin: "0 4px", // 점 사이 간격
  width: DOT_SIZE, // 기본 크기
  height: DOT_SIZE,
  padding: "0",
  cursor: "pointer",
});

// 3. 점 자체 (button:before)의 기본 스타일 (비활성화 상태)
globalStyle(".slick-dots li button:before", {
  content: '""',
  width: DOT_SIZE,
  height: DOT_SIZE,
  backgroundColor: "#D1D1D1", // 연한 회색
  borderRadius: "50%", // 원형
  display: "block",
  transition: "all 0.3s ease-in-out", // 전환 효과
  opacity: 1,
});

// 4. 🌟 활성화된 점 (캡슐 형태) 스타일 🌟
globalStyle(".slick-dots li.slick-active", {
  // 활성화된 캡슐 크기에 맞춰 li 컨테이너 너비를 늘려야 합니다.
  width: ACTIVE_WIDTH,
});

globalStyle(".slick-dots li.slick-active button:before", {
  // 사진과 같이 검은색의 길쭉한 캡슐 모양
  width: ACTIVE_WIDTH,
  height: DOT_SIZE,
  backgroundColor: "#000000", // 검은색
  borderRadius: "4px", // 둥근 모서리 (캡슐 모양)
});

// button 요소의 기본 스타일 (클릭 영역 확보 및 내부 텍스트 숨김)
globalStyle(".slick-dots li button", {
  fontSize: 0,
  lineHeight: 0,
  display: "block",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  color: "transparent",
  border: "0",
  outline: "none",
  background: "transparent",
});
