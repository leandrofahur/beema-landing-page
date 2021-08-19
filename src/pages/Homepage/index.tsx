import React from 'react';
import { Hero } from '../../layouts/Hero';
import { ServicesSection } from '../../layouts/ServicesSection';

import { HomepageContainer } from './styles';

export const Homepage: React.FC = () => {
  return (
    <HomepageContainer>
      <Hero />
      <ServicesSection />
    </HomepageContainer>
  );
};
