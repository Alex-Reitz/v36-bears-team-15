import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import uuid from 'react-uuid';

type Props = `unknown`;

type Todo = {
  id: string;
  label: string;
};

const TodoForm: React.FC<Props> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoLabel, setNewTodoLabel] = useState('');
  const handleTodoLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTodoLabel(e.target.value);
  const handleNewTodoKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodoLabel !== '') {
      setTodos((todos) => [...todos, { id: uuid(), label: newTodoLabel }]);
      setNewTodoLabel('');
    }
  };
  return (
    <div>
      <h1>To-do</h1>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.label}</li>
          ))}
        </ul>
      </div>
      <input
        value={newTodoLabel}
        onChange={handleTodoLabelChange}
        onKeyPress={handleNewTodoKeyPress}
        placeholder="Add Todo"
        type="text"
      ></input>
    </div>
  );
};

export default TodoForm;
