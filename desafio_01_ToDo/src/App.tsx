import { useEffect, useState } from 'react';
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import './global.css'

const LOCAL_STORAGE_KEY = "todo:Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean
}

function App() {
 
  function setTasksAndSaveLocal(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  // Busca do localStorage
  function loadSaveTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSaveTasks()
  }, [])

  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "asdadsdas",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto blanditiis tempora voluptatem, vero labore, fugiat quam itaque temporibus, deleniti quod. Necessitatibus excepturi sequi, aut at soluta ad dolores distinctio.",
      isCompleted: false
    },
    {
      id: "zfxdsfdfs",
      title: "Lorem Two ipsum dolor sit amet consectetur adipisicing elit. Aut veniam doloribus tenetur modi laboriosam. At doloribus odit ex nisi, esse ipsam porro perferendis asperiores. Quia dolorum impedit reprehenderit voluptatum temporibus.",
      isCompleted: true  
    }
  ]);

  function onCreateTask(taskTitle: string) {
    setTasksAndSaveLocal([
        ...tasks, 
        {
          id: crypto.randomUUID(),
          title: taskTitle,
          isCompleted: false
        }
      ])
  }

  function onDeleteTask(taskId: string) {
    const ListaTasksAposDeletado = tasks.filter(task => {
      return task.id !== taskId
    });

    setTasksAndSaveLocal(ListaTasksAposDeletado); 
  }

  function toggleTaskCompletedById(taskId: string) {
    const checkTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSaveLocal(checkTasks);
  }

  return (
    <div>
      <Header onAddTask={onCreateTask} />
      <Tasks tasks={tasks} onDelete={onDeleteTask} onCompleted={toggleTaskCompletedById} />
    </div>
  )
}

export default App
