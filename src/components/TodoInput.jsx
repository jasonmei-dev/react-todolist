const TodoInput = ({ handleAddTodo, todoValue, setTodoValue }) => {
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleClick = () => {
    handleAddTodo(todoValue);
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
