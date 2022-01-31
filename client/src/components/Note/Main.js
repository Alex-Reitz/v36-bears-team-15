import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: white;
  width: 60%;
  height: 100vh;
`;
const InputTitle = styled.input`
  line-height: 2em;
  height: 30px;
  width: 100%;
`;
const NoteArea = styled.div`
  height: 50vh;
`;
const NotePreview = styled.div`
  height: 50vh;
`;
const NoteInput = styled.textarea`
  width: 100%;
  margin-top: 0.5em;
  height: 80%;
`;
const NotePreviewTitle = styled.h1`
  font-size: 1em;
`;
const NotePreviewBody = styled.div`
  margin: 1m;
`;
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 300;
`;

function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  if (!activeNote)
    return (
      <Wrapper>
        <CenteredDiv>No active note.</CenteredDiv>
      </Wrapper>
    );
  return (
    <Wrapper>
      <NoteArea>
        <InputTitle
          type="text"
          placeholder="Note Title"
          autoFocus
          value={activeNote.title}
          onChange={(e) => onEditField('title', e.target.value)}
        />
        <NoteInput
          placeholder="Write your notes here..."
          value={activeNote.body}
          onChange={(e) => onEditField('body', e.target.value)}
        />
      </NoteArea>
      <NotePreview>
        <NotePreviewTitle>{activeNote.title}</NotePreviewTitle>
        <NotePreviewBody>{activeNote.body}</NotePreviewBody>
      </NotePreview>
    </Wrapper>
  );
}

export default Main;
