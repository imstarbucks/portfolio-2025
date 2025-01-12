'use client'

import Image from 'next/image'
import { ProjectType } from '@/utils/types'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/@/components/ui/drawer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/@/components/ui/carousel'
import { X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'

interface ProjectDrawerProps {
  project: ProjectType
}

const ProjectDrawer = ({ project }: ProjectDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="mt-8 block font-serif hover:underline md:text-xl">
        View Details
      </DrawerTrigger>
      <DrawerContent data-vaul-no-drag="true" className="bg-slate-200">
        <div className="overflow-y-auto py-12">
          <Button
            variant={'outline'}
            className="absolute right-4 top-8 z-10 size-16 rounded-full text-2xl md:right-12"
            onClick={() => setIsOpen(false)}
          >
            <X className="size-12" />
          </Button>
          <DrawerHeader className="mx-auto w-full space-y-12 px-6 md:w-4/5 md:px-12">
            <DrawerTitle className="text-center text-4xl md:text-5xl lg:text-7xl">
              {project.projectName}
            </DrawerTitle>
            <div className="mx-auto w-full rounded-xl bg-slate-700 p-4 md:p-10">
              <Image
                src={project.projectImage}
                alt={project.projectName}
                className="block w-full rounded-xl"
              />
            </div>
            <DrawerDescription className="mt-4 text-start text-xl leading-snug md:text-3xl">
              {project.projectDescription}
            </DrawerDescription>
          </DrawerHeader>
          <h3 className="mx-auto mb-6 mt-12 w-full px-4 font-serif text-2xl font-bold italic md:mt-24 md:w-4/5 md:text-4xl lg:text-6xl">
            Project Highlights
          </h3>
          <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-8 px-4 md:mt-12 md:w-4/5 md:grid-cols-2 lg:grid-cols-3">
            {project.projectDetails?.map((projectDetail, index) => (
              <div
                className="group relative rounded-lg bg-amber-300/75 p-4"
                key={'projectDetail' + index}
              >
                {projectDetail.images.length > 1 ? (
                  <Carousel>
                    <CarouselContent>
                      {projectDetail.images.map((image, index) => (
                        <CarouselItem
                          key={'image' + projectDetail.title + index}
                        >
                          <div className="aspect-video w-full">
                            <Image
                              key={'image' + index}
                              src={image}
                              alt={projectDetail.title}
                              width={1080}
                              height={720}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="mt-4 flex items-center justify-end gap-2">
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </Carousel>
                ) : (
                  <div className="aspect-video w-full">
                    <Image
                      key={'image' + index}
                      src={projectDetail.images[0]}
                      alt={projectDetail.title}
                      width={1080}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <h4 className="mt-4 text-xl font-bold md:mt-6 md:text-2xl">
                  {projectDetail.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default ProjectDrawer
