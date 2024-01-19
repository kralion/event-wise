export interface Todo {
  id: string;
  title: string;
  description: string;
  priority: string;
  date: string;
  duration: string;
  isFinished?: boolean;
  category: string;
  stakeholders: number;
}

export interface TodoContextProps {
  todos: Todo[];
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  currentTodo: Todo | null;
  setCurrentTodo: (todo: Todo) => void;
  editTodo: (todoSelected: Todo) => void;
  handleAddTodo: (todo: Todo) => void;
  handleDeleteTodo: (todo: Todo) => void;
  handleUpdateTodo: (todo: Todo) => void;
  handleFinishTodo: (todo: Todo) => void;
}
