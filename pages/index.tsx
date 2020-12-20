import { ThemeProvider } from 'styled-components';
import {
  ParticleBackground,
  GlobalStyles,
  FullHeightSection,
  Header,
  StyledSection,
  SubHeader,
  Column,
  Row,
  WorkHistoryItem,
} from '@components';
import { theme } from '@constants';

const index = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <FullHeightSection>
          <Header color={theme.colors.white}>Hi.</Header>
          <Header color={theme.colors.orange}>I'm Elijah.</Header>
          <Header color={theme.colors.white}>Let's do this.</Header>
          <ParticleBackground />
        </FullHeightSection>
        <StyledSection>
          <Column>
            <SubHeader>Work History</SubHeader>
            <Row width='100%' justify='space-between' flexWrap='wrap'>
              <WorkHistoryItem />
              <WorkHistoryItem />
              <WorkHistoryItem />
            </Row>
          </Column>
        </StyledSection>
      </ThemeProvider>
    </>
  );
};

export default index;
