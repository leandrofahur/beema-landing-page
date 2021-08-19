import { ButtonHTMLAttributes } from 'react';

import { ButtonWrapper } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <ButtonWrapper
        whileHover={{ scale: 1.1, filter: 'brightness(1.1)' }}
        whileTap={{ filter: 'brightness(0.9)', scale: 0.99 }}
        onClick={() => {
          console.log('test');
        }}
      >
        {children}
      </ButtonWrapper>
    </>
  );
};
