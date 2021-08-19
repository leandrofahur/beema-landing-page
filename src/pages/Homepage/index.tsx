import React from 'react';
import { Hero } from '../../layouts/Hero';

import { HomepageContainer } from './styles';

export const Homepage: React.FC = () => {
  return (
    <HomepageContainer>
      <Hero />
    </HomepageContainer>
  );
};
