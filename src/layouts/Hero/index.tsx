// components:
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { DownArrow } from '../../components/DownArrow';

import { Marginer } from '../Marginer';
import { Navbar } from '../Navbar';

import { Element, scroller } from 'react-scroll';

import {
  HeroContainer,
  BgFilter,
  MotivationalText,
  DownArrowContainer,
} from './styles';

export const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    scroller.scrollTo('servicesSection', { smooth: true });
  };

  return (
    <Element name='hero'>
      <HeroContainer>
        <BgFilter>
          <Navbar />
          <Marginer direction='vertical' margin='7rem' />
          <Logo inline={false} />
          <Marginer direction='vertical' margin='2rem' />
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From The Best in The Industry</MotivationalText>
          <Marginer direction='vertical' margin='3rem' />
          <Button inline={false}>Start Your Project</Button>
          <DownArrowContainer onClick={() => scrollToNextSection()}>
            <DownArrow />
          </DownArrowContainer>
        </BgFilter>
      </HeroContainer>
    </Element>
  );
};
