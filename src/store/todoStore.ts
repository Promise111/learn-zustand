import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TodoStore } from "../utils/types";

const useTodoStore = create<TodoStore>()(
  persist(
    (set) => {
      return {
        todos: [],
        typingTodoValue: "",
        editing: null,
        setTypingTodoValue: (todo: string) => {
          return set(() => ({ typingTodoValue: todo }));
        },
        addTodo: (todo) => {
          if (todo)
            return set((state) => ({
              todos: [...state.todos, todo],
              typingTodoValue: "",
            }));
        },
        removeTodo: (index) => {
          return set((state) => {
            return {
              todos: state.todos.slice().filter((todo, i) => i !== index),
            };
          });
        },
        editTodo: (index, newTodo) => {
          return set((state) => {
            return {
              todos: state.todos.slice().map((item, i) => {
                if (i === index) {
                  return newTodo;
                }
                return item;
              }),
              editing: null,
              typingTodoValue: "",
            };
          });
        },
        isEditing: (index) => {
          if (index === null)
            return set(() => ({ editing: index, typingTodoValue: "" }));
          return set(() => ({ editing: index }));
        },
      };
    },
    { name: "todo-storage", partialize: (state) => ({ todos: state.todos }) }
  )
);

export default useTodoStore;
