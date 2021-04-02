import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export type LabelProps = React.HTMLAttributes<HTMLElement> & {
  index: number;
};

const Label: React.FC<LabelProps> = ({ className, index }) => {
  return (
    <LabelIcon className={className}>
      <span>{index}/11</span>
    </LabelIcon>
  );
};

const LabelIcon = styled.div`
  padding: 8px 12px;
  font-size: 18px;
  width: 70px;
  height: 35px;
  text-align: center;
  color: ${theme.colors.primaryBlue};
  border: 1px solid ${theme.colors.primaryBlue};
  border-radius: 1em;
`;

export default Label;