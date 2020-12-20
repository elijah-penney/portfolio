import styled from 'styled-components';

interface RowProps {
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

export const Row = styled.div<RowProps>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.flexWrap};
`;
