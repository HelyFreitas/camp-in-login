import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "./home-styles.css";

import Logo from "../../assets/logo.png";
import Perfil from "../../assets/perfil.jpg";

import { TodoItem } from "../../components/TodoItem";
import { Link } from "react-router-dom";

type Student = {
  id: string;
  name: string;
  time: string;
};

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<Student[]>([]);

  function handleAddStudent() {
    if (!studentName.trim()) {
      toast.error("Adicione alguma task", {
        theme: "colored",
        autoClose: 2000,
      });
      return;
    }

    const newStudent: Student = {
      id: uuidv4(),
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);

    setStudentName("");
    toast.success("Tarefa adicionada com sucesso", {
      theme: "colored",
      autoClose: 2000,
    });
  }

  const deleteTodo = (id: string) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };

  return (
    <div className="container-todo">
      <header className="todo-header">
        {/* <h1 className="todo-title">Lista de Presença</h1> */}
        <img className="home-logo" src={Logo} alt="" />
        <img className="home-perfil" src={Perfil} alt="" />
      </header>
      <main className="todo-main">
        <h1 className="todo-title2">Adicione sua tarefa</h1>
        <input
          className="todo-input"
          type="text"
          placeholder="Digite o nome da terefa"
          onChange={(e) => setStudentName(e.target.value)}
          value={studentName}
        />
        <button className="todo-btn" type="button" onClick={handleAddStudent}>
          Adicionar
        </button>
        <ToastContainer />

        {students.map((student) => (
          <TodoItem
            deleteTodo={deleteTodo}
            key={student.id}
            id={student.id}
            name={student.name}
            time={student.time}
          />
        ))}
      </main>
      <Link className="home-exit" to="/">sair</Link>
    </div>
  );
}

// import { useState } from "react";
// import { TodoItem, TodoProps } from "../../components/TodoItem";

// import "./home-styles.css";

// export const Home = () => {
//   const [task, setTask] = useState("");
//   // const [todoList, setTodoList] = useState([]);

//   function addTask() {}

//   return (
//     <div className="home-container">
//       <h1 className="home-title">Criar tarefas</h1>

//       <input
//         type="text"
//         placeholder="Digite uma tarefa"
//         className="home-input"
//         value={task}
//         onChange={(event) => setTask(event.target.value)}
//       />

//       <button type="submit" className="home-button" onClick={addTask}>
//         Adicionar
//       </button>

//     </div>
//   );
// };
