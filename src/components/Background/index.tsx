'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './bg.module.css';

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const Background = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = (element: any) => {
      controls.start({
        x: [null, random(-400, 400)],
        y: [null, random(-200, 200)],
        rotate: [null, random(-30, 150)],
        transition: {
          x: { yoyo: Infinity, duration: random(20, 40), ease: 'easeInOut' },
          y: { yoyo: Infinity, duration: random(20, 40), ease: 'easeInOut' },
          rotate: {
            yoyo: Infinity,
            duration: random(5, 12),
            ease: 'easeInOut',
          },
        },
      });
    };

    const elements = document.querySelectorAll('.__gradient_box');
    elements.forEach((element) => animate(element));
  }, [controls]);

  return (
    <div className="fixed -z-50 top-0 left-0 w-full h-screen overflow-hidden">
      <motion.div
        className={`${styles.blur} __gradient_box`}
        animate={controls}
      ></motion.div>
      <motion.div
        className={`${styles.blur} __gradient_box`}
        animate={controls}
      ></motion.div>
      <motion.div
        className={`${styles.blur} __gradient_box`}
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default Background;
