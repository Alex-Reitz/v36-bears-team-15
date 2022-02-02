import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import uuid from 'react-uuid';

type Props = `unknown`;

type Todo = {
  id: string;
  label: string;
  isComplete: boolean;
};

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
    <div>
      <h1>To-do</h1>
      <div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                onChange={handleCompleteChange(todo)}
                checked={todo.isComplete}
              />
              {todo.label}
              <button onClick={handleTodoDelete(todo)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <input
        value={newTodoLabel}
        onChange={handleTodoLabelChange}
        onKeyPress={handleNewTodoKeyPress}
        placeholder="Add Todo"
        type="text"
      ></input>
      <div>
        <button onClick={handleClearClick}>Clear completed</button>
      </div>
    </div>
  );
};

export default TodoForm;
