'use client'

import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, HTMLMotionProps } from 'motion/react'

interface BoxProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  variant: VariantProps<typeof boxVariants>['variant']
  ratio?: VariantProps<typeof boxVariants>['ratio']
  radius?: VariantProps<typeof boxVariants>['radius']
}

const boxVariants = cva(
  'grid aspect-square h-full place-content-center gap-2 rounded-2xl border-8 border-amber-400 p-4',
  {
    variants: {
      variant: {
        default: 'bg-white dark:bg-gray-900',
        amber: 'bg-amber-300 border-amber-400',
        purple: 'bg-purple-300 border-purple-400',
        green: 'bg-green-300 border-green-400 text-green-900',
        red: 'bg-red-300 border-red-400',
        yellow: 'bg-yellow-300 border-yellow-400',
        blue: 'bg-blue-700 border-blue-900',
      },
      ratio: {
        sqaure: 'aspect-square',
        auto: 'aspect-auto',
      },
      radius: {
        none: '',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        variant: 'blue',
        className: 'text-white',
      },
    ],
    defaultVariants: {
      radius: '2xl',
      ratio: 'sqaure',
      variant: 'default',
    },
  }
)

const Box = ({
  variant,
  children,
  className,
  ratio,
  radius,
  ...props
}: BoxProps) => {
  return (
    <motion.div
      className={cn(className, boxVariants({ variant, ratio, radius }))}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { Box }
