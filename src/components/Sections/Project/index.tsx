import clsx from 'clsx';
import { FiGithub, FiLink } from 'react-icons/fi';
import { JavascriptOriginal, TypescriptOriginal } from 'devicons-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GradientText } from '@/components/ui/gradient-text';
import Section from '@/components/ui/section';

import styles from './styles.module.css';

type Props = {};

const Project = (props: Props) => {
  return (
    <Section id="projects" className="py-12 nm:py-8 relative __current_section">
      <div className="nm:px-20 nm:py-4">
        <div className="flex flex-col gap-8">
          <Badge className="w-max " variant={'outline'}>
            Projects
          </Badge>
          <div>
            <GradientText variant={'heading2'}>
              Check out my featured projects
            </GradientText>
          </div>
          <div className={clsx(styles.__grid)}>
            <Card className="bg-transparent">
              <CardHeader>
                <CardTitle>Project</CardTitle>
                <CardDescription>2019-2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-bright">Description:</p>
                <p className="text-base text-medium text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  enim nesciunt accusantium quidem accusamus, dolorum
                  dignissimos consequatur praesentium molestias beatae veniam
                  aut cupiditate voluptas corporis nulla, sit, unde quo
                  excepturi.
                </p>
                <h5 className="text-lg text-bright mt-2">
                  Programming Languages:
                </h5>
                <div className="flex flex-row items-center gap-4 py-1">
                  <JavascriptOriginal size={30} />
                  <TypescriptOriginal size={30} />
                </div>
              </CardContent>
              <CardFooter className="flex flex-nowrap gap-2">
                <Button
                  className="border-[#2c2c2c] overflow-hidden p-3 rounded-3xl nm:inline-flex __stagger_btn"
                  variant={'outline'}
                >
                  <span className="text-sm group-hover:animate-slide-up capitalize">
                    Github{' '}
                    <FiGithub className="inline ml-1 mb-[4px]" size={18} />
                  </span>
                </Button>
                <Button
                  className="border-[#2c2c2c] overflow-hidden p-3 rounded-3xl nm:inline-flex __stagger_btn"
                  variant={'outline'}
                >
                  <span className="text-sm group-hover:animate-slide-up capitalize">
                    Link <FiLink className="inline ml-1 mb-[4px]" size={18} />
                  </span>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardTitle>Project</CardTitle>
            </Card>
            <Card>
              <CardTitle>Project</CardTitle>
            </Card>
            <Card>
              <CardTitle>Project</CardTitle>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Project;
