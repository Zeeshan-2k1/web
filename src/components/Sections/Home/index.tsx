'use client';
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { PiSquaresFour } from 'react-icons/pi';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';
import Section from '@/components/ui/section';
import { ProfileInfo } from '../../../lib/data';

const HomeSection = () => {
  return (
    <Section
      id="home"
      className="py-12 nm:py-0 nm:h-full relative nm:mb-16 __current_section"
    >
      <div className="relative nm:absolute nm:bottom-24 translate-x-0 translate-y-0 max-w-full nm:px-20 nm:py-4">
        <div className="flex flex-col gap-8">
          <Badge className="w-max" variant={'outline'}>
            Let&apos;s meet!
          </Badge>
          <div>
            <GradientText variant={'heading1'}>
              {ProfileInfo.title.line1} <br /> {ProfileInfo.title.line2}.
            </GradientText>
          </div>
          <div className="flex flex-col nm:flex-row items-stretch nm:items-center justify-start gap-4 nm:gap-10 overflow-hidden">
            <Button
              className="border-[#2c2c2c] hidden p-6 rounded-3xl nm:inline-flex __stagger_btn"
              variant={'outline'}
            >
              <span className="text-lg group-hover:animate-slide-up capitalize">
                My Works{' '}
                <PiSquaresFour className="inline ml-1 mb-[4px]" size={24} />
              </span>
            </Button>
            <Button
              variant={'gradient'}
              className="flex w-full items-center justify-center gap-4 nm:hidden"
            >
              <span className="text-sm nm:text-lg group-hover:animate-slide-up">
                My Works{' '}
                <PiSquaresFour className="inline ml-1 mb-[4px]" size={24} />
              </span>
            </Button>
            <a
              className="group border border-border nm:border-none rounded-3xl p-2 inline-flex items-center justify-center gap-2 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 hover:text-slate-950 __stagger_btn"
              href={ProfileInfo.resumeLink}
              download={`${ProfileInfo.name}'Resume`}
            >
              <span className="font-semibold nm:text-lg text-sm group-hover:animate-slide-up">
                Download CV
                <FiDownload className="inline ml-1 mb-[4px]" size={24} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeSection;
