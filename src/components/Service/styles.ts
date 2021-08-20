import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IProps {
  isReversed: boolean;
}

export const ServiceContainer = styled.div<IProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => (isReversed ? 'row' : 'row-reverse')};
  margin-bottom: 5rem;
`;

export const ServiceImg = styled(motion.img)`
  width: 22em;
  height: 17em;
`;

export const DescriptionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 55%;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: var(--black);
  font-weight: 700;
  margin: 5px 0;
`;

export const Details = styled.p`
  color: var(--light-gray);
  font-size: 18px;
  text-align: center;
  max-width: 55%;
`;
