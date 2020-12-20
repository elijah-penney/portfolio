import styled from 'styled-components';

interface ColumnProps {
  maxWidth?: string;
  width?: string;
  height?: string;
  justify?:
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'flex-start'
    | 'flex-end';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.flexWrap};
`;
