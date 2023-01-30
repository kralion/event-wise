import { useState } from "react";
import { nanoid } from "nanoid";
const fomat = "HH:mm";
import {
  Form,
  Input,
  Button,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TimePicker,
  message,
} from "antd";

function TodoForm({ addTodo, resetForm, form }: any) {
  const handleFormValuesChange = (changedValues: any, allValues: any) => {
    console.log("changedValues", changedValues);
    console.log("allValues", allValues);
    form.setFieldsValue({
      ...allValues,
    });
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
    addTodo({
      id: nanoid(),
      title: values.title,
      description: values.description,
      priority: values.priority,
      date: values.date,
      duration: values.duration,
      location: values.location,
      stakeholders: values.stakeholders,
    });
    resetForm();
  };

  return (
    <div>
      <div className="w-auto mx-3 border rounded-xl font-Inter px-10 pt-10 pb-5">
        <h1 className="text-xl font-semibold pb-5">CREAR TAREA</h1>
        <Form
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 24 }}
          layout="vertical"
          style={{ width: 400 }}
          onFinishFailed={(errorInfo) => {
            console.log("Error en el ingreso de Datos:", errorInfo);
          }}
          form={form}
          onValuesChange={handleFormValuesChange}
          onFinish={onFinish}
          autoComplete="on"
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
            <Input className="font-Inter rounded-full" />
          </Form.Item>
          <Form.Item name="description" label="Descripcion">
            <Input.TextArea rows={4} className="font-Inter" />
          </Form.Item>
          <Form.Item name="priority" label="Importancia">
            <Select className="w-10 text-center font-Inter">
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
              className=" font-Inter cursor-pointer w-52"
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
              format={fomat}
              className="pl-10 w-56 font-Inter"
            />
          </Form.Item>
          <Form.Item name="location" label="Ubicación">
            <Cascader
              className="font-Inter"
              options={[
                {
                  key: "001",
                  value: "lima",
                  label: "Lima",
                  children: [
                    {
                      key: "001-001",
                      value: "san borja",
                      label: "San Borja",
                    },
                    {
                      key: "001-002",
                      value: "san isidro",
                      label: "San Isidro",
                    },
                    {
                      key: "001-003",
                      value: "miraflores",
                      label: "Miraflores",
                    },
                    {
                      key: "001-004",
                      value: "san miguel",
                      label: "San Miguel",
                    },
                    {
                      key: "001-005",
                      value: "san juan de lurigancho",
                      label: "San Juan de Lurigancho",
                    },
                  ],
                },
                {
                  key: "002",
                  value: "arequipa",
                  label: "Arequipa",
                  children: [
                    {
                      key: "002-001",
                      value: "arequipa",
                      label: "Arequipa",
                    },
                    {
                      key: "002-002",
                      value: "camana",
                      label: "Camana",
                    },
                    {
                      key: "002-003",
                      value: "caylloma",
                      label: "Caylloma",
                    },
                    {
                      key: "002-004",
                      value: "caraveli",
                      label: "Caraveli",
                    },
                  ],
                },
                {
                  key: "003",
                  value: "junin",
                  label: "Junin",
                  children: [
                    {
                      key: "003-001",
                      value: "huancayo",
                      label: "Huancayo",
                    },
                    {
                      key: "003-002",
                      value: "chilca",
                      label: "Chilca",
                    },
                    {
                      key: "003-003",
                      value: "san carlos",
                      label: "San Carlos",
                    },
                    {
                      key: "003-004",
                      value: "el tambo",
                      label: "El Tambo",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item name="stakeholders" label="Involucrados">
            <InputNumber min={1} max={10} className="pl-5" />
          </Form.Item>
          <div className=" flex gap-24 mt-5 justify-center">
            <Form.Item>
              <Button
                htmlType="submit"
                className="font-Inter text-slate-900 hover:bg-cyan-100 w-24 active:bg-cyan-200 active:scale-110"
              >
                Crear
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                danger
                className="font-Inter active:scale-110 w-24 hover:bg-red-100 active:bg-red-200"
                onClick={resetForm}
              >
                Limpiar
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default TodoForm;
