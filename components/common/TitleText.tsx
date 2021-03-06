import React from 'react';
import styled from 'styled-components';

export type TitleTextProps = React.HTMLAttributes<HTMLElement> & {
  color?: 'primary' | 'white';
  children: string | string[];
};

const Container = styled.h1<{ color?: 'primary' | 'white' }>`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  white-space: pre-line;
  color: ${({ color, theme }) =>
    color === 'primary' ? theme.colors.primaryBlue : '#fff'};
`;

const TitleText: React.FC<TitleTextProps> = (props) => {
  const { color = 'primary', children, className } = props;
  return (
    <Container {...props} className={className} color={color}>
      {children}
    </Container>
  );
};

export default TitleText;
