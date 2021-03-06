import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'lightBlue' | 'orange';
  size?: 'large';
  label?: string;
  value?: string;
  onClick?: (event: any) => void;
};

const StyledButton = styled.button<{
  color?: 'lightBlue' | 'orange';
  size?: 'large';
}>`
  width: 264px;
  height: 72px;

  display: flex;
  align-items: center;
  padding-left: 32px;
  border-radius: 0px 40px 40px 0px;

  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: bold;
  font-family: 'Noto Sans CJK KR', sans-serif;
  font-style: normal;
  line-height: 24px;

  background-color: ${({ color, theme }) =>
    color !== undefined ? theme.colors[color] : theme.colors.lightBlue};
  color: ${({ color, theme }) =>
    color === 'orange' ? '#fff' : theme.colors.primaryBlue};
  cursor: pointer;

  ${({ size }) => {
    if (size === 'large')
      return css`
        width: 280px;
        padding-left: 48px;
      `;
  }}

  &:disabled {
    color: #abcad7;
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { color, label, onClick, value, size } = props;
  return (
    <StyledButton
      {...props}
      onClick={(event) => onClick && onClick(event)}
      value={value}
      size={size}
      color={color}>
      {label}
    </StyledButton>
  );
};

export default Button;
