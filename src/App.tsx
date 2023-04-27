import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ConfigProvider, theme, Button, Spin } from "antd";
import darkThemeIcon from "./assets/darkThemeIcon.png";
import lightThemeIcon from "./assets/lightThemeIcon.png";
import enEN from "antd/es/locale/en_US";
import "aos/dist/aos.css";
import AOS from "aos";
// import esES from "antd/es/locale/es_ES";
import logo from "./assets/logo.svg";

import { TodoProvider } from "./context/TodoContext";
import Login from "./Login";
function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	const [loading, setLoading] = useState(true);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
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
			locale={enEN}
		>
			<TodoProvider>
				{loading ? (
					<div className="flex justify-center items-center h-screen">
						<Spin size="large" />
					</div>
				) : (
					<div className="App bg-neutral-100/50 h-100% pb-14 flex flex-col justify-center items-center">
						{/* {isLogin ? "Hello" : <Login setIsLogin={setIsLogin} />} */}
						<header
							data-aos="fade-in"
							data-aos-delay="600"
							data-aos-duration="1000"
							className=" grid lg:grid-cols-7 grid-cols-3 gap-3 lg:gap-5 items-center mt-7 mb-10 mx-3 "
						>
							<div className=" flex items-center drop-shadow-md">
								<img src={logo} width={50} alt="Logo" />
								<p className="font-SecularOne pl-2  pt-1 text-zinc-600 font-semibold text-2xl">
									InTodo
								</p>
							</div>
							<div className="lg:col-end-11 col-end-5 lg:ml-5 flex justify-center items-center">
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
						</header>

						<section
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-duration="500"
							id="frames"
							className="App lg:flex-row flex lg:gap-3 gap-10 flex-col"
						>
							<TodoForm />
							<TodoList />
						</section>
					</div>
				)}
			</TodoProvider>
		</ConfigProvider>
	);
}

export default App;
