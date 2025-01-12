import Image from 'next/image'
import { projectsCollections } from '@/utils/const'
import Link from 'next/link'
import ProjectDrawer from '@/@/components/sections/project-drawer'
import { ArrowLeftCircle } from 'lucide-react'
import Title from '@/@/components/projects/title'

const ProjectsPage = () => {
  return (
    <main className="p-4">
      <Title />
      <Link
        href="/"
        className="group my-6 flex items-center gap-2 text-2xl font-bold text-white lg:my-12"
      >
        <ArrowLeftCircle className="size-8 transition-all group-hover:mr-4" />
        Back
      </Link>
      <div className="space-y-16 xl:space-y-6">
        {projectsCollections.map((project) => (
          <div className="grid gap-4 xl:grid-cols-5" key={project.projectName}>
            <Image
              className="col-span-full xl:col-span-4"
              src={project.projectImage}
              alt={project.projectName}
            />
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-amber-300">
                {project.projectName}
              </h2>
              <p className="text-sm text-white">{project.projectDescription}</p>
              <div className="flex flex-wrap gap-4">
                {project.techStack.map((tech) => (
                  <span
                    className="rounded-sm bg-white px-2 py-1 text-xs"
                    key={project.projectName + tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.projectLink ? (
                <Link
                  className="block text-base text-white hover:underline"
                  href={project.projectLink}
                >
                  Visit Website
                </Link>
              ) : (
                <ProjectDrawer
                  project={project}
                  className="!text-base text-white"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ProjectsPage
