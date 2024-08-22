import React from 'react';
import { FiDownload } from 'react-icons/fi';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';
import Section from '@/components/ui/section';
import { ProfileInfo } from '../../../lib/data';

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <Section id="about_me" className="py-12 nm:py-0 relative __current_section">
      <div className="nm:px-20 nm:py-4">
        <div className="flex flex-col gap-8">
          <Badge className="w-max " variant={'outline'}>
            About Me
          </Badge>
          <div>
            <GradientText variant={'heading2'}>
              Turning complex problems into simple solution
            </GradientText>
          </div>
          <div className="flex justify-between gap-0 md:gap-2 lg:gap-10 flex-wrap lg:flex-nowrap">
            <div className="text-xl font-thin flex flex-col gap-1">
              <span>
                I wonder if I&apos;ve been changed in the night? Let me think.
                Was I the same when I got up this morning? I almost think I can
                remember feeling a little different. But if I&apos;m not the
                same, the next question is &apos;Who in the world am I?&apos;
                Ah, that&apos;s the great puzzle!
              </span>
              <br />
              <span>
                Be what you would seem to be - or, if you&apos;d like it put
                more simply - never imagine yourself not to be otherwise than
                what it might appear to others that what you were or might have
                been was not otherwise than what you had been would have
                appeared to them to be otherwise.
              </span>
              <div className="py-8">
                <a
                  href={ProfileInfo.resumeLink}
                  download={`${ProfileInfo.name}'Resume`}
                >
                  <Button
                    className="border-[#2c2c2c] w-full nm:w-fit p-6 rounded-3xl nm:inline-flex __stagger_btn"
                    variant={'gradient'}
                  >
                    <span className="font-semibold nm:text-lg text-sm group-hover:animate-slide-up capitalize">
                      Download CV
                      <FiDownload className="inline ml-1 mb-[4px]" size={24} />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="text-xl text-nowrap font-semibold">
                <small className="block font-thin">Name</small>
                {ProfileInfo.name}
              </h6>
              <h6 className="text-xl text-nowrap font-semibold">
                <small className="block font-thin">Phone</small>
                {ProfileInfo.phone}
              </h6>
              <h6 className="text-xl text-nowrap font-semibold">
                <small className="block font-thin">Email</small>
                {ProfileInfo.email}
              </h6>
              <h6 className="text-xl text-nowrap font-semibold">
                <small className="block font-thin">Location</small>
                {ProfileInfo.city.full}, {ProfileInfo.country.full}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
