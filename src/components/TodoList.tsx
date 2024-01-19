import TodoCard from "./TodoCard";
import { useTodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";
import "animate.css";
import { Space } from "antd";

function TodoList() {
  const { todos } = useTodoContext();

  return (
    <>
      {todos.length === 0 ? (
        <div className="animate__animated animate__flipInX flex flex-col justify-center items-center  animate__delay-1s w-full  py-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9841/9841553.png"
            width={80}
            alt="anytaskicon"
          />

          <h1 className="text-xl font-semibold">You don't have any tasks</h1>
          <p className="text-sm text-gray-500">
            Fill the form on the left to add a new task
          </p>
        </div>
      ) : (
        <div className="w-full h-full  grid lg:grid-cols-2 grid-col-1 gap-4 ">
          {todos.map((todo: Todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </>
  );
}

export default TodoList;
