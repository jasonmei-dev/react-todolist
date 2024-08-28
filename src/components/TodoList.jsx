import TodoCard from './TodoCard';

const TodoList = () => {
  let todos = ['Go to the gym', 'Eat more fruits and veggies', 'Pick up the kids from school'];

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard key={todoIndex} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
