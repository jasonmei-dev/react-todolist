const TodoCard = ({ todo }) => {
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        <p>{todo}</p>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </li>
  );
};

export default TodoCard;
