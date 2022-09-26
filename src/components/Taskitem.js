import {RiCloseCircleLine} from "react-icons/ri"
import {BiCheckCircle} from "react-icons/bi"
import React from "react"

const Todoitem = (props) => {
    const {todo, removeTodo, completeTodo} = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
              {props.todo.text}  
              <div className="iconsContainer">
                <RiCloseCircleLine className="del"
                onClick={ () => removeTodo(todo.id)}/>
                <BiCheckCircle className="check"
                onClick={() => completeTodo(todo.id)}
                />
              </div>
        </div>
    )
}

export default Todoitem