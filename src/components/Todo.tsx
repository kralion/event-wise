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
import useTodo from "../hooks/useTodo";
import { TodoPROTOTYPE } from "../context/TodoContext";
import "animate.css";
import { useState, useEffect } from "react";

const { Meta } = Card;
const deletePopover = <p>Eliminar To Do</p>;
const editPopover = <p>Editar To Do</p>;
const finishedPopover = <p>Dar por Terminado</p>;

function Todo({ todo }: { todo: TodoPROTOTYPE }) {
	const { editTodo, handleDeleteTodo, handleFinishTodo } = useTodo();
	const { title, description, priority, duration, date, location } = todo;
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
		<>
			<Card
				onClick={showModal}
				hoverable={true}
				className=" pt-3 cursor-pointer drop-shadow-md font-Inter"
				size="small"
				style={{ width: 300 }}
				actions={[
					<Popover placement="bottom" content={deletePopover}>
						<DeleteOutlined
							className="active:opacity-50"
							onClick={() => handleDeleteTodo(todo)}
							key="setting"
						/>
					</Popover>,
					<Popover placement="bottom" content={editPopover}>
						<EditOutlined
							className="active:opacity-50"
							onClick={() => editTodo(todo)}
							key="edit"
						/>
					</Popover>,
					<Popover placement="bottom" content={finishedPopover}>
						<CheckCircleOutlined
							className="active:opacity-50"
							onClick={() => handleFinishTodo(todo)}
							key="finished"
						/>
					</Popover>,
				]}
			>
				<Modal
					title="Todo Details"
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleOk}
				>
					<p>{todo.title}</p>
					<p> {String(date)} </p>
					<p> {String(duration)} </p>
				</Modal>
				{loading ? (
					<Skeleton active>
						<Meta
							avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
							title="Card title"
							description="This is the description"
						/>
					</Skeleton>
				) : (
					<div className="animate__animated animate__flipInX">
						<Meta
							className="text-left cursor-pointer"
							title={title}
							description={description}
						/>
						<Space size={[0, 8]} wrap>
							<div className="flex gap-2">
								<div className="mt-4">
									<span className="mr-1 text-[13px] text-zinc-400 font-mono">
										Prioridad:
									</span>
								</div>

								<Tag
									className="mr-[220px] mt-4 w-12 text-center"
									color={
										priority === "baja"
											? "green"
											: priority === "alta"
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
		</>
	);
}

export default Todo;
