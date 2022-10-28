import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "./home-styles.css";

import Logo from "../../assets/logo.png";
import Perfil from "../../assets/perfil.jpg";

import { TodoItem } from "../../components/TodoItem";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

import { Sidebar } from "../../components/Sidebar";

type Student = {
  id: string;
  name: string;
  time: string;
};

export function Home() {
  // State do Students
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
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);

    setStudentName("");
    toast.success("Tarefa adicionada com sucesso", {
      theme: "colored",
      autoClose: 1500,
    });
  }

  const deleteTodo = (id: string) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };

  // const editTodo = (id: string, editedText: string) => {
  //   const filterTodo = students.map((todo) => {
  //     return todo.id === id ? { ...todo, content: editedText } : todo;
  //   });
  //   setStudents(filterTodo);
  // };

  // SideBar
  const [sidebar, setSidebar] = useState<boolean>(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="container-todo">
      <header className="todo-header">
        <img className="home-logo" src={Logo} alt="" />
        <img className="home-perfil" src={Perfil} alt="" />
      </header>
      <div className="todo-nav">
        <FaBars className="button-open-side" size={25} onClick={showSidebar} />
        {sidebar && <Sidebar active={setSidebar} />}
        <p className="todo-tasks-adicionadas">
          Tarefas adicionadas: {students.length}
        </p>
        <p className="todo-tasks-concluidas">Tarefas concluídas:</p>
      </div>
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
            // editTodo={editTodo}
          />
        ))}
      </main>
      <Link className="home-exit" to="/">
        sair
      </Link>
    </div>
  );
}
