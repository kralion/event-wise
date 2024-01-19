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
  Space,
} from "antd";
import { useEffect, useRef, useState } from "react";
import type { InputRef } from "antd";
import { categories } from "../data/categories";
import moment from "moment";
const timeFormat = "HH:mm";
const dateFormat = "YYYY-MM-DD";
interface TimeValues {
  startTime: string;
  endTime: string;
}

interface MyFormState {
  differenceInMilliseconds?: number;
  formattedDifference?: string;
}
function TodoForm() {
  const {
    editMode,
    setEditMode,
    currentTodo,
    handleAddTodo,
    handleUpdateTodo,
  } = useTodoContext();
  const [timeStampDifference, setTimeStampDifference] = useState<MyFormState>(
    {}
  );

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
  const handleTimeChange = (values: [moment.Moment, moment.Moment]) => {
    if (values[0] && values[1]) {
      const startDate = values[0];
      const endDate = values[1];

      const differenceInMilliseconds = endDate.diff(startDate);
      const duration = moment.duration(differenceInMilliseconds);

      let formattedDifference;
      if (duration.asHours() >= 1) {
        formattedDifference = `${Math.round(duration.asHours())} hora(s)`;
      } else {
        formattedDifference = `${Math.round(duration.asMinutes())} minuto(s)`;
      }
      setTimeStampDifference({
        differenceInMilliseconds,
        formattedDifference,
      });
    }
  };
  const onFinish = (values: Todo) => {
    if (currentTodo) {
      handleUpdateTodo(values);
      setEditMode(false);
    } else {
      handleAddTodo({
        ...values,
        ...timeStampDifference,
      });
    }
    form.resetFields();
    inputRef.current?.focus();
  };

  return (
    <section
      className="backdrop-blur h-fit shadow-2xl  border-t rounded-xl"
      id="todo-form"
    >
      <h1 className="lg:text-xl rounded-t-xl text-center p-2 bg-gray-100/80 text-md font-SourceSansPro font-semibold ">
        {editMode ? "Edit Task" : "New Task"}
      </h1>
      <Space className="p-8 ">
        <Form
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 24 }}
          layout="horizontal"
          style={{ width: 400 }}
          onFinishFailed={(errorInfo: any) => {
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
              className="font-Inter  rounded-xl"
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
              onChange={(values: any) => handleTimeChange(values)}
              className="pl-10 w-56 font-Inter rounded-lg"
            />
          </Form.Item>
          <Form.Item name="category" label="Category">
            <Cascader className="font-Inter" options={categories} />
          </Form.Item>
          <Form.Item name="stakeholders" label="Involved">
            <InputNumber min={1} max={10} className="pl-5 rounded-lg" />
          </Form.Item>
          <div className=" flex gap-24 mt-16 justify-center">
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className="font-Inter hover:drop-shadow-xl  w-32 h-10 rounded-xl  active:scale-110"
              >
                {editMode ? "Save" : "Add"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                danger
                className="font-Inter active:scale-110  hover:drop-shadow-xl hover:shadow-red-300 w-32 h-10 rounded-xl "
                onClick={handleUndo}
              >
                {editMode ? "Cancel" : "Clean"}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Space>
    </section>
  );
}

export default TodoForm;
