import React from 'react';
import Link from 'next/link';

import NavBarItem from './NavBarItem';

interface PageLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  icon?: React.ReactNode;
  tabIndex?: number;
  testId?: string;
}

const PageLink: React.FC<PageLinkProps> = ({ children, href, className, icon, tabIndex, testId }) => {
  return (
    <Link
      href={href}
      className={className}
      tabIndex={tabIndex}
      data-testid={testId}
    >
    <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
        {children}
    </NavBarItem>
    </Link>
  );
};

export default PageLink;