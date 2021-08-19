import styled from 'styled-components';

import { Button } from '../../components/Button';

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 0rem 2em;
  justify-content: space-between;
  align-items: center;
`;

export const BrandContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const AccessibilityContainer = styled.div``;

export const GetStartedButton = styled(Button)``;
