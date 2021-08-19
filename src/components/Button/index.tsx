import { ButtonHTMLAttributes } from 'react';

import { ButtonWrapper } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  inline: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  inline,
  children,
  ...rest
}) => {
  return (
    <>
      <ButtonWrapper
        inline={inline}
        whileHover={{
          scale: 1.05,
          backgroundColor: 'rgba(255,255,255,0)',
          border: '2px solid #00B997',
          transition: {
            duration: 0.3,
          },
        }}
        whileTap={{ filter: 'brightness(0.9)', scale: 0.95 }}
        onClick={() => {
          console.log('test');
        }}
      >
        {children}
      </ButtonWrapper>
    </>
  );
};
