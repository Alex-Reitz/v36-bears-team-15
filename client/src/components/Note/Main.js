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

function Main() {
  return (
    <Wrapper>
      <NoteArea>
        <InputTitle type="text" placeholder="Note Title" autoFocus />
        <NoteInput placeholder="Write your notes here..." />
      </NoteArea>
      <NotePreview>
        <NotePreviewTitle>Title</NotePreviewTitle>
        <NotePreviewBody>Note</NotePreviewBody>
      </NotePreview>
    </Wrapper>
  );
}

export default Main;
