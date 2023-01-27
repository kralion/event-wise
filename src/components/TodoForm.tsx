import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

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
  Upload,
} from "antd";

const { TextArea } = Input;

function TodoForm({ addTodo }: any) {
  const onFormLayoutChange = () => {};

  return (
    <div className="w-1/2 mx-3 border rounded-xl px-5 pt-10 pb-5">
      <h1 className="text-xl font-semibold font-Roboto pb-5">CREAR TAREA</h1>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        style={{ maxWidth: 500 }}
      >
        <Form.Item name="title" label="Título">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Descripcion">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item name="priority" label="Importancia">
          <Select className="w-1/3">
            <Select.Option value="baja">Baja</Select.Option>
            <Select.Option value="media">Media</Select.Option>
            <Select.Option value="alta">Alta</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="date" label="Fecha">
          <DatePicker />
        </Form.Item>
        <Form.Item name="duration" label="Duración">
          <TimePicker.RangePicker
            use12Hours
            minuteStep={15}
            format={fomat}
            className="pl-10 w-56"
          />
        </Form.Item>
        <Form.Item name="location" label="Ubicación">
          <Cascader
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

        <Form.Item
          name="thumbnail"
          label="Identificador"
          valuePropName="fileList"
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 10 }} className="px-5">
                Cargar Imagen
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item className="flex justify-center">
          <Button
            htmlType="submit"
            onClick={addTodo}
            className="w-[450px] hover:bg-cyan-100 active:bg-cyan-200 active:scale-110"
          >
            Crear
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default TodoForm;
