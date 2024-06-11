// Importando Estilo
import "./tarefas.css";

// Componentes
import CreateTaskModal from "../../components/Tasks/createTaskModal";
import Layout from "../../components/layout";
import TaskCard from "../../components/Tasks/taskCard";

// Serviços e Funções
import React, { useEffect, useState } from "react";
import { BuscarTarefas } from "../../services/tarefas";

// Assets
import adicionar from "../../assets/adicionar.png";
import { BsListTask } from "react-icons/bs";
import axios from "axios";

function Tarefas() {
  // Manipulação de Tarefas
  const [tasks, setTasks] = useState([]);

  // Manipulação de Modal
  const [modalCreateTask, setModalCreateTask] = useState();

  // Efeito para buscar Tarefas
  useEffect(() => {
    const listarTarefas = async () => {
      const tarefas = await BuscarTarefas();
      setTasks(tarefas);
    };
    listarTarefas();
  }, []);

  return (
    <Layout>
      <main className="p-5">
        <div
          id="titulo"
          className="w-[83vw] flex mt-4 mb-10 m-auto align-center"
        >
          <BsListTask className="mt-auto mb-auto mr-5" />
          <h1 className="h-max font-normal text-xl">TAREFAS</h1>
        </div>
        <div
          id="lista-tasksquare"
          className="m-auto w-[90%] flex gap-9 flex-wrap"
        >
          <div
            id="adicionar-tarefa"
            onClick={() => setModalCreateTask(!modalCreateTask)}
            className="m-0 mt-0 mr-0 rounded-lg shadow-xl"
          >
            <div id="titulo-adicionar">
              <h3 className="m-auto p-2 text-center">Adicionar Tarefa</h3>
            </div>
            <img
              src={adicionar}
              alt="adicionar tarefa"
              className="m-auto mt-10"
            ></img>
          </div>
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              nome={task.nome}
              descricao={task.descricao}
              dataTermino={task.dataTermino}
            />
          ))}
        </div>
        <CreateTaskModal
          modalIsOpen={modalCreateTask}
          closeModal={() => setModalCreateTask(!modalCreateTask)}
        />
      </main>
    </Layout>
  );
}

export default Tarefas;