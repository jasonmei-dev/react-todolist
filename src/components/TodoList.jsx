import TodoCard from './TodoCard';

const TodoList = ({ todos }) => {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard key={todoIndex} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
