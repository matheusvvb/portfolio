import Link, { LinkProps } from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

type BackArrowProps = {
  className?: string;
} & Omit<LinkProps, 'href'>;

const BackArrow = ({ className = '', ...props }: BackArrowProps) => {
  return (
    <Link
      href="/"
      className={cn('group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors', className)}
      {...props}
    >
      <span className="text-base font-medium">← home</span>
    </Link>
  );
};

export default BackArrow;