import { ITask } from "../../App";
import { Task } from "../Task";
import { Clipboard } from "@phosphor-icons/react";

import "./tasksStyle.scss";

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void,
    onCompleted: (taskId: string) => void,
}

export function Tasks({ tasks, onDelete, onCompleted }: Props) {

    const tasksQuantity = tasks.length;
    const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

    return (
        <section className="tasks">
            <header className="taskHeader">
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className="purple">Concluídas</p>
                    <span>{tasksCompleted} de {tasksQuantity}</span>
                </div>
            </header>

            <div className="listTaks">
                {tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        deleteTask={onDelete} 
                        completedTask={onCompleted}
                    />
                ))}

                {tasks.length <= 0 && (
                    <section className="notFoundTasks">
                        <Clipboard size={50} />
                        <p> <strong>Você ainda não tem tarefas cadastradas</strong></p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </section>
                )}
            </div>

        </section>
    )
} 