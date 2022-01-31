import styled from 'styled-components';

const Wrapper = styled.section`
  background: papayawhip;
  width: 40%;
  height: 100vh;
`;
const ButtonDelete = styled.button`
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;
const ButtonAdd = styled.button`
  color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;
const Heading = styled.h1`
  font-size: 3em;
  margin: 1em;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NoteTitle = styled.h1`
  font-size: 1em;
  margin: 1em;
`;
const IndividualNote = styled.div`
  padding: 1em;
`;
const NotePreview = styled.p`
  font-size: 0.75em;
  margin-left: 2em;
  padding: 0.5em;
`;
const LastModified = styled.p`
  font-size: 0.75em;
  margin-left: 2em;
  padding: 0.2em;
`;

function Sidebar() {
  return (
    <Wrapper>
      <Div>
        <Heading>Notes</Heading>
        <ButtonAdd>Add Note</ButtonAdd>
      </Div>
      <IndividualNote>
        <Div>
          <NoteTitle>Title</NoteTitle>
          <ButtonDelete>Delete</ButtonDelete>
        </Div>
        <NotePreview>Note preview</NotePreview>
        <LastModified>Last modified [date]</LastModified>
      </IndividualNote>
    </Wrapper>
  );
}

export default Sidebar;
