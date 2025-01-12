import { ProjectType } from './types'
import avantro from '@/public/projects/avantro-thumb.jpg'
import ayanna from '@/public/projects/ayanna-thumb.jpg'
import avenue from '@/public/projects/avenue-thumb.jpg'
import amika from '@/public/projects/amika.jpg'
import ub from '@/public/projects/urban-green-thumb.jpg'
import kh from '@/public/projects/kusto-home-thumb.jpg'
import ffCny from '@/public/projects/ff-cny-2022-thumb.jpg'
import plenitude from '@/public/projects/plenitude-thumb.jpg'
import sunway from '@/public/projects/sunway-money-thumb.jpg'
import reflection from '@/public/projects/the-reflection-thumb.jpg'
import pavilion from '@/public/projects/pmk-isp-thumb.jpg'
import * as oceanBuddy from './ocean-buddy-img'
import * as mednefits from './mednefits-img'
import * as mednefitsUI from './mednefitsUI'

export const projectsCollections: ProjectType[] = [
  {
    projectName: 'Mednefits',
    projectDescription:
      'Mednefits is a Next.js 14 web application for managing employee benefits, offering portals for users, administrators, and providers. It utilizes Zustand for state management, TanStack Table for advanced tables, and NextAuth for JWT-based authentication. Key features include complex multi-step forms built with React Hook Form, ShadCN UI, and a custom UI library, along with extensive REST API integrations.',
    projectImage: mednefits.thumbnail,
    techStack: [
      'Next.js',
      'React',
      'Javascript',
      'TailwindCSS',
      'Typescript',
      'Zustand',
      'AWS',
      'Docker',
      'GitLab CI/CD',
      'NextAuth',
    ],
    projectDetails: [
      {
        title: 'User Login',
        images: [
          mednefits.userLogin1,
          mednefits.userLogin2,
          mednefits.userLogin3,
          mednefits.userLogin4,
        ],
      },
      {
        title: 'User Dashboard',
        images: [mednefits.userDashboard],
      },
      {
        title: 'Admin Dashboard',
        images: [mednefits.adminDashboard],
      },
      {
        title: 'Multi-step forms',
        images: [
          mednefits.multiStepForm1,
          mednefits.multiStepForm2,
          mednefits.multiStepForm3,
          mednefits.multiStepForm4,
          mednefits.multiStepForm5,
        ],
      },
      {
        title: 'Dynamic Data Table',
        images: [mednefits.dataTable, mednefits.dataTableFilter],
      },
    ],
  },
  {
    projectName: 'Mednefits/UI',
    projectDescription:
      'Mednefits/UI is a proprietary library for reusable components across Mednefits portals, built with StorybookJS for UI testing, GitLab CI/CD for semantic versioning, and Slack integration for notifications.',
    projectImage: mednefitsUI.thumbnail,
    techStack: [
      'StorybookJS',
      'React',
      'Typescript',
      'Javascript',
      'TailwindCSS',
      'AWS',
      'GitLab CI/CD',
      'HTML',
      'CSS',
      'Vite',
    ],
    projectDetails: [
      {
        title: 'Introduction',
        images: [mednefitsUI.intro],
      },
      {
        title: 'Colors Design System',
        images: [mednefitsUI.colors],
      },
      {
        title: 'Typography Design System',
        images: [mednefitsUI.typography],
      },
      {
        title: 'Border Radius Design System',
        images: [mednefitsUI.borderRadius],
      },
      {
        title: 'Button Component',
        images: [mednefitsUI.button],
      },
      {
        title: 'Text Component',
        images: [mednefitsUI.text],
      },
    ],
  },
  {
    projectName: 'OceanBuddy',
    projectDescription:
      'OceanBuddy is a platform designed to connect divers and planners, enabling them to post and book diving trip plans seamlessly. The project leverages modern frontend technologies, including Next.js, React Hook Form, React Query, TailwindCSS, and Zustand, to deliver a responsive and user-friendly experience. It also incorporates REST API integrations to dynamically fetch and render data efficiently.',
    projectImage: oceanBuddy.thumbnail,
    techStack: [
      'Next.js',
      'React',
      'Javascript',
      'TailwindCSS',
      'Typescript',
      'NextAuth',
      'Zustand',
      'CSS',
      'HTML',
    ],
    projectDetails: [
      {
        title: 'Landing Page',
        images: [oceanBuddy.landingPage],
      },
      {
        title: 'Listing Page',
        images: [oceanBuddy.listingPage],
      },
      {
        title: 'Trip Details Page',
        images: [oceanBuddy.detailsPage],
      },
      {
        title: 'Checkout Page',
        images: [oceanBuddy.booking1, oceanBuddy.booking2, oceanBuddy.booking3],
      },
      {
        title: 'User Profile Page',
        images: [oceanBuddy.profilePage],
      },
    ],
  },

  {
    projectName: 'Amika',
    projectLink: 'https://amikaresidences.my/',
    projectDescription:
      'Created a clean and sleek Japanese-styled website with seamless animations across multiple pages, enhancing the aesthetic and user experience.',
    projectImage: amika,
    techStack: [
      'WordPress CMS',
      'Javascript',
      'HTML',
      'React',
      'TailwindCSS',
      'GSAP',
      'Docker',
      'Webpack',
      'Gulp',
      'PHP',
    ],
  },
  {
    projectName: 'Pavilion ISP',
    projectLink: 'https://pavilionmontkiara.com/PMKISP/en/',
    projectDescription:
      'Developed a fully functional web application for the Pavilion Sales team, ensuring seamless navigation and a responsive design across all devices for efficient use of the sales portal.',
    projectImage: pavilion,
    techStack: [
      'Next.js',
      'React',
      'Javascript',
      'TailwindCSS',
      'Typescript',
      'SASS/SCSS',
      'Zustand',
      'next-intl',
    ],
  },
  {
    projectName: 'The Reflection Westlake',
    projectLink: 'https://thereflectionwestlake.vn/',
    projectDescription:
      'Developed a heavily animated, multi-language website that is fully mobile responsive, delivering a seamless user experience across devices without compromising too much of the animation performance.',
    projectImage: reflection,
    techStack: [
      'Javascript',
      'PHP',
      'SASS/SCSS',
      'Bootstrap 4/5',
      'WordPress CMS',
      'GSAP',
      'AOS',
      'Docker',
      'Webpack',
      'Gulp',
    ],
  },
  {
    projectName: 'Ayanna',
    projectLink: 'https://ayanna.com.my/',
    projectDescription:
      'Developed a multi-page advertising website showcasing advanced GSAP animations and implementing complex logic to enable flexible, easily editable content through a custom WordPress CMS.',
    projectImage: ayanna,
    techStack: [
      'Javascript',
      'PHP',
      'React',
      'Bootstrap 4/5',
      'WordPress CMS',
      'GSAP',
      'AOS',
      'Docker',
      'Webpack',
      'Gulp',
    ],
  },
  {
    projectName: 'Avantro',
    projectLink: 'https://avantro.com.my/',
    projectDescription:
      'Developed a multi-page advertising website showcasing advanced GSAP animations and implementing complex logic to enable flexible, easily editable content through a custom WordPress CMS.',
    projectImage: avantro,
    techStack: [
      'React',
      'Javascript',
      'PHP',
      'HTML',
      'Bootstrap 4/5',
      'WordPress CMS',
      'GSAP',
      'AOS',
      'Docker',
      'Webpack',
      'Gulp',
    ],
  },
  {
    projectName: 'Langkawi Avenue',
    projectLink: 'https://avenue.langkawicity.com.my/',
    projectDescription:
      'Developed a simple yet impactful landing page, highlighting a seamless user experience and dynamic responsiveness across all viewports.',
    projectImage: avenue,
    techStack: [
      'Javascript',
      'PHP',
      'TailwindCSS',
      'WordPress CMS',
      'GSAP',
      'Docker',
      'Webpack',
      'Gulp',
    ],
  },
  {
    projectName: 'Kusto Home',
    projectLink: 'https://kustohome.com.vn/',
    projectDescription:
      'Developed a multi-language website with a complex WordPress CMS, featuring animations and a multi-page structure to deliver an engaging and dynamic user experience.',
    projectImage: kh,
    techStack: [
      'Javascript',
      'PHP',
      'HTML',
      'Bootstrap 4/5',
      'WordPress CMS',
      'AOS',
      'Docker',
      'Webpack',
      'Gulp',
    ],
  },
  {
    projectName: 'Urban Green',
    projectLink: 'https://urbangreen.vn/',
    projectDescription:
      'Developed a multi-language website with a complex WordPress CMS, featuring animations and a multi-page structure to deliver an engaging and dynamic user experience.',
    projectImage: ub,
    techStack: [
      'Javascript',
      'PHP',
      'HTML',
      'Bootstrap 4/5',
      'WordPress CMS',
      'AOS',
      'Docker',
      'Webpack',
      'Gulp',
    ],
  },
  {
    projectName: 'Plenitude HomeSweetHome',
    projectLink: 'https://plenitude.preview.forefront.international/',
    projectDescription:
      'Developed an advertising campaign website emphasizing simplicity and seamless integration with third-party SMTP services for efficient email notifications.',
    projectImage: plenitude,
    techStack: [
      'PHP',
      'HTML',
      'Bootstrap 4/5',
      'SASS/SCSS',
      'AOS',
      'Webpack',
      'Gulp',
    ],
  },
  {
    projectName: 'Forefront International CNY 2022',
    projectLink: 'https://forefront-cny2022.preview.forefront.international/',
    projectDescription:
      'Developed a Chinese New Year promotional website for Forefront International, showcasing engaging animations powered by GSAP to enhance the user experience and highlight the festive theme.',
    projectImage: ffCny,
    techStack: ['Javascript', 'SASS/SCSS', 'GSAP', 'AOS', 'Jekyll'],
  },
  {
    projectName: 'Sunway Money',
    projectLink: 'https://sunwaymoney.com/',
    projectDescription:
      'Developed the frontend for a multi-page money transfer web application, incorporating user authentication with login and sign-up functionality, form validations, and a user-friendly dashboard for seamless navigation and data presentation.',
    projectImage: sunway,
    techStack: [
      'Javascript',
      'SASS/SCSS',
      'AOS',
      'Jekyll',
      'Jquery',
      'Bootstrap 4/5',
    ],
  },
]
