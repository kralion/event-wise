import {
  EditOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Popover, Tag, Space } from "antd";

const { Meta } = Card;
const deletePopover = <p>Eliminar To Do</p>;
const editPopover = <p>Editar To Do</p>;
const finishedPopover = <p>Terminar To Do</p>;

function Todo({ todo, editTodo, deleteTodo, finishTodo }: any) {
  const { title, description, thumbnail } = todo;
  <>
    <Card
      hoverable={true}
      // Para el cargado de los datos del todo
      // loading={true}
      size="small"
      style={{ width: 300 }}
      cover={<img src={thumbnail} />}
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
      <Meta
        avatar={<Avatar className="bg-cyan-500" />}
        title={title}
        description={description}
      />
      <Space size={[0, 8]} wrap>
        <Tag
          color={
            todo.priority === "baja"
              ? "green"
              : todo.priority === "alta"
              ? "red"
              : "gold"
          }
        >
          {todo.priority}
        </Tag>
      </Space>
    </Card>
  </>;
}

export default Todo;
