import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ConfigProvider, theme, Button, Spin } from "antd";
import darkThemeIcon from "./assets/darkThemeIcon.png";
import lightThemeIcon from "./assets/lightThemeIcon.png";
import esES from "antd/es/locale/es_ES";
import logo from "/logo.svg";
import { TodoProvider } from "./context/TodoContext";
function App() {
	const [loading, setLoading] = useState(true);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const handleThemeChange = () => {
		setIsDarkMode((previousValue) => !previousValue);
	};

	setTimeout(() => {
		setLoading(false);
	}, 1000);

	return (
		<ConfigProvider
			theme={{
				algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
			}}
			locale={esES}
		>
			<TodoProvider>
				{loading ? (
					<div className="flex justify-center items-center h-screen">
						<Spin size="large" />
					</div>
				) : (
					<div className="App mb-28   flex flex-col justify-center items-center">
						<div className=" grid grid-cols-7 gap-3 items-center my-10 ">
							<div className=" flex justify-center">
								<img src={logo} alt="Logo" />
								<p className="font-Inter pl-2 pt-1 drop-shadow-lg font-bold text-2xl">
									Todo APP
								</p>
							</div>
							<div className="col-end-10 ml-5 flex justify-center items-center">
								<Button
									className="active:bg-zinc-900 rounded-full px-1 w-auto h-auto"
									onClick={handleThemeChange}
								>
									{isDarkMode ? (
										<img
											className=""
											src={darkThemeIcon}
											width={25}
											height={25}
											alt="Dark Theme Icon"
										/>
									) : (
										<img
											src={lightThemeIcon}
											width={25}
											height={25}
											alt="Light Theme Icon"
										/>
									)}
								</Button>
							</div>
						</div>

						<div className="App flex gap-5">
							<TodoForm />
							<TodoList />
						</div>
					</div>
				)}
			</TodoProvider>
		</ConfigProvider>
	);
}

export default App;
