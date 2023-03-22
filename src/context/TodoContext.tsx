import { createContext, useContext, useState } from "react";
import { TodoPROTOTYPE, TodoContextProps } from "../interfaces/interfaces";
import { initialTodos } from "../data/initialTodos";
import { childrenProps } from "../types/types";

export const TodoContext = createContext<TodoContextProps>({
	todos: initialTodos,
	setTodos: () => {},
	editMode: false,
	setEditMode: () => {},
	currentTodo: null,
	setCurrentTodo: () => {},
	editTodo: () => {},
});

export const TodoProvider = ({ children }: childrenProps) => {
	const [todos, setTodos] = useState<TodoPROTOTYPE[]>(initialTodos);
	const [editMode, setEditMode] = useState<boolean>(false);
	const [currentTodo, setCurrentTodo] = useState<TodoPROTOTYPE | null>(null);
	return (
		<TodoContext.Provider
			value={{
				todos,
				setTodos,
				editMode,
				setEditMode,
				currentTodo,
				setCurrentTodo,
				editTodo: (todoSelected: TodoPROTOTYPE) => {
					setCurrentTodo(todoSelected);
					setEditMode(true);
				},
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodoContext = () => useContext(TodoContext);
