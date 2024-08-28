import TodoCard from './TodoCard';

const TodoList = ({ todos, handleDeleteTodo }) => {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard key={todoIndex} todo={todo} handleDeleteTodo={handleDeleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
