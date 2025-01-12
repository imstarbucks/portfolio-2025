import { cn } from '@/utils'
import * as motion from 'motion/react-client'

const skillsCollection = [
  {
    title: 'Frontend Development',
    skill: [
      'React',
      'Nextjs',
      'Typescript',
      'Javascript',
      'TailwindCSS',
      'CSS',
      'SASS/SCSS',
      'HTML',
      'Bootstrap 4/5',
    ],
  },
  {
    title: 'Tools & Frameworks',
    skill: ['StorybookJS', 'GitLab CI/CD', 'Docker', 'Vite', 'Webpack', 'Gulp'],
  },
  {
    title: 'Design & Collaboration',
    skill: [
      'Figma',
      'Adobe XD',
      'UI/UX Design',
      'Design Systems',
      'Responsive Design',
    ],
  },
  {
    title: 'API Integration & Backend',
    skill: ['API Integration', 'Strapi', 'WordPress CMS', 'AWS', 'NextAuth'],
  },
  {
    title: 'SEO & Performance Optimization',
    skill: ['SEO', 'Code Refactoring', 'Clean Code'],
  },
]

const Skills = () => {
  return (
    <section id="#skills" className="2x;:px-0 container px-6 py-12 md:py-24">
      <h2 className="mb-12 font-serif text-4xl italic text-white md:text-5xl xl:text-8xl">
        Skills
      </h2>
      {skillsCollection.map((skill, index) => (
        <Skill
          key={index}
          title={skill.title}
          skills={skill.skill}
          index={index}
        />
      ))}
    </section>
  )
}

const Skill = ({
  title,
  skills,
  index,
}: {
  title: string
  skills: string[]
  index: number
}) => {
  const parentVariants = {
    onhover: {},
  }

  const childVariants = {
    initial: {
      height: 0,
    },
    onhover: {
      height: '100%',
      transition: {
        duration: 0.2,
      },
    },
  }
  const borderVariants = {
    initial: {
      skewX: 0,
    },
    onhover: {
      skewX: -12,
      transition: {
        duration: 0.2,
      },
    },
  }

  const textVariants = {
    initial: {
      color: '#ffffff',
      x: 0,
    },
    onhover: {
      color: '#14532d',
      x: 10,
      transition: {
        duration: 0.1,
      },
    },
  }

  return (
    <div>
      <motion.div
        variants={parentVariants}
        initial={'initial'}
        whileHover={'onhover'}
        className="relative flex flex-col gap-5 py-6 md:py-10"
      >
        <motion.h4
          variants={textVariants}
          className="relative z-10 font-serif text-2xl italic text-white md:text-4xl lg:text-5xl xl:text-6xl"
        >
          {title}
        </motion.h4>
        <motion.div
          variants={textVariants}
          className="relative z-10 flex flex-wrap gap-x-6 gap-y-2 text-lg text-white lg:text-3xl"
        >
          {skills.map((skill, index) => (
            <span key={'skill' + index} className="relative z-10">
              {skill}
            </span>
          ))}
        </motion.div>
        <motion.div
          variants={childVariants}
          className="absolute bottom-0 z-0 w-full -skew-x-12 bg-green-300"
        ></motion.div>
        <motion.div
          variants={borderVariants}
          className={cn(
            'absolute left-0 top-0 h-full w-full border-white',
            index > 0 ? 'border-b' : 'border-y'
          )}
        ></motion.div>
      </motion.div>
    </div>
  )
}

export default Skills
