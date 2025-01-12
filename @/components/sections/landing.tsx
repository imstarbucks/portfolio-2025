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
import linkedInIcon from '@/public/social-icons/linkedin.svg'
import githubIcon from '@/public/social-icons/github.svg'
import gmailIcon from '@/public/social-icons/google.svg'
import LandingContainer from './landing-container'

const Landing = () => {
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
    <LandingContainer>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-4">
        {/* Intro */}
        <Box
          variant={'blue'}
          className="order-1 col-span-full row-span-2 w-full md:col-span-2 lg:col-span-2"
          variants={introContainer}
          whileInView={'show'}
          initial={'hidden'}
        >
          <motion.h1
            variants={introContainerH1}
            className="font-serif text-6xl font-bold md:text-8xl xl:text-9xl"
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
          }}
          variant={'purple'}
          className="relative order-2 col-span-2 row-span-1 w-full md:col-span-1"
          radius={'none'}
        >
          <svg viewBox="0 0 250 250" className="w-full animate-spin-slow">
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
          className="relative order-5 col-span-full !aspect-auto w-full md:col-span-2 lg:order-4 lg:col-span-1 lg:row-span-2 lg:!aspect-square"
        >
          <h2 className="mb-4 hidden text-center font-serif text-3xl font-bold md:block">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-2">
            <motion.div
              className="h-fit w-fit rounded-2xl bg-white p-4"
              whileInView={{
                rotate: -10,
                transition: {
                  duration: 0.5,
                  type: 'spring',
                  bounce: 0.5,
                  delay: 0.5,
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
              whileInView={{
                rotate: 10,
                transition: {
                  duration: 0.5,
                  type: 'spring',
                  bounce: 0.5,
                  delay: 1.5,
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
              whileInView={{
                rotate: 10,
                transition: {
                  duration: 0.5,
                  type: 'spring',
                  bounce: 0.5,
                  delay: 2,
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
              whileInView={{
                rotate: -10,
                transition: {
                  duration: 0.5,
                  type: 'spring',
                  bounce: 0.5,
                  delay: 2.5,
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
              whileInView={{
                rotate: -10,
                transition: {
                  duration: 0.5,
                  type: 'spring',
                  bounce: 0.5,
                  delay: 3,
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
              whileInView={{
                rotate: 10,
                transition: {
                  duration: 0.5,
                  type: 'spring',
                  bounce: 0.5,
                  delay: 3.5,
                },
                transformOrigin: 'bottom left',
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
          className="relative order-3 !block w-full md:order-3 lg:order-4"
        >
          <div className="flex w-full flex-col justify-start gap-4">
            <h2 className="hidden font-serif text-4xl text-red-800 md:block">
              Socials
            </h2>
            <a
              href="https://www.linkedin.com/in/spenwong"
              target="_blank"
              className="flex items-center justify-center gap-2 md:justify-start"
            >
              <Image src={linkedInIcon} alt="LinkedIn" className="size-8" />
              <span className="hidden font-serif font-semibold md:inline-block xl:text-2xl">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/imstarbucks"
              target="_blank"
              className="flex items-center justify-center gap-2 md:justify-start"
            >
              <Image src={githubIcon} alt="GitHub" className="size-8" />
              <span className="hidden font-serif font-semibold md:inline-block xl:text-2xl">
                GitHub
              </span>
            </a>
            <a
              href="mailto:spenwong98@gmail.com"
              target="_blank"
              className="flex items-center justify-center gap-2 md:justify-start"
            >
              <Image src={gmailIcon} alt="Gmail" className="size-8" />
              <span className="hidden font-serif font-semibold md:inline-block xl:text-2xl">
                Gmail
              </span>
            </a>
          </div>
        </Box>

        {/* Projects */}
        <Link
          href={'/projects'}
          className="relative order-4 col-span-full inline-block w-full font-serif text-4xl font-bold md:col-span-1 lg:order-5 lg:col-span-full"
        >
          <Box
            className="text-center"
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
    </LandingContainer>
  )
}

export default Landing
