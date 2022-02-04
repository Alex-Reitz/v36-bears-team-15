import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';

type Props = `unknown`;

type Todo = {
  id: string;
  label: string;
  isComplete: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 460px;
  border: 3px solid black;
  padding: 1em;
  height: 80vh;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2em;
`;

const TextButton = styled.button`
  font-size: 1.1em;
  padding: 1em;
  margin: 1em;
  border: 2px solid black;
  border-radius: 10px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const ListItem = styled.label`
  align-items: center;
  display: flex;
  font-size: 18px;
  padding: 5px;
  margin: 0.3em;
  border: 2px solid black;
  border-radius: 20px;
`;

const Input = styled.input`
  background: white;
  border: none;
  border-radius: 15px;
  color: black;
  padding: 20px 24px;
  font-size: 1.2em;
  margin-top: 2em;
`;

const Todo = styled.div`
  align-items: start;
  display: flex;
  flex: 1;
  font-size: 1.2em;
  margin-left: 0.3em;
`;

const StyledCheckbox = styled.input`
  width: 15px;
  height: 15px;
  border-radius: 25px solid black;
  transition: all 100ms;
`;

const DeleteButton = styled.button`
  background: red;
  border: none;
  border-radius: 15px;
  color: #000;
  height: 2em;
  padding-left: 20px;
  padding-right: 20px;
`;

const TodoForm: React.FC<Props> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoLabel, setNewTodoLabel] = useState('');
  const handleTodoLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTodoLabel(e.target.value);
  const handleNewTodoKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodoLabel !== '') {
      setTodos((todos) => [
        ...todos,
        { id: uuid(), label: newTodoLabel, isComplete: false },
      ]);
      setNewTodoLabel('');
    }
  };

  const handleCompleteChange =
    (handledTodo: Todo) => (e: ChangeEvent<HTMLInputElement>) => {
      setTodos((todos) =>
        todos.map((todo) => {
          if (todo.id === handledTodo.id)
            return { ...todo, isComplete: e.target.checked };
          return todo;
        }),
      );
    };

  const handleTodoDelete = (handleTodo: Todo) => (): void => {
    setTodos((todos) => todos.filter((todo) => todo.id !== handleTodo.id));
  };

  const handleClearClick = () => {
    setTodos((todos) => todos.filter((todo) => !todo.isComplete));
  };

  return (
    <Container>
      <Heading>To-do</Heading>
      <div>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <StyledCheckbox
                onChange={handleCompleteChange(todo)}
                checked={todo.isComplete}
                type="checkbox"
              />
              <Todo>{todo.label}</Todo>
              <DeleteButton onClick={handleTodoDelete(todo)}>
                Delete
              </DeleteButton>
            </ListItem>
          ))}
        </List>
      </div>
      <Input
        value={newTodoLabel}
        onChange={handleTodoLabelChange}
        onKeyPress={handleNewTodoKeyPress}
        placeholder="Add Todo"
        type="text"
      ></Input>
      <TextButton onClick={handleClearClick}>Clear completed</TextButton>
    </Container>
  );
};

export default TodoForm;
