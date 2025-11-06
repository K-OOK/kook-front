import { globalStyle } from '@vanilla-extract/css';
import { fontFamilies, fontWeights } from './fonts.css';

/**
 * 전역 폰트 설정
 * Pretendard를 기본 폰트로 사용
 */
globalStyle('body', {
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.regular,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});
