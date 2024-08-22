import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { GradientText } from '@/components/ui/gradient-text';
import Icon from '@/components/ui/icon';
import Section from '@/components/ui/section';
import { SubTitle } from '@/components/ui/sub-title';

import { IconNames, dataItem } from '@/lib/constant';
import { ProfileInfo } from '@/lib/data';

import Items from './components/Items';

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Section
      id="portfolio"
      className="py-12 nm:py-0 relative __current_section"
    >
      <div className="nm:px-20 nm:py-4">
        <div className="flex flex-col gap-8">
          <Badge className="w-max " variant={'outline'}>
            Portfolio
          </Badge>
          <div>
            <GradientText variant={'heading2'}>
              Education and Work Experience
            </GradientText>
          </div>
          <div>
            <p className="text-xl text-justify font-thin flex flex-col gap-1">
              Be what you would seem to be - or, if you&apos;d like it put more
              simply - never imagine yourself not to be otherwise than what it
              might appear to others that what you were or might have been was
              not otherwise than what you had been would have appeared to them
              to be otherwise.
            </p>
          </div>
          <div className="py-16 flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0.25, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <SubTitle variant={'heading1'}>Work experience</SubTitle>
              <Items data={ProfileInfo.workExperience as dataItem[]} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.25, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <SubTitle variant={'heading1'}>My education</SubTitle>
              <Items data={ProfileInfo.education as dataItem[]} />
            </motion.div>
            <div>
              <SubTitle variant={'heading1'}>My skill sets</SubTitle>
              <div className="mt-10 flex flex-col gap-12">
                <div>
                  <div className="py-4">
                    <SubTitle variant={'heading2'}>
                      Programming language
                    </SubTitle>
                    <p className="text-medium font-extralight">
                      (Decreasing order of experience and proficiency)
                    </p>
                  </div>
                  <div className="flex flex-wrap flex-row items-center gap-6">
                    {ProfileInfo.language.map((name) => {
                      return (
                        <Icon
                          name={name as keyof typeof IconNames}
                          key={name}
                          size={56}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div className="py-4">
                    <SubTitle variant={'heading2'}>Libraries</SubTitle>
                  </div>
                  <div className="flex flex-wrap flex-row items-center gap-6">
                    {ProfileInfo.library.map((name) => {
                      return (
                        <Icon
                          name={name as keyof typeof IconNames}
                          size={56}
                          key={name}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div className="py-4">
                    <SubTitle variant={'heading2'}>Databases</SubTitle>
                  </div>
                  <div className="flex flex-wrap flex-row items-center gap-6">
                    {ProfileInfo.db.map((name) => {
                      return (
                        <Icon
                          key={name}
                          name={name as keyof typeof IconNames}
                          size={56}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div className="py-4">
                    <SubTitle variant={'heading2'}>Tools</SubTitle>
                  </div>
                  <div className="flex flex-wrap flex-row items-center gap-6">
                    {ProfileInfo.tools.map((name) => {
                      return (
                        <Icon
                          key={name}
                          name={name as keyof typeof IconNames}
                          size={56}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
