const Todoitem = (props) => {
    return (
        <div className="todo-row">
              {props.todo.text}  
        </div>
    )
}

export default Todoitem