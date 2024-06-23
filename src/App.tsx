import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Spin, theme } from "antd";
import enEN from "antd/es/locale/en_US";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
          <div
            className={`App ${
              isDarkMode ? "dark:bg-black/90" : "bg-white/50"
            } lg:px-16 lg:py-8 p-4 space-y-8 overflow-hidden`}
          >
            <div
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="1000"
              className=" flex justify-between w-full items-center "
            >
              <div className=" flex items-center gap-2 drop-shadow-md text-2xl  lg:text-3xl">
                <img
                  src={logo}
                  className="w-8 h-8 lg:w-14 lg:h-14"
                  alt="Logo"
                />
                <h1
                  className={`font-SecularOne font-semibold ${
                    isDarkMode ? "dark:text-white" : ""
                  }`}
                >
                  Event
                  <span className="text-cyan-500">Wise</span>
                </h1>
              </div>

              <Button
                type="text"
                size="large"
                className="rounded-full "
                onClick={handleThemeChange}
              >
                {isDarkMode ? <MoonOutlined /> : <SunOutlined />}
              </Button>
            </div>

            <section
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              id="frames"
              className="flex flex-col lg:flex-row gap-8 h-[80dvh] lg:h-full  w-full "
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
