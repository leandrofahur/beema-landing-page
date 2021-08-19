import React from 'react';

// components:
import { Logo } from '../../components/Logo';
import { Marginer } from '../Marginer';

// styles:
import { HeroContainer, BgFilter, MotivationalText } from './styles';

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <BgFilter>
        <Marginer direction='vertical' margin='7rem' />
        <Logo />
        <Marginer direction='vertical' margin='2rem' />
        <MotivationalText>Software Development</MotivationalText>
        <MotivationalText>From The Best in The Industry</MotivationalText>
      </BgFilter>
    </HeroContainer>
  );
};
