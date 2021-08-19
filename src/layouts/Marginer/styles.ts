import styled from 'styled-components';

interface IProps {
  margin: string;
}

export const HorizontalMargin = styled.span<IProps>`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`;

export const VerticalMargin = styled.span<IProps>`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`;
