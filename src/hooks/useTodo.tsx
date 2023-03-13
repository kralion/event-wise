import { useTodoContext, TodoPROTOTYPE } from "../context/TodoContext";
import { nanoid } from "nanoid";

function useTodo() {
	const { todos, setTodos, setEditMode, setCurrentTodo, currentTodo } =
		useTodoContext();
	const addTodo = (todo: TodoPROTOTYPE) => {
		todo.id = nanoid();
		setTodos([...todos, todo]);
	};

	const editTodo = (todoSelected: TodoPROTOTYPE) => {
		setEditMode(true);
		setCurrentTodo(todoSelected);
	};

	const deleteTodo = (todoSelected: TodoPROTOTYPE) => {
		setTodos(todos.filter((todo) => todo.id !== todoSelected.id));
	};

	const updateTodo = (todoEdited: TodoPROTOTYPE) => {
		setTodos(
			todos.map(({ ...todo }) => (todo.id === todoEdited.id ? todo : todo)),
		);
		setEditMode(false);
	};

	const finishTodo = (todoSelected: TodoPROTOTYPE) => {
		setTodos(todos.filter((todo) => todo.id !== todoSelected.id));
	};

	return {
		addTodo,
		editTodo,
		deleteTodo,
		finishTodo,
		updateTodo,
		currentTodo,
	};
}

export default useTodo;
