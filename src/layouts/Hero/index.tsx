import React from 'react';

// components:
import { Logo } from '../../components/Logo';
import { Marginer } from '../Marginer';

// styles:
import { HeroContainer, BgFilter } from './styles';

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <BgFilter>
        <Marginer direction='vertical' margin='5rem' />
        <Logo />
      </BgFilter>
    </HeroContainer>
  );
};
