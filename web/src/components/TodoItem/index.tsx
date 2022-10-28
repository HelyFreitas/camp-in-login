import { Pencil, Trash } from "phosphor-react";
import { useState } from "react";
// import EditTodoDialog from "../EditTodoDialog";
import "./todo-item.css";

export type TodoItemProps = {
  id: string;
  name: string;
  deleteTodo: (id: string) => void;
  // editedText: (id: string) => void;
};

export function TodoItem({ id, name, deleteTodo }: TodoItemProps, editTodo: any) {
  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      {/* <EditTodoDialog editTodo={editTodo} open={openDialog} dialogHandler={dialogHandler} name={name} /> */}
      <div className="card">
        <section className="todo-section">
          <strong className="todo-strong">{name}</strong>
        </section>

        <section className="buttons-todo">
          <button className="todo-button-edit" onClick={() => setOpenDialog(true)}>
            <Pencil size={30} color="#ffffff" />
          </button>
          <button className="todo-button-delete" onClick={() => deleteTodo(id)}>
            <Trash className="todo-icon-delete" size={30} color="#ffffff" />
          </button>
        </section>
      </div>
    </>
  );
}
