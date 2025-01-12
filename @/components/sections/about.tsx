import { Download } from 'lucide-react'
import * as motion from 'motion/react-client'
import Link from 'next/link'

const About = () => {
  const webKeyWord = {
    offscreen: {
      width: 0,
    },
    onscreen: {
      width: '100%',
    },
    transition: {
      durationa: 0.5,
      ease: 'easeIn',
    },
  }

  return (
    <section className="container flex-col px-6 py-12 md:py-24 2xl:px-0">
      <motion.h2
        whileInView={'onscreen'}
        initial="offscreen"
        viewport={{ amount: 0.8 }}
        className="font-serif text-4xl font-black italic !leading-relaxed text-white md:text-6xl xl:text-8xl"
      >
        Hi, I'm Spencer. <br />
        And{' '}
        <span className="relative inline-block text-nowrap font-serif font-bold text-white">
          <div className="relative z-10 inline">
            <motion.div
              variants={webKeyWord}
              className="absolute left-0 top-0 -z-10 h-full bg-blue-700"
            ></motion.div>
            I Build for the Web{' '}
          </div>
          .
        </span>
      </motion.h2>
      <div className="mt-12 flex flex-col items-center md:items-end">
        <p className="w-full text-lg !leading-relaxed text-white md:text-2xl lg:w-2/3">
          A Malaysia-based Frontend Developer with 4 years of experience in the
          web industry, specializing in crafting UX-friendly, responsive, and
          high-performance websites. Proficient in technologies ranging from
          WordPress custom theme development to modern frameworks like{' '}
          <span className="underline">React</span> and{' '}
          <span className="underline">Next.js</span>. Passionate about
          leveraging cutting-edge tools and frameworks to build scalable,
          user-centered applications that make a lasting impact.
        </p>
        <Link
          href={'/documents/resume.pdf'}
          className="relative mt-8 flex w-fit items-center justify-center gap-2 font-bold text-white xl:text-2xl"
        >
          Download CV
          <Download className="size-6 xl:size-8" />
          <div className="absolute bottom-0 top-auto h-2 w-full translate-y-2 bg-blue-700"></div>
        </Link>
      </div>
    </section>
  )
}

export default About
