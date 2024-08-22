'use client';
import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import { TbMessageDots } from 'react-icons/tb';

import { DarkModeBtn } from '@/components/Button/DarkModeBtn';
import { Button } from '@/components/ui/button';

import { useNavScroll } from '@/context/NavContext';

import { NAV_LINKS } from '@/lib/constant';

type Props = {};

const Navbar = (props: Props) => {
  const [active, setActive] = useState(0);
  const { handleScroll: handleNavScroll } = useNavScroll();

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('.__current_section');
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 500 && rect.bottom >= 500) {
        setActive(index);
      }
    });
  }, []);

  useEffect(() => {
    const scrollSection = document.querySelector('#__scroll_section');
    scrollSection?.addEventListener('scroll', handleScroll);
    return () => scrollSection?.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header className="z-50 hidden nm:block">
        <nav className="sticky top-0 left-0 w-full flex flex-nowrap justify-between items-center gap-4">
          <ul className="flex gap-4 items-center w-full mx-8 lg:mx-4 xl:px-4 xl:mx-8 transition-all duration-500">
            {NAV_LINKS.map((link, index) => {
              return (
                <a onClick={() => handleNavScroll(link.link)} key={link.label}>
                  <li className="__nav_link">
                    <div
                      className={clsx(
                        'block px-4 py-2 border border-transparent rounded-lg backdrop-blur dark:text-slate-200 text-slate-500 hover:text-slate-900 dark:hover:text-white drop-shadow-lg transition-all',
                        active === index &&
                          'border !border-slate-400 !text-slate-900 dark:!text-white'
                      )}
                    >
                      <span className="hidden font-semibold lg:block text-nowrap">
                        {link.label}
                      </span>
                      <span className="block lg:hidden">{<link.icon />}</span>
                      <span className="sr-only">{link.label}</span>
                    </div>
                  </li>
                </a>
              );
            })}
          </ul>
          <div className="flex flex-nowrap justify-between items-center gap-8">
            <DarkModeBtn />
            <Button variant={'gradient'}>
              <div className="group-hover:animate-slide-up flex flex-nowrap items-center gap-2">
                <span>Let&apos;s talk</span> <TbMessageDots />
              </div>
            </Button>
          </div>
        </nav>
      </header>
      <footer className="block nm:hidden fixed bottom-6 left-1/2 -translate-x-2/4">
        <nav className="flex flex-nowrap backdrop-blur-[10px] rounded-xl overflow-hidden">
          <ul className="flex gap-4 items-center w-full transition-all duration-500">
            {NAV_LINKS.map((link, index) => {
              return (
                <li
                  onClick={() => handleNavScroll(link.link)}
                  className="__nav_link"
                  key={link.label}
                >
                  <a
                    className={clsx(
                      'block px-2 py-2 backdrop-blur dark:text-slate-200 text-slate-500 hover:text-slate-900 dark:hover:text-white drop-shadow-lg rounded-full',
                      active === index && 'bg-[#111111] text-base-tint'
                    )}
                    href={link.link}
                  >
                    <span className="hidden lg:block text-nowrap">
                      {link.label}
                    </span>
                    <span className="block lg:hidden">
                      {<link.icon size={18} />}
                    </span>
                    <span className="sr-only">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-nowrap justify-between items-center">
            <div className="aspect-square">
              <DarkModeBtn />
            </div>
            <Button variant={'gradient'} className="!p-2">
              <div className="rounded-full">
                <TbMessageDots size={18} />
              </div>
            </Button>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Navbar;
