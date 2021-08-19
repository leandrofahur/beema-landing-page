import styled from 'styled-components';

import { motion } from 'framer-motion';

export const ButtonWrapper = styled(motion.button)`
  padding: 0.8rem 1.3rem;
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--white);
  font-weight: bold;
  font-size: 16px;
  border: none;
`;
