import Todo from "./Todo";

function TodoList({ initialTodos, deleteTodo, editTodo, finishTodo }: any) {
  return (
    <div className="w-autp mx-3 border rounded-xl px-5 pt-10 pb-5">
      <h1 className="text-xl font-semibold font-Roboto pb-5">
        TU PANEL DE TAREAS
      </h1>
      <div className="flex gap-10">
        {initialTodos.map((todo: any) => (
          <Todo
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
