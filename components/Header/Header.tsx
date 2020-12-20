import styled from 'styled-components';

interface HeaderProps {
  color?: string;
}

const StyledHeader = styled.h1<HeaderProps>`
  font-family: 'Source Sans Pro', sans-serif;
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-size: 3rem;
  margin: 0;
`;
/**
 * @namespace Components/Header
 */
export const Header: React.FC<HeaderProps> = ({ children, color }) => {
  return <StyledHeader color={color}>{children}</StyledHeader>;
};
