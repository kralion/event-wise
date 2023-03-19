import { createContext, useContext } from "react";

export interface TodoPROTOTYPE {
	id: string;
	title: string;
	description: string;
	priority: string;
	date: string;
	duration: string;
	isFinished: boolean;
	location: string;
	stakeholders: number;
}

export type Action = {
	type: string;
	payload: TodoPROTOTYPE;
};
export type State = {
	todos: TodoPROTOTYPE[];
	setTodos: React.Dispatch<React.SetStateAction<TodoPROTOTYPE[]>>;
};

export const initialTodos: TodoPROTOTYPE[] = [
	{
		id: "asdasd",
		title: "Meet with John Doe",
		description:
			"Work with Jhon Doe, to discuss the new project details and features to be implemented",
		priority: "baja",
		date: "2021-08-01",
		duration: "10:00 - 11:00",
		location: "Calle 1",
		isFinished: false,
		stakeholders: 3,
	},
	{
		id: "asdaasdasd",
		title: "Meet with John Doe",
		description:
			"Work with Jhon Doe, to discuss the new project details and features to be implemented",
		priority: "media",
		date: "2021-08-01",
		duration: "10:00 - 11:00",
		isFinished: false,
		location: "Calle 1",
		stakeholders: 3,
	},
	{
		id: "asdasasdasd",
		title: "Meet with John Doe",
		description:
			"Work with Jhon Doe, to discuss the new project details and features to be implemented",
		priority: "alta",
		date: "2021-08-01",
		duration: "10:00 - 11:00",
		isFinished: false,
		location: "Calle 1",
		stakeholders: 3,
	},
	{
		id: "asdaasssssd",
		title: "Meet with John Doe",
		description:
			"Work with Jhon Doe, to discuss the new project details and features to be implemented",
		priority: "alta",
		date: "2021-08-01",
		duration: "10:00 - 11:00",
		isFinished: false,
		location: "Calle 1",
		stakeholders: 3,
	},
];

export interface TodoContextProps {
	todos: TodoPROTOTYPE[];
	setTodos: (todos: TodoPROTOTYPE[]) => void;
	editMode: boolean;
	setEditMode: (editMode: boolean) => void;
	currentTodo: TodoPROTOTYPE | null;
	setCurrentTodo: (todo: TodoPROTOTYPE) => void;
	editTodo: (todoSelected: TodoPROTOTYPE) => void;
}

export const TodoContext = createContext<TodoContextProps>({
	todos: initialTodos,
	setTodos: () => {},
	editMode: false,
	setEditMode: () => {},
	currentTodo: null,
	setCurrentTodo: () => {},
	editTodo: () => {},
});

export const useTodoContext = () => useContext(TodoContext);
