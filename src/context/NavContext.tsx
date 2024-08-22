'use client';
import { createContext, useContext, useState } from 'react';

type InitialScrollContxtValue = {
  lastScroll: number;
  handleScroll: (id: string) => void;
};

const initalValue: InitialScrollContxtValue = {
  lastScroll: 0,
  handleScroll: () => {},
};

const NavScrollContext = createContext(initalValue);

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const headerOffset = 150;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset + lastScroll;
    const scrollSection = document.querySelector('#__scroll_section');

    setLastScroll(offsetPosition);
    scrollSection?.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <NavScrollContext.Provider value={{ lastScroll, handleScroll }}>
      {children}
    </NavScrollContext.Provider>
  );
};

export const useNavScroll = () => {
  return useContext(NavScrollContext);
};
