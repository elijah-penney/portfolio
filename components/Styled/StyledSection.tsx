import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  padding: 2rem 3rem;
  & > div {
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
  }
`;
