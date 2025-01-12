'use client'

import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { ScrollToTop } from '../shared/scrollToTop'

const Title = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  const inView = useInView(ref)

  useEffect(() => {
    inView ? setShow(false) : setShow(true)
  }, [inView])

  return (
    <>
      <motion.h1
        ref={ref}
        className="font-serif text-5xl italic text-white md:text-6xl xl:text-8xl"
      >
        All Projects
      </motion.h1>
      <ScrollToTop show={show} />
    </>
  )
}

export default Title
