import { createContext, useState , useEffect } from "react";
import React from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); //nombre del contexto

export function TaskContextProvider(props) {
  //componente que engloba a tods

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]); //... es copia todos los elementos del arreglo y luego de la coma el siguiente elemento
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
