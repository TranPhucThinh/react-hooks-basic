import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ]);

  const handleTodoClick = (todo) => {
    const index = todoList.findIndex((idxTodo) => idxTodo.id === todo.id);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (formValues) => {
    console.log(
      '🚀 ~ file: App.js ~ line 20 ~ handleTodoFormSubmit ~ formValues',
      formValues
    );
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    const newTodoList = [...todoList];

    newTodoList.push(newTodo);

    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
