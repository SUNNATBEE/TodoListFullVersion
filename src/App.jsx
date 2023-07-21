import { useRef, useState } from "react";
import { Item } from "./components/Item/Item";
import { List } from "./components/List/List";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [],
  );
  // Array obj

  // Get InputValue with useRef start
  const inputRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length ? todos.at(-1).id + 1 : 1,
        title: inputRef.current.value,
        isCompleted: false,
      },
    ]);
    toast.success("Todo qoshildi");
    inputRef.current.value = "";
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <>
      <div className="bg-blue-300 w-screen h-screen flex items-center justify-center flex-col">
        <div className="w-[400px] bg-white p-4 rounded">
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              ref={inputRef} // Contacted ref with input
              className="w-2/3 border-0 border-b-2 border-fuchsia-700 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Todo"
            />
            <button
              className="bg-fuchsia-700 text-white ml-4 py-2 px-8 rounded"
              type="submit"
            >
              SEND
            </button>
          </form>
          <List>
            {todos.map((todo) => (
              <Item key={todo.id} {...todo} todos={todos} setTodos={setTodos} />
            ))}
          </List>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
}

export default App;
