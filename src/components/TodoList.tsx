import Todo from "./Todo";

function TodoList({ Todos, deleteTodo, editTodo, finishTodo }: any) {
  return (
    <div className="w-auto mx-3  border rounded-xl px-5 py-12">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-10 mx-7">
        {Todos.map((todo: any) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            finishTodo={finishTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
