'use client'

import { useInView } from 'motion/react'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { ScrollToTop } from '../shared/scrollToTop'

const LandingContainer = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    inView ? setShow(false) : setShow(true)
  }, [inView])

  return (
    <>
      <section
        ref={ref}
        className="mx-auto flex min-h-screen max-w-full items-center justify-center px-6 py-24 xl:max-w-[90%] xl:py-0"
      >
        {children}
      </section>
      <ScrollToTop show={show} />
    </>
  )
}

export default LandingContainer
