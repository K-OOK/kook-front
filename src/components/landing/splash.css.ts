import { style } from '@vanilla-extract/css'

const gradient = 'linear-gradient(135deg, #C43D3D 0%, #4759E4 100%)'

export const splashRoot = style({
  position: 'relative',
  width: 'calc(100% + 40px)',
  height: '100%',
  backgroundColor: '#080808',
  color: '#FFFFFF',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '150px 20px 48px'
})

export const guidelines = style({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      left: '32px',
      top: 0,
      bottom: 0,
      width: '1px',
      background: 'rgba(255, 255, 255, 0.08)',
    },
    '&::after': {
      content: '',
      position: 'absolute',
      right: '32px',
      top: 0,
      bottom: 0,
      width: '1px',
      background: 'rgba(255, 255, 255, 0.08)',
    },
  },
})

export const content = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
})

export const kicker = style({
  fontSize: '14px',
  letterSpacing: '0.24em',
  textTransform: 'uppercase',
  opacity: 0.65,
})

export const title = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  fontSize: '46px',
  lineHeight: 1.05,
  fontWeight: 700,
  '@media': {
    'screen and (max-width: 360px)': {
      fontSize: '40px',
    },
    'screen and (max-width: 320px)': {
      fontSize: '36px',
    },
  },
})

export const dynamicRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
})

export const stackedColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  alignItems: 'flex-start',
})

export const stackedItem = style({
  backgroundImage: gradient,
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  fontWeight: 600,
  fontSize: '44px',
  lineHeight: 1.05,
  '@media': {
    'screen and (max-width: 360px)': {
      fontSize: '36px',
    },
    'screen and (max-width: 320px)': {
      fontSize: '32px',
    },
  },
})

export const brandMark = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 600,
  fontSize: '44px',
  lineHeight: 1.05,
  '@media': {
    'screen and (max-width: 360px)': {
      fontSize: '36px',
    },
    'screen and (max-width: 320px)': {
      fontSize: '32px',
    },
  },
})

export const brandIcon = style({
  width: '44px',
  height: '44px',
  display: 'block',
  '@media': {
    'screen and (max-width: 360px)': {
      width: '36px',
      height: '36px',
    },
    'screen and (max-width: 320px)': {
      width: '32px',
      height: '32px',
    },
  },
})

export const brandName = style({
  color: '#FFFFFF',
  fontWeight: 600,
})

