import React from "react";
import {
  EditOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Popover, Tag, Space } from "antd";

const { Meta } = Card;
const deletePopover = <p>Eliminar To Do</p>;
const editPopover = <p>Editar To Do</p>;
const finishedPopover = <p>Dar por Terminado</p>;

function Todo({ todo, editTodo, deleteTodo, finishTodo }: any) {
  const { title, description, priority } = todo;
  return (
    <>
      <Card
        hoverable={true}
        className="cursor-default pt-3 drop-shadow-md font-Inter"
        // Para el cargado de los datos del todo
        // loading={true}
        size="small"
        style={{ width: 300 }}
        actions={[
          <Popover placement="bottom" content={deletePopover}>
            <DeleteOutlined onClick={deleteTodo} key="setting" />
          </Popover>,
          <Popover placement="bottom" content={editPopover}>
            <EditOutlined onClick={editTodo} key="edit" />,
          </Popover>,
          <Popover placement="bottom" content={finishedPopover}>
            <CheckCircleOutlined onClick={finishTodo} key="finished" />,
          </Popover>,
        ]}
      >
        <Meta className="text-left" title={title} description={description} />
        <Space size={[0, 8]} wrap>
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
        </Space>
      </Card>
    </>
  );
}

export default Todo;
