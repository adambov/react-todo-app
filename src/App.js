import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Tasklist from './components/Tasklist';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  return (
    <div className="container">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form addTask={addTask}/>
      {tasks && <Tasklist tasks={tasks}/>}
    </div>
  );
}

export default App;
