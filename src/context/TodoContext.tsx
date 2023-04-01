import { createContext, useContext, useState, useEffect } from "react";
import { Todo, TodoContextProps } from "../interfaces/interfaces";
import { initialTodos } from "../data/initialTodos";
import { childrenProps } from "../types/types";
import { todoReducer } from "../reducers/todoReducer";
import { useReducer } from "react";
const INITIAL_STATE = {
	todos: initialTodos,
};

export const TodoContext = createContext<TodoContextProps>({
	todos: [],
	editMode: false,
	setEditMode: () => {},
	currentTodo: null,
	setCurrentTodo: () => {},
	handleAddTodo: () => {},
	handleDeleteTodo: () => {},
	handleFinishTodo: () => {},
	editTodo: () => {},
	handleUpdateTodo: () => {},
});

const localTodos = localStorage.getItem("todos");
if (localTodos) {
	INITIAL_STATE.todos = JSON.parse(localTodos);
}
export const TodoProvider = ({ children }: childrenProps) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
	const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todoState.todos));
	}, [todoState.todos]);

	const handleAddTodo = (newTodo: Todo) => {
		dispatch({ type: "ADD_TODO", payload: newTodo });
	};

	const handleDeleteTodo = (todo: Todo) => {
		dispatch({ type: "DELETE_TODO", payload: todo });
	};

	const handleFinishTodo = (todo: Todo) => {
		dispatch({ type: "FINISH_TODO", payload: todo });
	};
	const editTodo = (todoSelected: Todo) => {
		setCurrentTodo(todoSelected);
		setEditMode(true);
	};
	const handleUpdateTodo = (updatedTodo: Todo) => {
		dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
	};
	return (
		<TodoContext.Provider
			value={{
				todos: todoState.todos,
				editMode,
				setEditMode,
				currentTodo,
				setCurrentTodo,
				editTodo,
				handleAddTodo,
				handleDeleteTodo,
				handleFinishTodo,
				handleUpdateTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodoContext = () => {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error("useTodoContext must be used within a TodoProvider");
	}
	return context;
};
