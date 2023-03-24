import { nanoid } from "nanoid";
import { Todo } from "../interfaces/interfaces";
export const initialTodos: Todo[] = [
	{
		id: nanoid(),
		title: "Meet with John Doe",
		description:
			"Work with Jhon Doe, to discuss the new project details and features to be implemented",
		priority: "baja",
		date: "2021-15-01",
		duration: "10:00 - 11:00",
		category: "personal",
		isFinished: false,
		stakeholders: 3,
	},
	{
		id: nanoid(),
		title: "See the new movie",
		description:
			"Go to the cinema to see the new movie with my friends, we will have a great time",
		priority: "media",
		date: "2021-08-01",
		duration: "10:00 - 11:00",
		isFinished: false,
		category: "trabajo",
		stakeholders: 3,
	},
	{
		id: nanoid(),
		title: "Walk the dog",
		description:
			"Wake the dog, take him for a walk and feed him, he is hungry and needs to go to the bathroom",
		priority: "alta",
		date: "2021-08-01",
		duration: "10:00 - 11:00",
		isFinished: false,
		category: "otros",
		stakeholders: 3,
	},
	{
		id: nanoid(),
		title: "Meet with John Doe",
		description:
			"Work with Jhon Doe, to discuss the new project details and features to be implemented",
		priority: "alta",
		date: "2021-08-01",
		duration: "10:00 - 11:00",
		isFinished: false,
		category: "social",
		stakeholders: 3,
	},
];
