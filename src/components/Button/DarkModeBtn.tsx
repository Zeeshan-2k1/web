'use client';

import * as React from 'react';
import { TbMoonStars } from 'react-icons/tb';
import { LuSunMedium } from 'react-icons/lu';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function DarkModeBtn() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-transparent border-none ring-0 ring-offset-0 outline-none hover:backdrop-blur-md hover:bg-transparent"
          variant="outline"
          size="icon"
        >
          <LuSunMedium className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <TbMoonStars className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="hover:!text-base-tint"
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:!text-base-tint"
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:!text-base-tint"
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
