'use client';
import { FC } from 'react';
import { motion, MotionProps } from 'framer-motion';

type SectionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

const Section: FC<SectionProps> = ({ children, ...rest }) => {
  return (
    <motion.section
      initial={{ opacity: 0.25, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.1 }}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default Section;
