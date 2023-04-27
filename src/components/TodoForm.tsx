import { useTodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";
import {
	Form,
	Input,
	Button,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TimePicker,
} from "antd";
import { useEffect, useRef } from "react";
import type { InputRef } from "antd";
import { categories } from "../data/categories";
const timeFormat = "HH:mm";
const dateFormat = "YYYY-MM-DD";

function TodoForm() {
	const {
		editMode,
		setEditMode,
		currentTodo,
		handleAddTodo,
		handleUpdateTodo,
	} = useTodoContext();

	const [form] = Form.useForm();
	const inputRef = useRef<InputRef>(null);

	useEffect(() => {
		if (currentTodo) {
			form.setFieldsValue({
				...currentTodo,
			});
		} else form.resetFields();
	}, [currentTodo]);

	const handleUndo = () => {
		if (currentTodo) {
			setEditMode(false);
		} else {
			form.resetFields();
		}
	};

	const handleValuesChange = (changedValues: Todo, allValues: Todo) => {
		form.setFieldsValue({
			...allValues,
			...changedValues,
		});
	};

	const onFinish = (values: Todo) => {
		if (currentTodo) {
			handleUpdateTodo(values);
			setEditMode(false);
		} else {
			handleAddTodo(values);
		}
		form.resetFields();
		inputRef.current?.focus();
	};

	return (
		<section
			className="backdrop-blur  bg-white/50 shadow-2xl w-auto mx-3 border-t rounded-xl   pb-5"
			id="todo-form"
		>
			<h1 className="lg:text-xl rounded-t-xl text-center py-2.5 bg-gray-100/80 text-md font-SourceSansPro font-semibold ">
				{editMode ? "Edit Task" : "New Task"}
			</h1>
			<div className="px-10 pt-10">
				<Form
					labelCol={{ span: 7 }}
					wrapperCol={{ span: 24 }}
					layout="horizontal"
					style={{ width: 400 }}
					onFinishFailed={(errorInfo: Error) => {
						console.error("Fill out form Error :", errorInfo);
					}}
					form={form}
					className="font-SourceSansPro"
					onFinish={onFinish}
					onValuesChange={handleValuesChange}
				>
					<Form.Item
						rules={[
							{
								required: true,
								message: "Input your title!",
								pattern: new RegExp(/^[a-zA-Z0-9 ]+$/),
							},
						]}
						name="title"
						label="Title"
					>
						<Input
							name="title"
							ref={inputRef}
							className="font-Inter rounded-xl"
						/>
					</Form.Item>
					<Form.Item name="description" label="Description">
						<Input.TextArea rows={4} className="font-Inter rounded-xl" />
					</Form.Item>
					<Form.Item name="priority" label="Priority">
						<Select className="w-10 text-center font-Inter rounded-xl">
							<Select.Option value="low" className="font-Inter">
								Low
							</Select.Option>
							<Select.Option value="mid" className="font-Inter">
								Mid
							</Select.Option>
							<Select.Option value="high" className="font-Inter">
								High
							</Select.Option>
						</Select>
					</Form.Item>
					<Form.Item
						rules={[
							{
								required: true,
								message: "Select a date!",
							},
						]}
						name="date"
						label="Date"
					>
						<DatePicker
							placeholder=""
							className=" font-Inter cursor-pointer w-52 rounded-lg"
							format={dateFormat}
						/>
					</Form.Item>
					<Form.Item
						rules={[
							{
								required: true,
								message: "Please select an interval of time!",
							},
						]}
						name="duration"
						label="Duration"
					>
						<TimePicker.RangePicker
							use12Hours
							placeholder={["Start", "End"]}
							minuteStep={15}
							format={timeFormat}
							separator=" - "
							allowClear={true}
							className="pl-10 w-56 font-Inter rounded-lg"
						/>
					</Form.Item>
					<Form.Item name="category" label="Category">
						<Cascader className="font-Inter" options={categories} />
					</Form.Item>
					<Form.Item name="stakeholders" label="Stakeholders">
						<InputNumber min={1} max={10} className="pl-5 rounded-lg" />
					</Form.Item>
					<div className=" flex gap-24 mt-12 justify-center">
						<Form.Item>
							<Button
								htmlType="submit"
								className="font-Inter text-slate-900 hover:bg-cyan-100 hover:drop-shadow-xl hover:shadow-cyan-300 w-32 h-10 rounded-xl active:bg-cyan-200 active:scale-110"
							>
								{editMode ? "Save" : "Add"}
							</Button>
						</Form.Item>
						<Form.Item>
							<Button
								danger
								className="font-Inter active:scale-110 hover:bg-red-100  hover:drop-shadow-xl hover:shadow-red-300 w-32 h-10 rounded-xl active:bg-red-200"
								onClick={handleUndo}
							>
								{editMode ? "Cancel" : "Clean"}
							</Button>
						</Form.Item>
					</div>
				</Form>
			</div>
		</section>
	);
}

export default TodoForm;
