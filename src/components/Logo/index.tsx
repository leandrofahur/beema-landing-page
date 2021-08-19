import React from 'react';

// assets:
import BeemaLogoImg from '../../assets/logo/logo_croped.png';

import { LogoContainer, LogoImg, LogoText } from './styles';

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoImg src={BeemaLogoImg} />
      <LogoText>Beema</LogoText>
    </LogoContainer>
  );
};
