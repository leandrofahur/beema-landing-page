import styled from 'styled-components';

import { motion } from 'framer-motion';

interface IProps {
  inline: boolean;
}

export const ButtonWrapper = styled(motion.button)<IProps>`
  padding: ${({ inline }) => (inline ? '0.4rem 0.8rem' : '0.8rem 1.3rem')};
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--white);
  font-weight: bold;
  font-size: ${({ inline }) => (inline ? '12px' : '16px')};
  outline: none;
  border: none;
`;
