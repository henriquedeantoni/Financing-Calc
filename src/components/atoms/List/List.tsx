import React from 'react';
import { ListWrapper } from './List.styles.ts';

interface ListProps {
  items: string[];
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ListWrapper>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListWrapper>
  );
};