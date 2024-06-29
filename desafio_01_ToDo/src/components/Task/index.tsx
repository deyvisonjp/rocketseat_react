import { ITask } from "../../App";
import "./taskStyle.scss";
import { Trash, CheckCircle } from "@phosphor-icons/react";

interface Props {
    task: ITask,
    deleteTask: (taskId: string) => void;
    completedTask: (taskId: string) => void;
}

export function Task({ task, deleteTask, completedTask }: Props) {

    function handleDeleteTask() {
        deleteTask(task.id);
    }

    return (
        <div className="task">
            <button 
                className="checkContainer" 
                onClick={() => completedTask(task.id)}
            >
                {task.isCompleted ? <CheckCircle /> : <div />}
            </button>

            <p className={task.isCompleted ? "textCompleted" : ""}>
                {task.title}
            </p>

            <button className="deleteButton" onClick={handleDeleteTask}>
                <Trash />
            </button>
        </div>
    )
} 