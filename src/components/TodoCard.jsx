const TodoCard = ({ todo, handleDeleteTodo }) => {
  const handleEditClick = () => {
    console.log('Should edit', todo);
  };

  const handleDeleteClick = () => {
    handleDeleteTodo(todo);
  };

  return (
    <li className="todoItem">
      <div className="actionsContainer">
        <p>{todo}</p>
        <i className="fa-solid fa-pen-to-square" onClick={handleEditClick}></i>
        <i className="fa-regular fa-trash-can" onClick={handleDeleteClick}></i>
      </div>
    </li>
  );
};

export default TodoCard;
