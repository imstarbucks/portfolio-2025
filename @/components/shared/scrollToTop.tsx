import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

interface ScrollToTopProps {
  show: boolean
}

const ScrollToTop = ({ show }: ScrollToTopProps) => {
  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.button
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key="scrollToTop"
          type="button"
          onClick={onClick}
          className="fixed bottom-8 right-4 flex size-8 items-center justify-center rounded-full border border-white text-white transition-all hover:bg-white hover:text-black md:bottom-8 md:right-8 lg:size-16"
        >
          {<ArrowUp className="size-6 lg:size-12" />}
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export { ScrollToTop }
