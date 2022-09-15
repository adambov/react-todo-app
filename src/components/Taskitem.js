import {RiCloseCircleLine} from "react-icons/ri"
import {BiCheckCircle} from "react-icons/bi"

const Todoitem = (props) => {
    return (
        <div className="todo-row">
              {props.todo.text}  
              <div className="iconsContainer">
                <RiCloseCircleLine className="del"
                onClick={props.removeTodo}/>
                <BiCheckCircle className="check"/>
              </div>
        </div>
    )
}

export default Todoitem