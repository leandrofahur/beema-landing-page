import { ButtonHTMLAttributes } from 'react';

import { ButtonWrapper } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <ButtonWrapper
        whileHover={{
          scale: 1.1,
          backgroundColor: 'rgba(255,255,255,0)',
          border: '2px solid #00B997',
          transition: {
            duration: 0.3,
          },
        }}
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
