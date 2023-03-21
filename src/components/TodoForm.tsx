import { TodoPROTOTYPE, useTodoContext } from "../context/TodoContext";
import useTodo from "../hooks/useTodo";
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
import { useEffect } from "react";
const timeFormat = "HH:mm";
const dateFormat = "YYYY-MM-DD";

function TodoForm() {
	const { handleAddTodo, handleUpdateTodo, currentTodo } = useTodo();
	const { editMode, setEditMode } = useTodoContext();
	const [form] = Form.useForm();

	const datePickerStyle = {
		backgroundColor: "blue",
	};
	useEffect(() => {
		if (currentTodo) {
			form.setFieldsValue({
				...currentTodo,
			});
		}
	}, [currentTodo, form]);

	const handleUndo = () => {
		if (currentTodo) {
			form.setFieldsValue({
				...currentTodo,
			});
		} else {
			form.resetFields();
			setEditMode(false);
		}
	};

	const handleValuesChange = (
		changedValues: TodoPROTOTYPE,
		allValues: TodoPROTOTYPE,
	) => {
		form.setFieldsValue({
			...allValues,
			...changedValues,
		});
	};

	const onFinish = (values: TodoPROTOTYPE) => {
		if (currentTodo) {
			handleAddTodo(values);
		} else {
			handleUpdateTodo(values);
			setEditMode(false);
		}
		form.resetFields();
		setEditMode(false);
	};

	return (
		<div>
			<div className="backdrop-blur bg-white/50 shadow-2xl w-auto mx-3 border-t rounded-xl px-10 pt-10 pb-5">
				<h1 className="text-xl font-SourceSansPro font-semibold pb-5">
					{editMode ? "Editar Tarea" : "Nueva Tarea"}
				</h1>
				<div>
					<Form
						labelCol={{ span: 7 }}
						wrapperCol={{ span: 24 }}
						layout="vertical"
						style={{ width: 400 }}
						onFinishFailed={(errorInfo) => {
							console.log("Error en el ingreso de Datos:", errorInfo);
						}}
						form={form}
						className="font-SourceSansPro"
						onFinish={onFinish}
						onValuesChange={(changedValues, allValues) =>
							handleValuesChange(changedValues, allValues)
						}
					>
						<Form.Item
							rules={[
								{
									required: true,
									message: "Por favor ingrese un titulo de la tarea",
									pattern: new RegExp(/^[a-zA-Z0-9 ]+$/),
								},
							]}
							name="title"
							label="Título"
						>
							<Input name="title" className="font-Inter rounded-xl" />
						</Form.Item>
						<Form.Item name="description" label="Descripcion">
							<Input.TextArea rows={4} className="font-Inter rounded-xl" />
						</Form.Item>
						<Form.Item name="priority" label="Importancia">
							<Select className="w-10 text-center font-Inter rounded-xl">
								<Select.Option value="baja" className="font-Inter">
									Baja
								</Select.Option>
								<Select.Option value="media" className="font-Inter">
									Media
								</Select.Option>
								<Select.Option value="alta" className="font-Inter">
									Alta
								</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item
							rules={[
								{
									required: true,
									message: "Por favor selecciona la fecha de la tarea",
								},
							]}
							name="date"
							label="Fecha"
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
									message: "Por favor selecciona una hora de inicio y fin",
								},
							]}
							name="duration"
							label="Duración"
						>
							<TimePicker.RangePicker
								use12Hours
								placeholder={["Inicio", "Fin"]}
								minuteStep={15}
								format={timeFormat}
								className="pl-10 w-56 font-Inter rounded-lg"
							/>
						</Form.Item>
						<Form.Item name="category" label="Categoría">
							<Cascader
								className="font-Inter"
								options={[
									{
										value: "personal",
										label: "Personal",
										children: [
											{
												value: "hábitos",
												label: "Hábitos",
											},
											{
												value: "estudio",
												label: "Estudio",
											},
											{
												value: "hobby",
												label: "Hobby",
											},
										],
									},
									{
										value: "trabajo",
										label: "Trabajo",
									},
									{
										value: "familiar",
										label: "Familiar",
									},
									{
										value: "salud",
										label: "Salud",
									},
									{
										value: "finanzas",
										label: "Finanzas",
									},
									{
										value: "social",
										label: "Social",
										children: [
											{
												value: "cumpleaños",
												label: "Cumpleaños",
											},
											{
												value: "reunion",
												label: "Reunion",
											},
											{
												value: "viaje",
												label: "Viaje",
											},
										],
									},
									{
										value: "otros",
										label: "Otros",
									},
								]}
							/>
						</Form.Item>
						<Form.Item name="stakeholders" label="Involucrados">
							<InputNumber min={1} max={10} className="pl-5 rounded-lg" />
						</Form.Item>
						<div className=" flex gap-24 mt-12 justify-center">
							<Form.Item>
								<Button
									htmlType="submit"
									className="font-Inter text-slate-900 hover:bg-cyan-100 hover:drop-shadow-xl hover:shadow-cyan-300 w-32 h-10 rounded-xl active:bg-cyan-200 active:scale-110"
								>
									{editMode ? "Guardar" : "Agregar"}
								</Button>
							</Form.Item>
							<Form.Item>
								<Button
									danger
									className="font-Inter active:scale-110 hover:bg-red-100  hover:drop-shadow-xl hover:shadow-red-300 w-32 h-10 rounded-xl active:bg-red-200"
									onClick={handleUndo}
								>
									{editMode ? "Cancelar" : "Limpiar"}
								</Button>
							</Form.Item>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default TodoForm;
