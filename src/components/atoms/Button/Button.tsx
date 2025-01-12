import React from 'react';
import { StyledButton } from './Button.Styles.ts';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);