import Link from 'next/link'
import Image from 'next/image'
import * as motion from 'motion/react-client'
import reactIcon from '@/public/dev-icons/react-original.svg'
import nextjsIcon from '@/public/dev-icons/nextjs-original.svg'
import javascriptIcon from '@/public/dev-icons/javascript-original.svg'
import typescriptIcon from '@/public/dev-icons/typescript-original.svg'
import tailwindIcon from '@/public/dev-icons/tailwindcss-original.svg'
import css3Icon from '@/public/dev-icons/css3-original.svg'
import { Box } from '@/@/components/shared/box'
import About from '@/@/components/sections/about'
import Skills from '@/@/components/sections/skills'
import Projects from '@/@/components/sections/projects'
import linkedInIcon from '@/public/social-icons/linkedin.svg'
import githubIcon from '@/public/social-icons/github.svg'
import gmailIcon from '@/public/social-icons/google.svg'

export default function Home() {
  const introContainer = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const introContainerH1 = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  }
  const introContainerText = {
    hidden: {
      skewX: 0,
      opacity: 0,
      x: -100,
    },
    show: {
      skewX: -15,
      opacity: 1,
      x: 0,
      transition: {
        skewX: { delay: 0.4 },
        opacity: { duration: 0.5 },
        x: { duration: 0.5 },
      },
    },
  }

  return (
    <div className="bg-gray-950">
      <main>
        <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-24">
          <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
            {/* Intro */}
            <Box
              variant={'blue'}
              className="order-1 col-span-full row-span-2 w-full md:col-span-2"
              variants={introContainer}
              initial={'hidden'}
              animate={'show'}
            >
              <motion.h1
                variants={introContainerH1}
                className="font-serif text-6xl font-bold md:text-8xl"
              >
                Hello.
              </motion.h1>
              <motion.p
                variants={introContainerText}
                className="font-serif text-4xl"
              >
                i am
                <br />
                Spencer
              </motion.p>
            </Box>

            {/* Job Title */}
            <Box
              animate={{
                borderRadius: [16, 100, 200, 100, 16],
              }}
              transition={{
                duration: 2,
                ease: 'linear',
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 2,
              }}
              variant={'purple'}
              className="relative order-2 col-span-2 row-span-1 w-full md:col-span-1"
              radius={'none'}
            >
              <svg viewBox="0 0 250 250" className="animate-spin-slow w-full">
                <path
                  id="curve"
                  d="M 125,125 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                  fill="none"
                />
                <text fill="white" fontSize={30} className="font-serif">
                  <textPath href="#curve">
                    Frontend Developer &#183; Frontend Developer &#183;
                  </textPath>
                </text>
              </svg>
            </Box>

            {/* Skills */}
            <Box
              variant={'green'}
              className="relative order-5 col-span-full w-full md:order-3 md:col-span-1 md:row-span-2"
            >
              <h2 className="mb-4 hidden text-center font-serif text-3xl font-bold md:block">
                Skills
              </h2>
              <div className="grid grid-cols-3 gap-4 md:grid-cols-2">
                <motion.div
                  className="h-fit w-fit rounded-2xl bg-white p-4"
                  whileHover={{
                    rotate: -10,
                    transition: {
                      duration: 0.5,
                      type: 'spring',
                      bounce: 0.5,
                    },
                    transformOrigin: 'bottom right',
                  }}
                >
                  {' '}
                  <Image
                    src={javascriptIcon}
                    alt="javascript"
                    width={100}
                    height={100}
                    className="size-16"
                  />
                </motion.div>
                <motion.div
                  className="h-fit w-fit rounded-2xl bg-white p-4"
                  whileHover={{
                    rotate: 10,
                    transition: {
                      duration: 0.5,
                      type: 'spring',
                      bounce: 0.5,
                    },
                    transformOrigin: 'top right',
                  }}
                >
                  <Image
                    src={typescriptIcon}
                    alt="typescript"
                    width={100}
                    height={100}
                    className="size-16"
                  />
                </motion.div>
                <motion.div
                  className="h-fit w-fit rounded-2xl bg-white p-4"
                  whileHover={{
                    rotate: 10,
                    transition: {
                      duration: 0.5,
                      type: 'spring',
                      bounce: 0.5,
                    },
                    transformOrigin: 'top left',
                  }}
                >
                  <Image
                    src={reactIcon}
                    alt="react"
                    width={100}
                    height={100}
                    className="size-16"
                  />
                </motion.div>
                <motion.div
                  className="h-fit w-fit rounded-2xl bg-white p-4"
                  whileHover={{
                    rotate: -10,
                    transition: {
                      duration: 0.5,
                      type: 'spring',
                      bounce: 0.5,
                    },
                    transformOrigin: 'top',
                  }}
                >
                  <Image
                    src={nextjsIcon}
                    alt="nextjs"
                    width={100}
                    height={100}
                    className="size-16"
                  />
                </motion.div>
                <motion.div
                  className="h-fit w-fit rounded-2xl bg-white p-4"
                  whileHover={{
                    rotate: -10,
                    transition: {
                      duration: 0.5,
                      type: 'spring',
                      bounce: 0.5,
                    },
                    transformOrigin: 'bottom',
                  }}
                >
                  <Image
                    src={tailwindIcon}
                    alt="taiwindcss"
                    width={100}
                    height={100}
                    className="size-16"
                  />
                </motion.div>
                <motion.div
                  className="h-fit w-fit rounded-2xl bg-white p-4"
                  whileHover={{
                    rotate: -10,
                    transition: {
                      duration: 0.5,
                      type: 'spring',
                      bounce: 0.5,
                    },
                    transformOrigin: 'left',
                  }}
                >
                  <Image
                    src={css3Icon}
                    alt="css3"
                    width={100}
                    height={100}
                    className="size-16"
                  />
                </motion.div>
                <div className="col-span-full mx-auto flex w-fit flex-col items-center text-center">
                  <motion.a
                    whileHover={{
                      skewX: -15,
                      color: '#ffffff',
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    href="#skills"
                    className="peer text-center font-serif text-2xl transition-all"
                  >
                    More Skills
                  </motion.a>
                  <div className="h-px w-0 bg-white transition-all peer-hover:w-full"></div>
                </div>
              </div>
            </Box>

            {/* Contact / Socials */}
            <Box
              variant={'red'}
              className="relative order-3 !block w-full md:order-4"
            >
              <div className="flex w-full flex-col justify-start gap-4">
                <a
                  href="www.linkedin.com/in/spenwong"
                  target="_blank"
                  className="flex flex-col items-start justify-center gap-2"
                >
                  <Image src={linkedInIcon} alt="LinkedIn" />
                </a>
                <a
                  href="mailto:spenwong98@gmail.com"
                  className="flex flex-col items-start justify-center gap-2"
                >
                  <Image src={gmailIcon} alt="Gmail" />
                </a>
                <a
                  href="https://github.com/imstarbucks"
                  className="flex flex-col items-start justify-center gap-2"
                >
                  <Image src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </Box>

            {/* Projects */}
            <Link
              href={'/projects'}
              className="relative order-4 col-span-full inline-block w-full font-serif text-4xl font-bold md:order-5"
            >
              <Box
                variant={'amber'}
                ratio={'auto'}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.5,
                    type: 'spring',
                    bounce: 0.5,
                  },
                }}
              >
                My Projects
              </Box>
            </Link>
          </div>
        </section>

        <About />

        <Skills />

        <Projects />
      </main>
    </div>
  )
}
