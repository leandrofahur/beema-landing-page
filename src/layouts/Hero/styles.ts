import styled from 'styled-components';

import HeroBGImg from '../../assets/pictures/company_team.jpg';

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${HeroBGImg});
`;

export const BgFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MotivationalText = styled.h1`
  font-size: 33px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--white);
`;
