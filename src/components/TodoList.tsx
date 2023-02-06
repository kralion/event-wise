import { TodoPROTOTYPE } from "../App";
import Todo from "./Todo";

interface TodoListProps {
	todos: TodoPROTOTYPE[];
	deleteTodo: (todoSelected: TodoPROTOTYPE) => void;
	editTodo: (todoSelected: TodoPROTOTYPE) => void;
	finishTodo: (todoSelected: TodoPROTOTYPE) => void;
}

function TodoList({ todos, deleteTodo, editTodo, finishTodo }: TodoListProps) {
	return (
		<div className="w-auto mx-3  border-t rounded-xl px-5 py-12 shadow-2xl">
			<div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-10 mx-7">
				{todos.map((todo: TodoPROTOTYPE) => (
					<Todo
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
						finishTodo={finishTodo}
					/>
				))}
			</div>
		</div>
	);
}

export default TodoList;
