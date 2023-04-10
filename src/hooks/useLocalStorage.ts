import { useEffect } from "react";
import { Todo } from "@/interfaces/interfaces";
import { useReducer } from "react";

type hookProps = {
	key: string;
	reducer: (state: Todo[], action: { type: string; payload: Todo }) => Todo[];
	initialState: Todo[];
};
export function useLocalStorage({ key, initialState, reducer }: hookProps) {
	const [state, dispatch] = useReducer(reducer, initialState, () => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialState;
		} catch (error) {
			console.error(error);
			return initialState;
		}
	});

	useEffect(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(state));
		} catch (error) {
			console.error(error);
		}
	}, [key, state]);

	return [state, dispatch];
}
