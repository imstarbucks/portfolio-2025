import { StaticImageData } from 'next/image'

export type ProjectType = {
  projectName: string
  projectLink?: string
  projectDescription: string
  projectImage: StaticImageData
  techStack: TechStackType[]
  projectDetails?: ProjectDetailsType[]
}

export type ProjectDetailsType = {
  title: string
  images: StaticImageData[]
}

export type TechStackType =
  | 'React'
  | 'Next.js'
  | 'TailwindCSS'
  | 'Typescript'
  | 'Javascript'
  | 'HTML'
  | 'CSS'
  | 'SASS/SCSS'
  | 'Bootstrap 4/5'
  | 'GSAP'
  | 'AOS'
  | 'Jekyll'
  | 'GitLab CI/CD'
  | 'Docker'
  | 'Vite'
  | 'Webpack'
  | 'Gulp'
  | 'StorybookJS'
  | 'AWS'
  | 'WordPress CMS'
  | 'PHP'
  | 'next-intl'
  | 'Zustand'
  | 'NextAuth'
  | 'Jquery'
