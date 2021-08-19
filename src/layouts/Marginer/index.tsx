import React from 'react';
import { HorizontalMargin, VerticalMargin } from './styles';

interface IProps {
  direction: 'horizontal' | 'vertical';
  margin: string;
}

export const Marginer = ({ direction, margin }: IProps) => {
  if (direction === 'horizontal') return <HorizontalMargin margin={margin} />;
  else {
    return <VerticalMargin margin={margin} />;
  }
};
