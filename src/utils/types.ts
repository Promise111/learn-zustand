export interface TodoStore {
  todos: string[];
  editing: null | number;
  typingTodoValue: string;
  isEditing: (index: number | null) => void;
  setTypingTodoValue: (todo: string) => void;
  addTodo: (todo: string) => void;
  removeTodo: (index: number) => void;
  editTodo: (index: number, newTodo: string) => void;
}

export interface Todo {
  todo: string;
  index: number;
}
