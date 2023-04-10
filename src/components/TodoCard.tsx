import {
	EditOutlined,
	CheckCircleOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import { Card, Popover, Tag, Space, Avatar, Skeleton, Modal } from "antd";
import { useTodoContext } from "../context/TodoContext";
import moment from "moment";
import "moment/locale/es";
import { Todo } from "../interfaces/interfaces";
import "animate.css";
import { useState, useEffect } from "react";

moment.locale("es");
const { Meta } = Card;
const deletePopover = <p>Delete</p>;
const editPopover = <p>Edit</p>;
const finishedPopover = <p>Finished</p>;
const formatedDate = (date: string) =>
	moment(date).format("dddd-DD   MMMM-YYYY").split("-").join("  -  ");
const formatedDuration = (duration: number) => {
	if (duration < 60) {
		return `${duration} minutes`;
	} else {
		return `${duration / 60} hours`;
	}
};

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

		console.log(duration);
	};

	return (
		<>
			<Card
				hoverable={true}
				className=" pt-3 cursor-pointer drop-shadow-md font-Inter"
				size="small"
				style={{ width: 300 }}
				actions={[
					<Popover placement="bottom" content={deletePopover}>
						<DeleteOutlined
							className="active:opacity-50"
							onClick={() => handleDeleteTodo(todo)}
							key="delete"
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
							key="finish"
						/>
					</Popover>,
				]}
			>
				<Modal
					title="TODO DETAILS"
					maskStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }}
					bodyStyle={{
						borderRadius: 5,
						padding: 5,
						border: "1px solid #e8e8e8",
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
								<span className="font-semibold font-Roboto px-5 ">
									Title :{" "}
								</span>
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
								{String(duration)}
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
					<Skeleton active>
						<Meta
							avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
							title="Card title"
							description="This is the description"
						/>
					</Skeleton>
				) : (
					<div className="animate__animated animate__flipInX">
						<button onClick={showModal}>
							<Meta
								className="text-left cursor-pointer"
								title={title}
								description={description}
							/>
						</button>

						<Space size={[0, 8]} wrap>
							<div className="flex gap-2">
								<div className="mt-4">
									<span className="mr-1 text-[13px] text-zinc-400 font-mono">
										Priority:
									</span>
								</div>

								<Tag
									className="mr-[220px] mt-4 w-12 text-center"
									color={
										priority === "low"
											? "green"
											: priority === "mid"
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

export default TodoCard;
