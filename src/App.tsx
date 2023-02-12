import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ConfigProvider, theme, Button } from "antd";
const darkThemeIcon = require("./assets/darkThemeIcon.png");
const lightThemeIcon = require("./assets/lightThemeIcon.png");
import esES from "antd/es/locale/es_ES";
import { nanoid } from "nanoid";

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

const initialTodos = [
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
function App() {
	const [todos, setTodos] = useState<TodoPROTOTYPE[]>(initialTodos);
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [dataToEdit, setDataToEdit] = useState<TodoPROTOTYPE | null>(null);

	const handleThemeChange = () => {
		setIsDarkMode((previousValue) => !previousValue);
	};

	const addTodo = (todo: TodoPROTOTYPE) => {
		todo.id = nanoid();
		setTodos([...todos, todo]);
	};

	const deleteTodo = (todoSelected: TodoPROTOTYPE) => {
		const newTodos = todos.filter((todo) => todo.id !== todoSelected.id);
		setTodos(newTodos);
	};

	const editTodo = (todoSelected: TodoPROTOTYPE) => {
		var newTodos = todos.filter((todo) => todo.id !== todoSelected.id);
		newTodos = [...newTodos, todoSelected];

		setTodos(newTodos);
	};

	const finishTodo = (todoSelected: TodoPROTOTYPE) => {
		const newTodos = todos.filter((todo) => todo.id !== todoSelected.id);
		setTodos(newTodos);
	};

	return (
		<ConfigProvider
			theme={{
				algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
			}}
			locale={esES}
		>
			<div className="App w-auto mx-7 mb-7">
				<div className="flex justify-center ">
					<div className=" flex justify-center my-12 gap-3">
						<svg
							fill="#000000"
							width="40px"
							height="40px"
							viewBox="0 0 14 14"
							role="img"
							focusable="false"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="#51B4A0"
								d="M1 6.85l1.92 1.92L5.8 5.89l-.66-.66-2.22 2.19-1.26-1.23zm0-3.9l1.92 1.92L5.8 1.99l-.66-.66-2.22 2.19-1.26-1.23zm0 7.8l1.92 1.92L5.8 9.79l-.66-.66-2.22 2.19-1.26-1.23z"
							/>
							<path d="M7 6.4h6v1.2H7zm0-3.9h6v1.2H7zm0 7.8h6v1.2H7z" />
						</svg>
						<p className="font-Inter pl-2 pt-1 font-bold text-2xl">Todo APP</p>
					</div>

					<Button
						className="mt-12 h-12 active:bg-zinc-900 left-[41%]"
						onClick={handleThemeChange}
					>
						{isDarkMode ? (
							<img className="" src={darkThemeIcon} alt="Dark Theme Icon" />
						) : (
							<img src={lightThemeIcon} alt="Light Theme Icon" />
						)}
					</Button>
				</div>

				<div className="App flex gap-5">
					<TodoForm
						addTodo={addTodo}
						dataToEdit={dataToEdit}
						setDataToEdit={setDataToEdit}
						editTodo={editTodo}
					/>
					<TodoList
						todos={todos}
						deleteTodo={deleteTodo}
						finishTodo={finishTodo}
						setDataToEdit={setDataToEdit}
					/>
				</div>
			</div>
		</ConfigProvider>
	);
}

export default App;
