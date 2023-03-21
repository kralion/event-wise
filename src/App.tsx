import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ConfigProvider, theme, Button, Spin } from "antd";
import darkThemeIcon from "./assets/darkThemeIcon.png";
import lightThemeIcon from "./assets/lightThemeIcon.png";
import esES from "antd/es/locale/es_ES";
function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const handleThemeChange = () => {
		setIsDarkMode((previousValue) => !previousValue);
	};
	const [loading, setLoading] = useState(true);

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
			{loading ? (
				<div className="flex justify-center items-center h-screen">
					<Spin size="large" />
				</div>
			) : (
				<div className="App w-auto mx-7 mb-36">
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
									fill="#23BDF2"
									d="M1 6.85l1.92 1.92L5.8 5.89l-.66-.66-2.22 2.19-1.26-1.23zm0-3.9l1.92 1.92L5.8 1.99l-.66-.66-2.22 2.19-1.26-1.23zm0 7.8l1.92 1.92L5.8 9.79l-.66-.66-2.22 2.19-1.26-1.23z"
								/>
								<path d="M7 6.4h6v1.2H7zm0-3.9h6v1.2H7zm0 7.8h6v1.2H7z" />
							</svg>
							<p className="font-Inter pl-2 pt-1 font-bold text-2xl">
								Todo APP
							</p>
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
						<TodoForm />
						<TodoList />
					</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
					<div className="bubble">{""}</div>
				</div>
			)}
		</ConfigProvider>
	);
}

export default App;
