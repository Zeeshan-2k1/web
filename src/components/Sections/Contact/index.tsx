import React from 'react';
import { BsSend } from 'react-icons/bs';
import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GradientText } from '@/components/ui/gradient-text';
import Section from '@/components/ui/section';

type Props = {};

const Contact = (props: Props) => {
  return (
    <Section id="contact" className="py-12 nm:py-0 relative __current_section">
      <div className="nm:px-20 nm:py-20">
        <div className="flex flex-col gap-8">
          <Badge className="w-max " variant={'outline'}>
            Contact
          </Badge>
          <div>
            <GradientText variant={'heading2'}>
              Let&apos;s make something awesome together!
            </GradientText>
          </div>
          <div>
            <form>
              <motion.div
                initial={{ opacity: 0.25, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.1 }}
                className="flex flex-row gap-8 py-6"
              >
                <Input placeholder="Your Name*" required />
                <Input placeholder="Company Name" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.25, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.1 }}
                className="flex flex-row gap-8 py-6"
              >
                <Input placeholder="Your Email*" />
                <Input placeholder="Phone Number*" />
              </motion.div>
              <motion.textarea
                initial={{ opacity: 0.25, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.1 }}
                placeholder="A few words"
                className="py-6 w-full h-28 bg-transparent border-b border-stroke outline-none ring-0 text-lg px-3"
              />
              <Button
                className="border-[#2c2c2c] overflow-hidden p-6 rounded-3xl mt-4 nm:inline-flex __stagger_btn"
                variant={'gradient'}
              >
                <span className="text-lg group-hover:animate-slide-up capitalize">
                  Send Message{' '}
                  <BsSend className="inline ml-1 mb-[4px]" size={18} />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
