import "./headerStyle.scss";
import todoLogo from "../../assets/todoLogo.svg";
import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({onAddTask}: Props) {

    const[title, setTitle] = useState("");

    // Cria a nova Task, mas depende do campo de title, por isso handleNewTask deve ser verificado antes
    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setTitle(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    return (
        <header className="header">
            <img src={todoLogo} alt="logo da ToDo" />

            <form className="newTask" onSubmit={handleCreateNewTask}>
                <input 
                    name='title'
                    type="text" 
                    placeholder="Adicione uma tarefa" 
                    value={title}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button>
                    Criar 
                    <PlusCircle  size={20} />
                </button>
            </form>
        </header>
    )
} 
