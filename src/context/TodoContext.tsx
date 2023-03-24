import { createContext, useContext, useState } from "react";
import { Todo, TodoContextProps } from "../interfaces/interfaces";
import { initialTodos } from "../data/initialTodos";
import { childrenProps } from "../types/types";
import { useReducer } from "react";
import { todoReducer } from "../context/todoReducer";

const INITIAL_STATE = {
	todos: initialTodos,
};

export const TodoContext = createContext<TodoContextProps>(
	{} as TodoContextProps,
);

export const TodoProvider = ({ children }: childrenProps) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
	const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

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

export const useTodoContext = () => useContext(TodoContext);
