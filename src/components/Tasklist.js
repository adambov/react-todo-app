import Taskitem from './Taskitem';


const Tasklist = ({tasks}) => {
    return (
        <ul className="tasks">
            {tasks.map(task => (
                <Taskitem 
                    key={task.id}
                    task={task} 
                />
            ))
            }
        </ul>
    )
}



export default Tasklist

