import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import logoMark from '../../assets/logo.svg'
import {
  brandIcon,
  brandMark,
  brandName,
  content,
  dynamicRow,
  guidelines,
  kicker,
  splashRoot,
  stackedColumn,
  stackedItem,
  title,
} from '../../styles/splash.css.ts'

const switchInterval = 1100
const brandDelay = 900
const redirectDelay = 1300

type HighlightItem =
  | { kind: 'word'; text: string; delay?: number }
  | { kind: 'brand'; delay?: number }

const highlightSequence: readonly HighlightItem[] = [
  { kind: 'word', text: 'tteokbokki' },
  { kind: 'word', text: 'kimchi' },
  { kind: 'word', text: 'ramyeon' },
  { kind: 'word', text: 'kimbap' },
  { kind: 'brand', delay: brandDelay },
]

interface SplashScreenProps {
  onComplete?: () => void
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount < highlightSequence.length) {
      const revealDelay =
        highlightSequence[visibleCount]?.delay ?? switchInterval

      const timer = setTimeout(() => {
        setVisibleCount((current) => current + 1)
      }, revealDelay)

      return () => clearTimeout(timer)
    }

    if (visibleCount === highlightSequence.length && onComplete) {
      const finishTimer = setTimeout(() => onComplete(), redirectDelay)
      return () => clearTimeout(finishTimer)
    }
  }, [visibleCount, onComplete])

  const visibleItems = useMemo(
    () => highlightSequence.slice(0, visibleCount),
    [visibleCount]
  )

  const primaryWordEntry = highlightSequence[0]
  const showPrimaryWord =
    primaryWordEntry?.kind === 'word' && visibleCount > 0
  const primaryWord =
    primaryWordEntry?.kind === 'word' ? primaryWordEntry.text : ''

  const stackedRemainder = useMemo(
    () => (showPrimaryWord ? visibleItems.slice(1) : visibleItems),
    [visibleItems, showPrimaryWord]
  )

  return (
    <div className={splashRoot}>
      <div className={guidelines} aria-hidden />
      <div className={content}>
        <span className={kicker}></span>
        <div className={title}>
          <span>EXPLORE</span>
          <span>YOUR</span>
          <div className={dynamicRow}>
            <span>K -</span>
            <div className={stackedColumn}>
              <AnimatePresence>
                {showPrimaryWord && (
                  <motion.span
                    key="primary-word"
                    className={stackedItem}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  >
                    {primaryWord}
                  </motion.span>
                )}
                {stackedRemainder.map((item) =>
                  item.kind === 'word' ? (
                    <motion.span
                      key={`word-${item.text}`}
                      className={stackedItem}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                    >
                      {item.text}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="brand-mark"
                      className={brandMark}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                    >
                      <img src={logoMark} alt="Kook" className={brandIcon} />
                      <span className={brandName}>K</span>
                    </motion.span>
                  )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen

