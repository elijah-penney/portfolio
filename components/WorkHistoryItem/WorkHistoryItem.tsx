import styled from 'styled-components';
import { Column, Row } from '@components';

const WorkItemContainer = styled(Column)`
  margin-top: 2rem;
`;

const WorkItemHeader = styled.h4`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.4rem;
  margin: 0;
`;

interface WorkHistoryItemProps {
  company: string;
  position: string;
  startYear: string;
  endYear: string;
}

/**
 * @namespace Components/WorkHistoryItem
 */
export const WorkHistoryItem: React.FC = () => {
  return (
    <WorkItemContainer>
      <Row
        maxWidth='450px'
        width='100%'
        justify='space-between'
        flexWrap='wrap'
      >
        <WorkItemHeader>DATASHIELD | R&D Manager</WorkItemHeader>
        <WorkItemHeader>2018 - CURRENT</WorkItemHeader>
        <ul>
          <li>
            Fusce accumsan ligula nibh, vitae gravida nunc gravida id. Ut nisi
            leo, interdum mattis turpis.
          </li>
          <li>
            In varius enim purus, a gravida mauris condimentum ut. Sed at mattis
            turpis
          </li>
          <li>
            Fusce imperdiet volutpat justo sit amet scelerisque. Vivamus ut
            tempor tellus.
          </li>
        </ul>
      </Row>
    </WorkItemContainer>
  );
};
