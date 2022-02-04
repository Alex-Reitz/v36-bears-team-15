import TodoForm from '../TodoForm/index';
import styled from 'styled-components';

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 35px;
`;

const Todo = () => (
  <Layout>
    <h1>To-Do</h1>
    <TodoForm />
  </Layout>
);

export default Todo;
