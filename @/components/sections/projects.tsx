'use client'

import Image from 'next/image'
import * as motion from 'motion/react-client'
import { ProjectType } from '@/utils/types'
import { projectsCollections } from '@/utils/const'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import ProjectDrawer from './project-drawer'
import { Download, ArrowRightCircle } from 'lucide-react'

const Projects = () => {
  return (
    <section className="container px-6 py-12 md:py-24 2xl:px-0">
      <h2 className="mb-12 font-serif text-4xl italic text-white md:text-6xl xl:text-8xl">
        Projects
      </h2>
      <ul className="space-y-20 md:space-y-24 lg:space-y-48">
        {projectsCollections.slice(0, 4).map((project, index) => (
          <ProjectContainer
            key={'project' + index}
            index={index}
            project={project}
          />
        ))}
      </ul>
      <div className="mt-12 flex justify-center">
        <Link
          href={'/projects'}
          className="group relative flex w-fit items-center justify-center gap-2 text-2xl text-white"
        >
          View More Projects{' '}
          <ArrowRightCircle className="size-6 transition-transform group-hover:translate-x-4" />
          <div className="absolute bottom-0 top-auto h-2 w-full translate-y-2 bg-amber-300"></div>
        </Link>
      </div>
    </section>
  )
}

interface ProjectContainerProps {
  project: ProjectType
  index: number
}

const ProjectContainer = ({ project, index }: ProjectContainerProps) => {
  const isEven = index % 2 === 0

  const textVariants = {
    initialLeft: {
      x: 20,
      opacity: 0,
    },
    initialRight: {
      x: -20,
      opacity: 0,
    },
    fadeIn: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
      },
    },
  }

  return (
    <div className="group grid gap-x-12 gap-y-12 text-white lg:grid-cols-2 xl:grid-cols-3">
      <div className="order-2 col-span-1 lg:group-even:order-1">
        <motion.div
          variants={textVariants}
          whileInView={'fadeIn'}
          viewport={{ amount: 0.6 }}
          initial={isEven ? 'initialLeft' : 'initialRight'}
        >
          <h3 className="mb-6 font-serif text-2xl italic md:text-4xl xl:text-6xl">
            {project.projectName}
          </h3>
          <p>{project.projectDescription}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-12">
            {project.techStack.map((techStack, index) => (
              <Badge
                key={'techStack' + index}
                variant={'default'}
                className="text-sm md:text-base xl:text-lg"
              >
                {techStack}
              </Badge>
            ))}
          </div>
          {project.projectLink ? (
            <Link
              href={project.projectLink}
              passHref
              target="_blank"
              rel="noreferrer"
              className="mt-8 block font-serif hover:underline md:text-xl"
            >
              Visit Website
            </Link>
          ) : (
            <ProjectDrawer project={project} />
          )}
        </motion.div>
      </div>
      <div className="order-1 lg:group-even:order-2 xl:col-span-2">
        <div className="aspect-video w-full">
          <Image
            src={project.projectImage}
            alt={project.projectName}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
