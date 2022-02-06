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
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
`;
const Heading = styled.h1`
  font-size: 3em;
  margin: 1em;
`;
const NoteHeading = styled.h3`
  font-size: 1.5em;
  display: flex;
  font-weight: bold;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  margin: 0.4em;
  border-radius: 10px;
`;

const IndividualNote = styled.div`
  padding: 0.5em;
  margin: 0.2em;
  width: 100%;
`;
const NotePreview = styled.p`
  font-size: 1em;
  width: 100%;
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: center;
`;
const NoteBodyPreview = styled.div`
  display: flex;
  flex-direction: column;
`;
const NoteText = styled.p`
  font-size: 1.1em;
`;
const ModifiedTag = styled.small`
  font-size: 0.8em;
  display: flex;
  justify-content: end;
`;
//Change styling for active note

function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <Wrapper className="app-sidebar">
      <Div className="app-sidebar-header">
        <Heading>Notes</Heading>
        <ButtonAdd onClick={onAddNote}>Add</ButtonAdd>
      </Div>
      <NoteContainer className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }) => (
          <IndividualNote
            key={sortedNotes.id}
            className={`app-sidebar-note ${id === activeNote && 'active'}`}
            onClick={() => setActiveNote(id)}
          >
            <NotePreview className="sidebar-note-title">
              <NoteHeading>{title}</NoteHeading>
              <ButtonDelete onClick={() => onDeleteNote(id)}>
                Delete
              </ButtonDelete>
            </NotePreview>
            <NoteBodyPreview>
              <NoteText>{body && body.substr(0, 100) + '...'}</NoteText>
              <ModifiedTag className="note-meta">
                Last Modified{' '}
                {new Date(lastModified).toLocaleDateString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </ModifiedTag>
            </NoteBodyPreview>
          </IndividualNote>
        ))}
      </NoteContainer>
    </Wrapper>
  );
}

export default Sidebar;
