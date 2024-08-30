import TodoCard from './TodoCard';

const TodoList = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard key={todoIndex} todo={todo} todoIndex={todoIndex} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
