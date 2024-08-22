import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const textVariants = cva(
  'text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary',
  {
    variants: {
      variant: {
        heading1: 'text-2xl nm:text-5xl lg:text-7xl font-semibold',
        heading2: 'text-2xl nm:text-4xl lg:text-6xl font-semibold',
      },
    },
    defaultVariants: {
      variant: 'heading2',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textVariants> {}

function GradientText({ children, className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(textVariants({ variant }), className)} {...props}>
      <span>{children}</span>
    </div>
  );
}

export { GradientText, textVariants };
