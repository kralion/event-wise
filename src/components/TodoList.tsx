import TodoCard from "./TodoCard";
import { useTodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";
import "animate.css";
import anyTaskIcon from "../assets/any-task-icon.png";

function TodoList() {
  const { todos } = useTodoContext();

  return (
    <section
      id="todos"
      className=" border-t bg-white/50 rounded-xl w-full p-8 shadow-2xl"
    >
      {todos.length === 0 ? (
        <div className="animate__animated animate__flipInX  flex flex-col h-full justify-center items-center  animate__delay-1s  py-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9841/9841553.png"
            width={80}
            alt="anytaskicon"
          />
          <div className="">
            <h1 className="text-xl font-semibold">You don't have any tasks</h1>
            <p className="text-sm text-gray-500">
              Fill the form on the left to add a new task
            </p>
          </div>
        </div>
      ) : (
        <div className=" grid lg:grid-cols-2 grid-col-1 gap-6 ">
          {todos.map((todo: Todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TodoList;
