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

export const projectsCollections: ProjectType[] = [
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
