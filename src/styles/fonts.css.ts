import { style } from '@vanilla-extract/css';

/**
 * 폰트 패밀리 상수
 */
export const fontFamilies = {
  montserrat: 'Montserrat, sans-serif',
  pretendard: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
} as const;

/**
 * 폰트 굵기 상수
 */
export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

// ============================================================================
// Montserrat 폰트 스타일
// ============================================================================

export const montserratLight = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.light,
});

export const montserratRegular = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.regular,
});

export const montserratMedium = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.medium,
});

export const montserratSemiBold = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.semiBold,
});

export const montserratBold = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.bold,
});

// ============================================================================
// Pretendard 폰트 스타일
// ============================================================================

export const pretendardThin = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.thin,
});

export const pretendardExtraLight = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.extraLight,
});

export const pretendardLight = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.light,
});

export const pretendardRegular = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.regular,
});

export const pretendardMedium = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.medium,
});

export const pretendardSemiBold = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.semiBold,
});

export const pretendardBold = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.bold,
});

export const pretendardExtraBold = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.extraBold,
});

export const pretendardBlack = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.black,
});
