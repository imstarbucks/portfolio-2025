import Image from 'next/image'
import * as motion from 'motion/react-client'
import { ProjectType } from '@/utils/types'
import { projectsCollections } from '@/utils/const'
import { Badge } from '../ui/badge'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="container py-24">
      <h2 className="mb-12 font-serif text-8xl italic text-white">Projects</h2>
      <ul className="space-y-48">
        {projectsCollections.slice(0, 4).map((project, index) => (
          <ProjectContainer
            key={'project' + index}
            index={index}
            project={project}
          />
        ))}
      </ul>
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
    <div className="group grid gap-x-12 gap-y-12 text-white lg:grid-cols-3">
      <div className="order-2 lg:col-span-1 lg:group-even:order-1">
        <motion.div
          variants={textVariants}
          whileInView={'fadeIn'}
          viewport={{ amount: 0.6 }}
          initial={isEven ? 'initialLeft' : 'initialRight'}
        >
          <h3 className="mb-6 font-serif text-6xl font-bold italic">
            {project.projectName}
          </h3>
          <p>{project.projectDescription}</p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            {project.techStack.map((techStack, index) => (
              <Badge key={'techStack' + index} variant={'default'}>
                {techStack}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="order-1 lg:col-span-2 lg:group-even:order-2">
        <div className="aspect-video w-full">
          <Link
            href={project.projectLink || ''}
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={project.projectImage}
              alt={project.projectName}
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
