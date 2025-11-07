import { globalStyle, keyframes, style } from '@vanilla-extract/css'
import { fontFamilies, fontWeights } from './fonts.css'

const ctaIllustrationWiggle = keyframes({
  '0%': { transform: 'rotate(0deg) translate3d(0, 0, 0)' },
  '20%': { transform: 'rotate(4deg) translate3d(1px, -2px, 0)' },
  '40%': { transform: 'rotate(-3deg) translate3d(-2px, 1px, 0)' },
  '60%': { transform: 'rotate(3deg) translate3d(1px, -1px, 0)' },
  '80%': { transform: 'rotate(-2deg) translate3d(-1px, 1px, 0)' },
  '100%': { transform: 'rotate(0deg) translate3d(0, 0, 0)' },
})

const trendSpinnerKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const landingRoot = style({
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box',
  minWidth: '320px',
  minHeight: '100vh',
  backgroundColor: '#FFFFFF',
  color: '#111111',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 0px 40px',

})

export const landingContent = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
})

export const heroSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export const heroTitle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.semiBold,
  fontSize: '32px',
  lineHeight: 'normal',
  letterSpacing: '-0.04em',
})

export const heroLine = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const heroEmoji = style({
  fontSize: '28px',
})

export const trendCard = style({
  backgroundColor: '#111111',
  height: '220px',
  color: '#FFFFFF',
  borderRadius: '13px',
  padding: '10px 26px 20px 26px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: '20px',
})

export const trendHeader = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.semiBold,
  fontSize: '20px',
})

export const trendMain = style({
  display: 'flex',
  gap: '20px',
  alignItems: 'flex-start',
})

export const trendMainInteractive = style({
  cursor: 'pointer',
  transition: 'transform 0.2s ease-out',
  selectors: {
    '&:hover': {
      transform: 'translateY(-2px) scale(1.01)',
    },
    '&:focus-visible': {
      outline: '2px solid #FFFFFF',
      outlineOffset: '4px',
      transform: 'translateY(-1px) scale(1.005)',
    },
    '&:active': {
      transform: 'scale(0.995)',
    },
  },
})

export const trendImage = style({
  width: '120px',
  height: '104px',
  borderRadius: '6px',
  flexShrink: 0,
  objectFit: 'cover',
  '@media': {
    'screen and (min-width: 600px)': {
      width: '140px',
      height: '120px',
    },
  },
})

export const trendInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  minWidth: 0,
})

export const trendName = style({
  fontSize: '15px',
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.semiBold,
  margin: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const trendDescription = style({
  fontSize: '14px',
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.semiBold,
  color: '#909090',
  lineHeight: 1.4,
  opacity: 0.82,
  margin: '3px 0 0 0',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 5,
  overflow: 'hidden',
})

export const trendIndicator = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'center',
  marginTop: 'auto',
})

export const trendIndicatorButton = style({
  border: 'none',
  background: 'transparent',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.2s ease',
  opacity: 0.7,
  selectors: {
    '&:hover': { opacity: 1 },
    '&:focus-visible': {
      outline: '2px solid #FFFFFF',
      outlineOffset: '4px',
      opacity: 1,
    },
    '&:active': { opacity: 1 },
  },
})

export const trendControls = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  marginTop: '18px',
})

export const trendSpinner = style({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '3px solid rgba(255, 255, 255, 0.2)',
  borderTopColor: '#FFFFFF',
  animation: `${trendSpinnerKeyframes} 0.9s linear infinite`,
  margin: '12px auto 0',
})

export const trendMessage = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.semiBold,
  fontSize: '14px',
  color: '#B5B5B5',
  textAlign: 'center',
  margin: '24px 0 0 0',
})

export const dot = style({
  width: '8px',
  height: '8px',
  borderRadius: '9999px',
  backgroundColor: '#5F5F5F',
  transition: 'all 0.2s ease',
})

export const dotActive = style([
  dot,
  {
    width: '20px',
    backgroundColor: '#FFFFFF',
  },
])

export const ctaGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '16px',
  columnGap: '16px',
  rowGap: '16px',
  '@media': {
    'screen and (max-width: 480px)': {
      gridTemplateColumns: 'repeat(2, minmax(140px, 1fr))',
      gap: '12px',
    },
  },
})

export const ctaCard = style({
  backgroundColor: '#F5F5F5',
  color: '#171717',
  borderRadius: '13px',
  padding: '24px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '14px',
  height: '226px',
  justifyContent: 'space-between',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
  boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
  '@media': {
    'screen and (min-width: 600px)': {
      padding: '28px 24px',
      gap: '16px',
      height: '232px',
    },
  },
  selectors: {
    '&:hover': {
      boxShadow: '0 12px 24px rgba(17, 17, 17, 0.08)',
    },
    '&:focus-visible': {
      outline: '2px solid #111111',
      outlineOffset: '4px',
    },
    '&:active': {
      transform: 'scale(0.99)',
    },
  },
})

export const ctaCardTop = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '12px',
})

export const ctaIllustrationWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

export const ctaIllustration = style({
  display: 'block',
  width: '110px',
  height: '110px',
  objectFit: 'contain',
  transformOrigin: 'center',
  transition: 'transform 0.25s ease-out',
  willChange: 'transform',
  selectors: {
    '&:hover': {
      animation: `${ctaIllustrationWiggle} 0.9s ease-in-out infinite`,
      transform: 'scale(1.03)',
    },
    '&:focus-visible': {
      animation: `${ctaIllustrationWiggle} 0.9s ease-in-out infinite`,
      transform: 'scale(1.03)',
    },
    '&:active': {
      animation: `${ctaIllustrationWiggle} 0.6s ease-in-out`,
      transform: 'scale(0.97)',
    },
  },
  '@media': {
    'screen and (min-width: 480px)': {
      width: '118px',
      height: '118px',
    },
    'screen and (min-width: 600px)': {
      width: '145px',
      height: '145px',
    },
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
      selectors: {
        '&:hover': { animation: 'none', transform: 'none' },
        '&:focus-visible': { animation: 'none', transform: 'none' },
        '&:active': { animation: 'none', transform: 'none' },
      },
    },
  },
})

export const ctaEyebrow = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.semiBold,
  fontSize: '10px',
  letterSpacing: '0.04em',
  color: '#C5C5C5',
  textAlign: 'right',
  whiteSpace: 'pre-line',
  '@media': {
    'screen and (min-width: 600px)': {
      fontSize: '11px',
    },
  },
})

export const ctaTitle = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.semiBold,
  fontSize: '18px',
  margin: 0,
  textAlign: 'left',
  whiteSpace: 'pre-line',
  paddingTop: '6px',
  '@media': {
    'screen and (min-width: 600px)': {
      fontSize: '20px',
      marginTop: '-25px',
    },
  },
})

globalStyle(`.${ctaCard}:hover .${ctaIllustration}`, {
  animation: `${ctaIllustrationWiggle} 0.9s ease-in-out infinite`,
  transform: 'scale(1.03)',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
      transform: 'none',
    },
  },
})

globalStyle(`.${ctaCard}:focus-visible .${ctaIllustration}`, {
  animation: `${ctaIllustrationWiggle} 0.9s ease-in-out infinite`,
  transform: 'scale(1.03)',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
      transform: 'none',
    },
  },
})

globalStyle(`.${ctaCard}:active .${ctaIllustration}`, {
  animation: `${ctaIllustrationWiggle} 0.6s ease-in-out`,
  transform: 'scale(0.97)',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
      transform: 'none',
    },
  },
})

