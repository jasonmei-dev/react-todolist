import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(['Go to the gym', 'Eat more fruits and veggies', 'Pick up the kids from school']);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(indexToDelete) {
    const updatedTodoList = todos.filter((todo, todoIndex) => todoIndex !== indexToDelete);
    setTodos(updatedTodoList);
  }

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
