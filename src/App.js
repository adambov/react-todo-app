import { useState } from 'react';
import './App.css';
import Todoform from './components/Todoform';
import Tasklist from './components/Tasklist';
import Todoitem from './components/Taskitem';

function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (text) => {
      let id = 1;
      if (todos.length > 0) {
        id = todos[0].id + 1
      }

      let todo = {id: id, text: text, completed: false}
      let newTodos = [todo, ...todos]
      console.log(newTodos)
      setTodos(newTodos)
  }

  return (
    <div className="todo-app">
      <header><h1>Todo List</h1></header>
      <Todoform addTodo={addTodo}/>
      {todos.map((todo) => {
        return (
            <Todoitem todo={todo} key={todo.id}/>
        )
        
      })}
    </div>
  );
}

export default App;
