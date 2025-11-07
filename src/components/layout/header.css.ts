import { style } from '@vanilla-extract/css'

export const headerRoot = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 0',
})

export const brandCluster = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const logoMark = style({
  width: '36px',
  height: '36px',
})

export const brandName = style({
  fontWeight: 600,
  fontSize: '16px',
  letterSpacing: '0.08em',
})
