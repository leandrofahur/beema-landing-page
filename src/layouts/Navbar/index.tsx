import { Logo } from '../../components/Logo';

import {
  NavbarContainer,
  BrandContainer,
  AccessibilityContainer,
  GetStartedButton,
} from './styles';

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline></Logo>
      </BrandContainer>
      <AccessibilityContainer>
        <GetStartedButton inline>Get Started</GetStartedButton>
      </AccessibilityContainer>
    </NavbarContainer>
  );
};
