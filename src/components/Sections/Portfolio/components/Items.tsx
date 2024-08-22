import React from 'react';
import { motion } from 'framer-motion';
import { dataItem } from '@/lib/constant';

type Props = {
  data: dataItem[];
};

const Items = (props: Props) => {
  return (
    <div className="py-10">
      {props.data.map(({ year, subtitle, title, description }) => {
        return (
          <motion.div
            className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between lg:items-center py-10 odd:border-y border-stroke last-of-type:border-b"
            key={year + subtitle}
            initial={{ opacity: 0.25, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="pr-48">
              <span className="text-medium">{year}</span>
            </div>
            <div className="flex-1">
              <span className="text-bright text-2xl font-semibold">
                {title}
              </span>
              <br />
              <span>{subtitle}</span>
            </div>
            <div className="flex-1">
              <p className="text-medium text-lg">{description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Items;
