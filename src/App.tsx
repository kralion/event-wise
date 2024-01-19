import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ConfigProvider, theme, Button, Spin } from "antd";
import enEN from "antd/es/locale/en_US";
import "aos/dist/aos.css";
import AOS from "aos";
import logo from "./assets/logo.svg";

import { TodoProvider } from "./context/TodoContext";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
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
      locale={enEN}
    >
      <TodoProvider>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Spin size="large" />
          </div>
        ) : (
          <div className="App bg-neutral-100/50 p-12 space-y-8 items-center">
            <header
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="1000"
              className=" flex justify-between items-center "
            >
              <div className=" flex items-center gap-2 drop-shadow-md">
                <img src={logo} width={40} alt="Logo" />
                <p className="font-SecularOne text-zinc-600 font-semibold text-2xl">
                  Event
                  <span className="text-cyan-500">Wise</span>
                </p>
              </div>
              <div>
                <button onClick={handleThemeChange}>
                  {isDarkMode ? (
                    <img
                      className=""
                      src="https://cdn-icons-png.flaticon.com/128/702/702471.png"
                      width={25}
                      height={25}
                      alt="Dark Theme Icon"
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/606/606795.png"
                      width={25}
                      height={25}
                      alt="Light Theme Icon"
                    />
                  )}
                </button>
              </div>
            </header>

            <section
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              id="frames"
              className="flex gap-6 "
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
