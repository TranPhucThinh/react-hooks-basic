import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import queryString from 'query-string';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;

        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch data', error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  const handlePageChange = (newPage) => {
    console.log(
      '🚀 ~ file: App.js ~ line 41 ~ handlePageChange ~ newPage',
      newPage
    );
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

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
      <h2>Post List</h2>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />

      {/* <h2>Todo List</h2> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todoList={todoList} onTodoClick={handleTodoClick} /> */}
    </div>
  );
}

export default App;
