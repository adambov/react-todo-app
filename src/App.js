import { useEffect, useState } from 'react';
import './App.css';
import Todoform from './components/Todoform';
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

  useEffect (() => {
    fetch('http://localhost:3500/todos')
    .then(res => {
      return res.json()
    })
    .then((data) =>{
      setTodos(data);
    });
  }, []);

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed

      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="todo-app">
      <header><h1>Todo List</h1></header>
      <Todoform addTodo={addTodo}/>
      <hr className='separator'/>
      {todos.map((todo) => {
        return (
        <Todoitem removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}/>
        )
        
      })}
    </div>
  );
}

export default App;
