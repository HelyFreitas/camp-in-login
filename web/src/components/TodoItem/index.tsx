import { Trash } from "phosphor-react";
import "./todo-item.css";

export type TodoItemProps = {
  id: string;
  name: string;
  time: string;
  deleteTodo: (id: string) => void;
};

export function TodoItem({ id, name, time, deleteTodo }: TodoItemProps) {
  return (
    <div className="card">
      <section className="todo-section">
        <strong className="todo-strong">
          {name}
        </strong>
        <small className="todo-small">
          Adicionado ás: {time}
        </small>
      </section>

      <button className="todo-button-delete" onClick={() => deleteTodo(id)}>
        <Trash className="todo-icon-delete" size={30} color="#ffffff" />
      </button>
    </div>
  );
}
