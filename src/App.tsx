import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ConfigProvider } from "antd";
import esES from "antd/es/locale/es_ES";
const initialTodos = [
  {
    id: 1,
    title: "Meet with John Doe",
    description: "Work with Jhon",
    priority: "baja",
    date: "2021-08-01",
    duration: "10:00 - 11:00",
    location: "Calle 1",
    stakeholders: 3,
    thumbnail: "https://picsum.photos/200/300",
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const addTodo = (todo: any) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  const editTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const finishTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <ConfigProvider locale={esES}>
      <div className="App w-auto">
        <div className=" flex justify-center my-12 pb-7 gap-3">
          <svg
            fill="#000000"
            width="40px"
            height="40px"
            viewBox="0 0 14 14"
            role="img"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#51B4A0"
              d="M1 6.85l1.92 1.92L5.8 5.89l-.66-.66-2.22 2.19-1.26-1.23zm0-3.9l1.92 1.92L5.8 1.99l-.66-.66-2.22 2.19-1.26-1.23zm0 7.8l1.92 1.92L5.8 9.79l-.66-.66-2.22 2.19-1.26-1.23z"
            />
            <path d="M7 6.4h6v1.2H7zm0-3.9h6v1.2H7zm0 7.8h6v1.2H7z" />
          </svg>
          <p className="font-Roboto pl-2 pt-1 font-bold text-2xl">Todo APP</p>
        </div>

        <div className="App flex gap-7">
          <TodoForm addTodo={addTodo}></TodoForm>
          <TodoList
            initialTodos={initialTodos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            finishTodo={finishTodo}
          ></TodoList>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
