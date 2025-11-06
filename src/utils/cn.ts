import { clsx, type ClassValue } from 'clsx';

/**
 * 클래스 이름 유틸리티 함수
 * tailwind-merge 대신 clsx 사용
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

