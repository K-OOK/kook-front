import { fontFamilies, fontWeights } from './fonts.css';

/**
 * 폰트 타입 정의
 */
export type MontserratWeight = 300 | 400 | 500 | 600 | 700;
export type PretendardWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * 폰트 스타일 객체 타입
 */
export interface FontStyle {
  fontFamily: string;
  fontWeight: number;
}

/**
 * Montserrat 폰트 스타일 객체 생성
 * @param weight - 폰트 굵기 (기본값: 400)
 * @returns 폰트 스타일 객체
 */
export const getMontserratStyle = (weight: MontserratWeight = 400): FontStyle => ({
  fontFamily: fontFamilies.montserrat,
  fontWeight: weight,
});

/**
 * Pretendard 폰트 스타일 객체 생성
 * @param weight - 폰트 굵기 (기본값: 400)
 * @returns 폰트 스타일 객체
 */
export const getPretendardStyle = (weight: PretendardWeight = 400): FontStyle => ({
  fontFamily: fontFamilies.pretendard,
  fontWeight: weight,
});

/**
 * 폰트 굵기 상수 (재export)
 */
export { fontWeights };

/**
 * 폰트 패밀리 상수 (재export)
 */
export { fontFamilies };
