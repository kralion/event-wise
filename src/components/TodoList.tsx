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
			className="w-auto border-t bg-white/50 rounded-xl px-5 py-7 shadow-2xl"
		>
			{todos.length === 0 ? (
				<div className="animate__animated animate__flipInX animate__delay-1s flex lg:flex-col py-3 lg:w-[644px] text-center">
					<div className="mt-48 flex flex-col gap-5 items-center">
						<img src={anyTaskIcon} width={80} alt="anytaskicon" />
						<div className="">
							<h1 className="text-xl font-semibold">
								You don't have any tasks
							</h1>
							<p className="text-sm text-gray-500">
								Fill the form on the left to add a new task
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className=" grid lg:grid-cols-2 grid-col-1 justify-center  gap-5 mx-3">
					{todos.map((todo: Todo) => (
						<TodoCard key={todo.id} todo={todo} />
					))}
				</div>
			)}
		</section>
	);
}

export default TodoList;
