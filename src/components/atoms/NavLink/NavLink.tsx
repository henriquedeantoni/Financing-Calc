import React from 'react';
import {Link} from './NavLink.Styles.ts'

export const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}>{children}</Link>
);