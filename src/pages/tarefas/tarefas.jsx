// Importando Estilo
import "./tarefas.css";

// Componentes
import CreateTaskModal from "../../components/Tasks/createTaskModal";
import Layout from "../../components/layout";
import TaskCard from "../../components/Tasks/taskCard";

// Serviços e Funções
import React, { useEffect, useState } from "react";
import {
  AdicionarTarefa,
  AtualizarTarefa,
  BuscarTarefas,
  RemoverTarefa,
} from "../../services/tarefas";

// Assets
import adicionar from "../../assets/adicionar.png";
import ListaTarefas from "../../assets/listaTarefa.png";

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
      console.log(tasks);
    };
    listarTarefas();
  }, []);

  const addTask = (task) => {
    if (!task.nome || !task.descricao || !task.dataTermino) {
      let erro = document.getElementById("logAddTask")
      return erro.innerText = "Complete todos campos!!"
    }
    setTasks([...tasks, task]);
    AdicionarTarefa(task);
    setModalCreateTask(false);
  };

  const removeTask = (nome) => {
    // Atualizar estado local
    const tasksRemoved = tasks.filter((tarefa) => tarefa.nome !== nome);
    setTasks(tasksRemoved);
    RemoverTarefa(nome);
  };

  const updateTask = (nomeTarefa, novaTarefa) => {
    const tarefa = tasks.find((tarefa) => tarefa.nome === nomeTarefa);
    const tarefasRestantes = tasks.filter(
      (tarefa) => tarefa.nome !== nomeTarefa,
    );

    const tarefaAtualizadaComNovosValores = {
      ...tarefa,
      ...novaTarefa,
    };

    setTasks([...tarefasRestantes, tarefaAtualizadaComNovosValores]);
    AtualizarTarefa(novaTarefa, nomeTarefa);
  };

  return (
    <Layout>
      <main className="p-5 min-h-[90vh]">
        <div
          id="titulo"
          className="w-[83vw] flex mt-4 mb-10 m-auto items-center gap-2"
        >
          <img src={ListaTarefas} alt="Lista de Tarefas" className="w-[10vw] lg:w-[2vw]"/>
          <h1 className="h-max font-normal text-xl">TAREFAS</h1>
        </div>
        <div
          id="lista-tasksquare"
          className="m-auto w-[90%] flex gap-9 flex-wrap"
        >
          <div
            id="adicionar-tarefa"
            onClick={() => setModalCreateTask(!modalCreateTask)}
            className="lg:m-0 lg:mt-0 lg:mr-0 m-auto rounded-lg shadow-xl"
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
          {tasks ? (
            tasks.map((task, index) => (
              <TaskCard
                key={index}
                nome={task.nome}
                descricao={task.descricao}
                dataTermino={task.dataTermino}
                onRemove={removeTask}
                onUpdate={updateTask}
              />
            ))
          ) : (
            <>Carregando Tarefas</>
          )}
        </div>
        <CreateTaskModal
          modalIsOpen={modalCreateTask}
          closeModal={() => setModalCreateTask(!modalCreateTask)}
          addTask={addTask}
        />
      </main>
    </Layout>
  );
}

export default Tarefas;
