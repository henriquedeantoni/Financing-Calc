import React from 'react';
import { LinkWrapper } from './Link.Styles';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  return <LinkWrapper href={href}>{children}</LinkWrapper>;
};