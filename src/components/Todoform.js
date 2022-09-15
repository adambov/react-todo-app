import { useState } from "react";

const Todoform = (props) => {

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
            id="task"
            type="text" 
            placeholder="enter a todo"
            required
            autoFocus
            maxLength={50}
            />
            <button className="btn" 
            type="submit" 
            aria-label="add task"
            >+</button>
        </form>
    )
}
export default Todoform