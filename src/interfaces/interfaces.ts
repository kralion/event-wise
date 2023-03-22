export interface TodoPROTOTYPE {
	id: string;
	title: string;
	description: string;
	priority: string;
	date: string;
	duration: string;
	isFinished: boolean;
	category: string;
	stakeholders: number;
}

export interface TodoContextProps {
	todos: TodoPROTOTYPE[];
	setTodos: (todos: TodoPROTOTYPE[]) => void;
	editMode: boolean;
	setEditMode: (editMode: boolean) => void;
	currentTodo: TodoPROTOTYPE | null;
	setCurrentTodo: (todo: TodoPROTOTYPE) => void;
	editTodo: (todoSelected: TodoPROTOTYPE) => void;
}
