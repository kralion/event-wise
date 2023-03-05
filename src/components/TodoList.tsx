import { TodoPROTOTYPE } from "../App";
import Todo from "./Todo";

interface TodoListProps {
	todos: TodoPROTOTYPE[];
	deleteTodo: (todoSelected: TodoPROTOTYPE) => void;
	finishTodo: (todoSelected: TodoPROTOTYPE) => void;
	editTodo: (todo: TodoPROTOTYPE) => void;
}

function TodoList({ todos, deleteTodo, finishTodo, editTodo }: TodoListProps) {
	return (
		<div className="w-auto mx-3  border-t rounded-xl px-5 py-12 shadow-2xl">
			<div className=" grid lg:grid-cols-2  gap-10 mx-7">
				{todos.map((todo: TodoPROTOTYPE) => (
					<Todo
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						finishTodo={finishTodo}
						editTodo={editTodo}
					/>
				))}
			</div>
		</div>
	);
}

export default TodoList;
