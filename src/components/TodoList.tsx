import TodoCard from "./TodoCard";
import { useTodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";

function TodoList() {
	const { todos } = useTodoContext();

	return (
		<section
			id="todos"
			className="w-auto mx-3  border-t rounded-xl px-5 py-12 shadow-2xl"
		>
			<div className=" grid lg:grid-cols-3  gap-10 mx-7">
				{todos.length === 0 ? (
					<div className="text-center">
						<h1 className="text-2xl font-semibold">No hay tareas</h1>
						<p className="text-gray-500">Agrega una tarea para comenzar</p>
					</div>
				) : (
					todos.map((todo: Todo) => <TodoCard key={todo.id} todo={todo} />)
				)}
			</div>
		</section>
	);
}

export default TodoList;
