import styled from 'styled-components';

interface HeaderProps {
  color?: string;
}

const HeaderContainer = styled.div`
  display: flex;
`;

const StyledHeader = styled.h2<HeaderProps>`
  font-family: 'Source Sans Pro', sans-serif;
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-size: 2.5rem;
  margin: 0;
  padding-bottom: 2px;
  border-bottom: 5px #000 solid;
`;
/**
 * @namespace Components/Header
 */
export const SubHeader: React.FC<HeaderProps> = ({ children, color }) => {
  return (
    <HeaderContainer>
      <StyledHeader color={color}>{children}</StyledHeader>
    </HeaderContainer>
  );
};
