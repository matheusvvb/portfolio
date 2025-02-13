"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, MoonStar, Laptop } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 focus:outline-none">
        <div className="w-4 h-4" />
      </button>
    );
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 focus:outline-none">
          {currentTheme === 'dark' ? (
            <MoonStar className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          ) : (
            <Sun className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          )}
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className='font-local'>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={theme != "light" ? "text-zinc-400 dark:text-zinc-500" : ""}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span className='font-local'>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={theme != "dark" ? "text-zinc-400 dark:text-zinc-500" : ""}
        >
          <MoonStar className="mr-2 h-4 w-4" />
          <span className='font-local'>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={theme != "system" ? "text-zinc-400 dark:text-zinc-500" : ""}
        >
          <Laptop className="mr-2 h-4 w-4" />
          <span className='font-local'>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};