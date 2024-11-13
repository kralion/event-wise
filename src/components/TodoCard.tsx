import {
  EditOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  Card,
  Popover,
  Tag,
  Space,
  Avatar,
  Skeleton,
  Modal,
  Button,
} from "antd";
import { useTodoContext } from "../context/TodoContext";
import moment from "moment";
import "moment/locale/es";
import { Todo } from "../interfaces/interfaces";
import "animate.css";
import { useState, useEffect } from "react";

// ...

moment.locale("es");
const { Meta } = Card;
const deletePopover = <p>Delete</p>;
const editPopover = <p>Edit</p>;
const finishedPopover = <p>Finished</p>;
const formatedDate = (date: string) =>
  moment(date).format("dddd-DD   MMMM-YYYY").split("-").join("  -  ");

function TodoCard({ todo }: { todo: Todo }) {
  const { editTodo, handleDeleteTodo, handleFinishTodo } = useTodoContext();
  const { title, description, priority, duration, date, category } = todo;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <Card
      hoverable={true}
      className="p-3 lg:min-w-80 cursor-pointer rounded-xl font-Inter"
      size="small"
      actions={[
        <Popover placement="bottom" content={deletePopover}>
          <Button
            className="active:opacity-50"
            type="text"
            onClick={() => handleDeleteTodo(todo)}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              style={{
                animation:
                  "rotate-tr 1s cubic-bezier(1,-.28,.01,1.13) infinite alternate-reverse both",
                transformOrigin: "right center",
              }}
            >
              <style>
                {`
            @keyframes rotate-tr {
                0% { transform: rotate(0); }
                100% { transform: rotate(20deg); }
            }
              `}
              </style>
              <path
                className="fill-neutral-500"
                d="M16.773 10.083a.75.75 0 00-1.49-.166l1.49.166zm-1.535 7.027l.745.083-.745-.083zm-6.198 0l-.745.083.745-.083zm-.045-7.193a.75.75 0 00-1.49.166l1.49-.166zm5.249 7.333h-4.21v1.5h4.21v-1.5zm1.038-7.333l-.79 7.11 1.491.166.79-7.11-1.49-.166zm-5.497 7.11l-.79-7.11-1.49.166.79 7.11 1.49-.165zm.249.223a.25.25 0 01-.249-.222l-1.49.165a1.75 1.75 0 001.739 1.557v-1.5zm4.21 1.5c.892 0 1.64-.67 1.74-1.557l-1.492-.165a.25.25 0 01-.248.222v1.5z"
              />
              <path
                className="fill-sky-500"
                fill-rule="evenodd"
                d="M11 6a1 1 0 00-1 1v.25H7a.75.75 0 000 1.5h10a.75.75 0 000-1.5h-3V7a1 1 0 00-1-1h-2z"
                clip-rule="evenodd"
              />
            </svg>
          </Button>
        </Popover>,
        <Popover placement="bottom" content={editPopover}>
          <Button
            className="active:opacity-50"
            type="text"
            onClick={() => editTodo(todo)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <style>
                {" "}
                {`
     .rotate-right {
        animation: rotate-right 1s cubic-bezier(1, -0.01, 0.13, 1.15) infinite alternate-reverse both;
        transform-origin: top center;
      }

      @keyframes rotate-right {
        0% {
          transform: rotate(0);
        }

        25% {
          transform: rotate(10deg);
        }

        50 {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(-10deg);
        }
      }
          `}
              </style>
              <g className="rotate-right">
                <path
                  className="stroke-sky-500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.5 7.307h5"
                />
                <path
                  className="stroke-neutral-500"
                  strokeWidth="1.5"
                  d="M9 5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5v11.3a1.5 1.5 0 01-.54 1.152l-1.5 1.249a1.5 1.5 0 01-1.92 0l-1.5-1.249A1.5 1.5 0 019 16.8V5.5z"
                />
              </g>
            </svg>
          </Button>
        </Popover>,
        <Popover placement="bottom" content={finishedPopover}>
          <Button
            className="active:opacity-50"
            type="text"
            onClick={() => handleFinishTodo(todo)}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              style={{
                animation: "check 2s infinite cubic-bezier(.99,-.1,.01,1.02)",
                strokeDashoffset: 100,
                strokeDasharray: 100,
              }}
            >
              <style>
                {`
        @keyframes check {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}
              </style>
              <circle
                cx="12"
                cy="12"
                r="8"
                className="stroke-neutral-500"
                strokeWidth="1.5"
              />
              <path
                className="stroke-sky-500"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M9.215 12.052l1.822 1.805 3.748-3.714"
              />
            </svg>
          </Button>
        </Popover>,
      ]}
    >
      <Modal
        title="TODO DETAILS"
        styles={{
          mask: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          body: {
            borderRadius: 5,
            padding: 5,
            border: "1px solid #e8e8e8",
          },
        }}
        style={{ top: 80 }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div className="font-Source-Sans-Pro py-5 text-neutral-500 flex gap-3">
          <div className="mr-2">
            <p className="font-Source-Sans-Pro text-neutral-500 py-2">
              <span className="font-semibold font-Roboto px-5 ">Title : </span>
              {todo.title}
            </p>
            <p className="font-Source-Sans-Pro text-neutral-500 py-2">
              <span className="font-semibold font-Roboto px-5 ">
                Planned for :{" "}
              </span>
              {formatedDate(date)}
            </p>
            <p className="font-Source-Sans-Pro text-neutral-500 py-2">
              <span className="font-semibold font-Roboto px-5 ">
                Estimated duration :
              </span>

              {duration}
            </p>
            <p className="font-Source-Sans-Pro text-neutral-500 py-2">
              <span className="font-semibold font-Roboto px-5 ">
                Categorized as :
              </span>
              <Tag
                className="px-3 py-0.5 w-auto text-center"
                color={
                  category === "job"
                    ? "blue"
                    : category === "personal"
                    ? "green"
                    : category === "study"
                    ? "red"
                    : category === "other"
                    ? "gold"
                    : "purple"
                }
              >
                {category}
              </Tag>
            </p>
          </div>
        </div>
      </Modal>
      {loading ? (
        <Skeleton className="w-60" active>
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      ) : (
        <div className="animate__animated animate__flipInX flex flex-col gap-5">
          <button onClick={showModal}>
            <Meta
              className="text-left cursor-pointer"
              title={title}
              description={description}
            />
          </button>

          <Space size={[0, 8]} wrap>
            <div className="flex gap-2 items-center">
              <div className="mt-4">
                <span className="mr-1 text-zinc-400 uppercase font-bold font-Roboto tracking-wide text-[10px]">
                  Priority :
                </span>
              </div>

              <Tag
                className="mt-4 px-3 pb-0.5 w-auto text-center"
                color={
                  priority === "low"
                    ? "green"
                    : priority === "high"
                    ? "red"
                    : "gold"
                }
              >
                {priority}
              </Tag>
            </div>
          </Space>
        </div>
      )}
    </Card>
  );
}

export default TodoCard;
