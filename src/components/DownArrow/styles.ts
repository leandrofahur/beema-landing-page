import styled from 'styled-components';

import { motion } from 'framer-motion';

import { IoIosArrowDown } from 'react-icons/io';

export const ArrowContainer = styled(motion.div)`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowIcon = styled(IoIosArrowDown)`
  fill: var(--white);
  font-size: 30px;
`;
