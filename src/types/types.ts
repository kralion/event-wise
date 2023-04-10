import { Todo } from "@/interfaces/interfaces";
export type State = {
	todos: Todo[];
};

export type Action = {
	type: string;
	payload: Todo;
};
export type childrenProps = {
	children: React.ReactNode;
};
