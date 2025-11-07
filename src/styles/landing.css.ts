import { style } from '@vanilla-extract/css'
import { fontFamilies, fontWeights } from './fonts.css'

export const landingRoot = style({
  width: '100%',
  boxSizing: 'border-box',
  minWidth: '320px',
  minHeight: '100%',
  backgroundColor: '#FFFFFF',
  color: '#111111',
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 0 40px',
  gap: '10px',
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

export const trendImage = style({
  width: '140px',
  height: '120px',
  borderRadius: '6px',
  flexShrink: 0,
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
  lineHeight: 1.2,
  opacity: 0.72,
  margin: '3px 0 0 0',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
})

export const trendIndicator = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'center',
  marginTop: 'auto',
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
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
})

export const ctaCard = style({
  backgroundColor: '#F5F5F5',
  color: '#171717',
  borderRadius: '13px',
  padding: '28px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  height: '232px',
  textAlign: 'right',
  justifyContent: 'space-between',
})

export const ctaIllustration = style({
  display: 'block',
  width: '132px',
  height: '132px',
  objectFit: 'contain',
})

export const ctaEyebrow = style({
  fontFamily: fontFamilies.pretendard,
  fontWeight: fontWeights.semiBold,
  fontSize: '11px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: '#C5C5C5',
  textAlign: 'right',
})

export const ctaTitle = style({
  fontFamily: fontFamilies.montserrat,
  fontWeight: fontWeights.semiBold,
  fontSize: '20px',
  margin: 0,
  textAlign: 'left',
})

