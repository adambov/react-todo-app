import { useState } from "react";

const Form = ({addTask}) => {

const [task, setTask] = useState('');

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask('')
    }

    return (
        <form className="todo"
        onSubmit={handleFormSubmit}>
            <div className="wrapper">
                <input type="text" 
                    id="taks"
                    className="input"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="enter a task"
                />
            </div>
            <button className="btn"
            aria-label="Add Task"
            type="submit">
            Add
            </button>
        </form>
    )
}

export default Form