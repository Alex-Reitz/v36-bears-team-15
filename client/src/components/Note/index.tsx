import styled from 'styled-components';
import Main from './Main';
import Sidebar from './Sidebar';

const Container = styled.div`
  display: flex;
`;

const Note = () => (
  <Container>
    <Sidebar />
    <Main />
  </Container>
);

export default Note;
