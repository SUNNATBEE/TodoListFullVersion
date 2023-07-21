import { toast } from "react-toastify";

export const Item = ({ id, title, isCompleted, todos, setTodos }) => {
  // Delete todo function start
  const handleDeleteTodo = (todoID) => {
    const filtredTodo = todos.filter((item) => item.id !== todoID);
    setTodos(filtredTodo);
    toast.error("Todo O'chirildi")
  };

  // Edit todo function start
  const handleEdit = (todoID, todText) => {
    const newText = prompt("yangi qiymat kiriting", todText);
    const findedTodos = todos.find((item) => item.id == todoID);
    findedTodos.title = newText;
    setTodos([...todos]);
    toast.warning("Todo O'zgartirildi")
  };

  // CheckBox function start
  const handleCheack = (todoID) => {
    const findedTodos = todos.find((item) => item.id == todoID);
    findedTodos.isCompleted = !findedTodos.isCompleted;
    setTodos([...todos]);
    toast.info("Todo bajarildi")
  };

  return (
    <li className="flex items-center mb-3">
      <strong>ID:{id}</strong>
      <input
        onChange={() => handleCheack(id)}
        checked={isCompleted}
        className="mx-2"
        type="checkbox"
      />
      <p
        className={
          isCompleted
            ? "line-through flex-1 font-bold"
            : "flex-1 font-bold text-green-600"
        }
      >
        {title}
      </p>
      <button
        onClick={() => handleEdit(id, title)} // Edit todo function start
        type="button"
        className="mx-4 bg-yellow-600 text-white  py-1 px-4 rounded"
      >
        EDIT
      </button>
      <button
        type="button"
        onClick={() => handleDeleteTodo(id)} // Delete todo function start
        className="bg-red-600 text-white  py-1 px-4 rounded"
      >
        DELETE
      </button>
    </li>
  );
};
