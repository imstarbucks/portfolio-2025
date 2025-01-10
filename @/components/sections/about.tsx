import * as motion from 'motion/react-client'

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
    <section className="container flex-col py-24">
      <motion.h2
        whileInView={'onscreen'}
        initial="offscreen"
        viewport={{ amount: 0.8 }}
        className="font-serif text-8xl font-black italic leading-relaxed text-white"
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
      <div className="mt-12 flex justify-end">
        <p className="w-2/3 text-2xl leading-relaxed text-white">
          A Malaysia-based Frontend Developer with 4 years of experience in the
          web industry, specializing in crafting UX-friendly, responsive, and
          high-performance websites. Proficient in technologies ranging from
          WordPress custom theme development to modern frameworks like{' '}
          <span className="underline">React</span> and{' '}
          <span className="underline">Next.js</span>. Passionate about
          leveraging cutting-edge tools and frameworks to build scalable,
          user-centered applications that make a lasting impact.
        </p>
      </div>
    </section>
  )
}

export default About
