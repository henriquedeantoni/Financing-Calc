import React from 'react';
import { TextWrapper } from './Text.Styles.ts'

interface TextProps {
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ children }) => {
  return <TextWrapper>{children}</TextWrapper>;
};