'use client';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import HomeSection from '@/components/Sections/Home';
import AboutSection from '@/components/Sections/About';
import Portfolio from '@/components/Sections/Portfolio';
import Project from '@/components/Sections/Project';
import Contact from '@/components/Sections/Contact';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <AnimatePresence>
      <Background />
      <div className="relative flex justify-between bg-transparent nm:h-screen px-4 py-6 nm:px-10 nm:py-12 pb-0 xl:px-28 gap-8">
        <div className="w-full nm:flex">
          <Profile />
          <div className="w-full relative">
            <div className="relative z-50">
              <Navbar />
            </div>
            <div
              id="__scroll_section"
              className="relative nm:fixed w-[-webkit-fill-available] top-0 h-full overflow-hidden nm:overflow-y-scroll"
            >
              <HomeSection />
              <AboutSection />
              <Portfolio />
              <Project />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
