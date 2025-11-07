import { style } from '@vanilla-extract/css'

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
  gap: '32px',
})

export const landingContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
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
  fontSize: '32px',
  lineHeight: 1.1,
  fontWeight: 700,
})

export const heroLine = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const heroEmoji = style({
  fontSize: '28px',
})

export const sectionLabel = style({
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#6B6B6B',
})

export const trendCard = style({
  backgroundColor: '#111111',
  color: '#FFFFFF',
  borderRadius: '24px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})

export const trendHeader = style({
  fontSize: '18px',
  fontWeight: 600,
})

export const trendMain = style({
  display: 'flex',
  gap: '16px',
})

export const trendImage = style({
  width: '96px',
  height: '96px',
  borderRadius: '16px',
  objectFit: 'cover',
})

export const trendInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const trendName = style({
  fontSize: '20px',
  fontWeight: 700,
})

export const trendDescription = style({
  fontSize: '14px',
  lineHeight: 1.4,
  opacity: 0.82,
})

export const trendIndicator = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'center',
})

export const dot = style({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.24)',
})

export const dotActive = style([
  dot,
  {
    backgroundColor: '#FFFFFF',
  },
])

export const ctaGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px',
})

export const ctaCard = style({
  backgroundColor: '#F5F5F5',
  borderRadius: '24px',
  padding: '24px 18px',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  justifyContent: 'space-between',
  minHeight: '160px',
})

export const ctaIllustration = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  fontSize: '32px',
})

export const ctaEyebrow = style({
  fontSize: '12px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: '#8D8D8D',
})

export const ctaTitle = style({
  fontSize: '18px',
  fontWeight: 600,
})

