import React from 'react';
import { Hero } from '../../layouts/Hero';
import { ServicesSection } from '../../layouts/ServicesSection';
import { ReviewsSection } from '../../layouts/ReviewsSection';

import { HomepageContainer } from './styles';

export const Homepage: React.FC = () => {
  return (
    <HomepageContainer>
      <Hero />
      <ServicesSection />
      <ReviewsSection />
    </HomepageContainer>
  );
};
