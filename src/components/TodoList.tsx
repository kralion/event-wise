import { TodoPROTOTYPE } from "../App";
import Todo from "./Todo";

interface TodoListProps {
	todos: TodoPROTOTYPE[];
	deleteTodo: (todoSelected: TodoPROTOTYPE) => void;
	finishTodo: (todoSelected: TodoPROTOTYPE) => void;
	setDataToEdit: (todoSelected: TodoPROTOTYPE | null) => void;
}

function TodoList({
	todos,
	deleteTodo,
	finishTodo,
	setDataToEdit,
}: TodoListProps) {
	return (
		<div className="w-auto mx-3  border-t rounded-xl px-5 py-12 shadow-2xl">
			<div className=" grid lg:grid-cols-2  gap-10 mx-7">
				{todos.map((todo: TodoPROTOTYPE) => (
					<Todo
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						finishTodo={finishTodo}
						setDataToEdit={setDataToEdit}
					/>
				))}
			</div>
		</div>
	);
}

export default TodoList;
