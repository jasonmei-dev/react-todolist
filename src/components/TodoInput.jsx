import { useState } from 'react';

const TodoInput = ({ handleAddTodos }) => {
  const [todoValue, setTodoValue] = useState('');

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleClick = () => {
    handleAddTodos(todoValue);
    setTodoValue('');
  };

  return (
    <header>
      <input onChange={handleChange} value={todoValue} placeholder="Enter todo..." />
      <button onClick={handleClick}>Add</button>
    </header>
  );
};

export default TodoInput;
