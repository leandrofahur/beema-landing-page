import styled, { css } from 'styled-components';

interface IProps {
  inline: boolean;
}

export const LogoContainer = styled.div<IProps>`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img<IProps>`
  width: ${({ inline }) => (inline ? '24px' : '8rem')};
  height: ${({ inline }) => (inline ? '24px' : '8rem')};
  margin-right: ${({ inline }) => (inline ? '5px' : '0px')};
`;

export const LogoText = styled.div<IProps>`
  margin-top: ${({ inline }) => (inline ? '0px' : '6px')};
  font-size: ${({ inline }) => (inline ? '18px' : '40px')};
  color: ${({ inline }) => (inline ? css`var(--white)` : css`var(--primary)`)};
  font-weight: bold;
  text-align: center;
`;
