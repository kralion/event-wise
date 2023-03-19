import {
	useTodoContext,
	TodoPROTOTYPE,
	initialTodos,
	State,
	Action,
} from "../context/TodoContext";
import { useReducer } from "react";

function useTodo() {
	const initialState = {
		todos: initialTodos,
		setTodos: () => {},
	};
	const todosReducer = (state: State, action: Action) => {
		switch (action.type) {
			case "ADD_TODO":
				return { ...state, todos: [...state.todos, action.payload] };
			case "DELETE_TODO":
				return {
					...state,
					todos: state.todos.filter((todo) => todo.id !== action.payload.id),
				};
			case "UPDATE_TODO":
				return {
					...state,
					todos: state.todos.map((todo) =>
						todo.id === action.payload.id ? action.payload : todo,
					),
				};
			case "FINISH_TODO":
				return {
					...state,
					todos: state.todos.map((todo) =>
						todo.id === action.payload.id ? action.payload : todo,
					),
				};

			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(todosReducer, initialState);

	const handleAddTodo = (newTodo: TodoPROTOTYPE) => {
		dispatch({ type: "ADD_TODO", payload: newTodo });
	};

	const handleDeleteTodo = (todo: TodoPROTOTYPE) => {
		dispatch({ type: "DELETE_TODO", payload: todo });
	};

	const handleFinishTodo = (todo: TodoPROTOTYPE) => {
		dispatch({ type: "FINISH_TODO", payload: todo });
	};
	const handleUpdateTodo = (updatedTodo: TodoPROTOTYPE) => {
		dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
	};
	const { setEditMode, setCurrentTodo, currentTodo } = useTodoContext();

	const editTodo = (todoSelected: TodoPROTOTYPE) => {
		setEditMode(true);
		setCurrentTodo(todoSelected);
	};

	return {
		editTodo,
		currentTodo,
		handleAddTodo,
		handleDeleteTodo,
		handleFinishTodo,
		handleUpdateTodo,
	};
}

export default useTodo;
