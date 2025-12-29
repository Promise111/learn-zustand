import useTodoStore from "../../store/todoStore";
import Todo from "../todo/todo";
import style from "./todoList.module.css";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const setTypingTodoValue = useTodoStore((state) => state.setTypingTodoValue);
  const typingTodoValue = useTodoStore((state) => state.typingTodoValue);

  return (
    <div className={style["todo-list-wrapper"]}>
      <div className={style["todo-list"]}>
        <h1>Todo List</h1>
        <input
          type="text"
          name="todo"
          value={typingTodoValue}
          id={style.todo}
          onChange={(e) => setTypingTodoValue(e.target.value)}
        />
        <button onClick={() => addTodo(typingTodoValue.trim())}>Add</button>
        {todos.length > 0 ? (
          <ol>
            {todos.map((todo, index) => (
              <Todo key={index} {...{ todo, index }} />
            ))}
          </ol>
        ) : (
          <div className={style["no-todos"]}>
            <p>No todos yet, start typing to add a one!</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default TodoList;
