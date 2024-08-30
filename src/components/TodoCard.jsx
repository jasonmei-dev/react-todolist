const TodoCard = ({ todo, todoIndex, handleDeleteTodo, handleEditTodo }) => {
  const handleDeleteClick = () => {
    handleDeleteTodo(todoIndex);
  };

  const handleEditClick = () => {
    handleEditTodo(todoIndex);
  };

  return (
    <li className="todoItem">
      <div className="actionsContainer">
        <p>{todo}</p>
        <button>
          <i className="fa-solid fa-pen-to-square" onClick={handleEditClick}></i>
        </button>
        <button>
          <i className="fa-regular fa-trash-can" onClick={handleDeleteClick}></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
