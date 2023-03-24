import TodoCard from "./TodoCard";
import { useTodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";

function TodoList() {
	const { todos } = useTodoContext();

	return (
		<div className="w-auto mx-3  border-t rounded-xl px-5 py-12 shadow-2xl">
			<div className=" grid lg:grid-cols-2  gap-10 mx-7">
				{todos.map((todo: Todo) => (
					<TodoCard key={todo.id} todo={todo} />
				))}
			</div>
		</div>
	);
}

export default TodoList;
