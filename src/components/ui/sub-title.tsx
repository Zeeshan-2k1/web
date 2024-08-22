import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const textVariants = cva('text-text', {
  variants: {
    variant: {
      heading1: 'text-xl nm:text-2xl lg:text-4xl font-semibold',
      heading2: 'text-xl nm:text-xl lg:text-2xl font-semibold',
    },
  },
  defaultVariants: {
    variant: 'heading1',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textVariants> {}

function SubTitle({ children, className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(textVariants({ variant }), className)} {...props}>
      <span>{children}</span>
    </div>
  );
}

export { SubTitle, textVariants };
