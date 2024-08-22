import React from 'react';
import Image from 'next/image';
import CatSvg from '@/assets/svg/CatSvg';
import ProfileImage from '@/assets/images/Profile.webp';
import { NAV_LINK_TYPE, SOCIAL_LINKS } from '@/lib/constant';

import { Button } from '@/components/ui/button';

import { useNavScroll } from '@/context/NavContext';
import { ProfileInfo } from '@/lib/data';

type Props = {};

const Profile = (props: Props) => {
  const { handleScroll } = useNavScroll();
  return (
    <div className="flex flex-col items-center">
      <div className="border border-border bg-base-tint w-full nm:w-80 lg:w-[360px] xl:w-[400px] h-full rounded-[2.75rem] overflow-hidden p-12 nm:p-8 xl:p-16 flex flex-col gap-6 nm:gap-2 justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex flex-nowrap gap-4 items-center">
            <div>
              <CatSvg />
            </div>
            <h3 className="text-3xl font-bold text-text">
              {ProfileInfo.firstname} <br /> {ProfileInfo.lastname}
            </h3>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image src={ProfileImage} alt="Profile" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between items-start gap-2">
          <div>
            <h5 className="font-extralight leading-none">Specialization:</h5>
            <h4 className="font-semibold text-xl leading-none">
              {ProfileInfo.designation.full}
            </h4>
          </div>
          <div>
            <h5 className="font-extralight leading-none">Based in:</h5>
            <h4 className="font-semibold text-xl leading-none">
              {ProfileInfo.city.full}, {ProfileInfo.country.full}
            </h4>
          </div>
        </div>
        <div className="flex flex-nowrap items-center w-full justify-between">
          {SOCIAL_LINKS.map((social) => (
            <Icon key={social.label} {...social} />
          ))}
        </div>
        <Button
          onClick={() => handleScroll('contact')}
          variant={'gradient'}
          className="w-full"
        >
          <p className="group-hover:animate-slide-up capitalize">
            Let&apos;s work together
          </p>
        </Button>
      </div>
    </div>
  );
};

export default Profile;

const Icon = ({ icon: ICON, label, link }: NAV_LINK_TYPE) => {
  return (
    <a href={link} className="block border border-border p-3 rounded-xl">
      {<ICON />}
      <span className="sr-only">{label}</span>
    </a>
  );
};
