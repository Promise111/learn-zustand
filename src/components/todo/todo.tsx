import useTodoStore from "../../store/todoStore";
import type { Todo as TodoType } from "../../utils/types";
import { CiEdit, CiTrash, CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import style from "./todo.module.css";
import { useState } from "react";
const Todo = ({ todo, index }: TodoType) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const editTodo = useTodoStore((state) => state.editTodo);
  const isEditing = useTodoStore((state) => state.isEditing);
  const editing = useTodoStore((state) => state.editing);
  const [editTodoValue, setEditTodoValue] = useState(todo);

  return (
    <li className={style["todo-item"]}>
      {editing === null && (
        <>
          <p>{todo}</p>
          <span>
            <button onClick={() => isEditing(index)}>
              <CiEdit />
            </button>
            <button onClick={() => removeTodo(index)}>
              <CiTrash />
            </button>
          </span>
        </>
      )}
      {typeof editing === "number" && (
        <>
          <input
            id={style["editTodo"]}
            type="text"
            name="todo"
            value={editTodoValue}
            onChange={(e) => setEditTodoValue(e.target.value)}
          />
          <div className={style["button-wrapper"]}>
            <button onClick={() => isEditing(null)}>
              <CiCircleRemove />
            </button>
            <button onClick={() => editTodo(index, editTodoValue)}>
              <CiCircleCheck />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Todo;
