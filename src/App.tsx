import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ConfigProvider, Form } from "antd";
import esES from "antd/es/locale/es_ES";
const Todos = [
  {
    id: 1,
    title: "Meet with John Doe",
    description:
      "Work with Jhon Doe, to discuss the new project details and features to be implemented",
    priority: "baja",
    date: "2021-08-01",
    duration: "10:00 - 11:00",
    location: "Calle 1",
    stakeholders: 3,
  },
  {
    id: 2,
    title: "Meet with John Doe",
    description:
      "Work with Jhon Doe, to discuss the new project details and features to be implemented",
    priority: "media",
    date: "2021-08-01",
    duration: "10:00 - 11:00",
    location: "Calle 1",
    stakeholders: 3,
  },
  {
    id: 3,
    title: "Meet with John Doe",
    description:
      "Work with Jhon Doe, to discuss the new project details and features to be implemented",
    priority: "alta",
    date: "2021-08-01",
    duration: "10:00 - 11:00",
    location: "Calle 1",
    stakeholders: 3,
  },
  {
    id: 4,
    title: "Meet with John Doe",
    description:
      "Work with Jhon Doe, to discuss the new project details and features to be implemented",
    priority: "alta",
    date: "2021-08-01",
    duration: "10:00 - 11:00",
    location: "Calle 1",
    stakeholders: 3,
  },
];
function App() {
  const [todos, setTodos] = useState(Todos);
  const [form] = Form.useForm();

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
  const resetForm = () => {
    form.resetFields();
    form.setFieldsValue({
      title: "",
      description: "",
      priority: "baja",
      date: "",
      duration: "",
      location: "",
      stakeholders: 1,
    });
  };

  return (
    <ConfigProvider locale={esES}>
      <div className="App w-auto mx-7">
        <div className=" flex justify-center my-12 gap-3">
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
          <p className="font-Inter pl-2 pt-1 font-bold text-2xl">Todo APP</p>
        </div>

        <div className="App flex gap-5">
          <TodoForm
            addTodo={addTodo}
            resetForm={resetForm}
            Todos={Todos}
            form={form}
          ></TodoForm>
          <TodoList
            Todos={Todos}
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
