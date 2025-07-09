import React from 'react';

import NavBarItem from './NavBarItem';

interface PageLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  icon?: React.ReactNode;
  tabIndex?: number;
  testId?: string; // Or dataTestId for better naming convention
}

const AnchorLink: React.FC<PageLinkProps> = ({ children, href, className, icon, tabIndex, testId }) => {
  return (
    <a href={href}>
      <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
        {children}
      </NavBarItem>
    </a>
  );
};

export default AnchorLink;