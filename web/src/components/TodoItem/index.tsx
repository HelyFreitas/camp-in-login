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
      <strong>{name}</strong>
      <small>{time}</small>
      
      <button onClick={() => deleteTodo(id)}>
        <Trash size={30} color="#ffffff" />
      </button>
    </div>
  );
}
