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

const NoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndividualNote = styled.div`
  padding: 1em;
`;
const NotePreview = styled.p`
  font-size: 0.75em;
  margin-left: 2em;
  padding: 0.5em;
`;

//Change styling for active note

function Sidebar({ notes, onAddNote, onDeleteNote, setActiveNote }) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <Wrapper>
      <Div>
        <Heading>Notes</Heading>
        <ButtonAdd onClick={onAddNote}>Add Note</ButtonAdd>
      </Div>
      <NoteContainer>
        {sortedNotes.map((note) => {
          <IndividualNote onClick={() => setActiveNote(note.id)}>
            {note.title}
            <ButtonDelete onClick={() => onDeleteNote(note.id)}>
              Delete
            </ButtonDelete>
            <NotePreview>
              {note.body && note.body.substr(0, 100) + '...'}
            </NotePreview>
            Last Modified
            {new Date(note.LastModified).toLocaleDateString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </IndividualNote>;
        })}
      </NoteContainer>
    </Wrapper>
  );
}

export default Sidebar;
