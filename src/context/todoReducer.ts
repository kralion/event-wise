import { Action, State } from "@/types/types";

export const todoReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				...state,
				todos: [...state.todos, { ...action.payload }],
			};
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
				todos: state.todos.filter((todo) => todo.id !== action.payload.id),
				// finishedTodos: [...state.finishedTodos, action.payload],
			};

		default:
			return state;
	}
};
