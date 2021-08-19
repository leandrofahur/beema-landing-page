import React from 'react';

// assets:
import BeemaLogoImg from '../../assets/logo/logo_croped.png';

import { LogoContainer, LogoImg, LogoText } from './styles';

interface IProps {
  inline: boolean;
}

export const Logo: React.FC<IProps> = ({ inline }) => {
  return (
    <LogoContainer inline={inline}>
      <LogoImg inline={inline} src={BeemaLogoImg} />
      <LogoText inline={inline}>Beema</LogoText>
    </LogoContainer>
  );
};
