import { useState } from 'react';
import './App.css';
import Form from './components/form';

function App() {
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    console.log(task)
  }

  return (
    <div className="container">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form addTask={addTask}/>
    </div>
  );
}

export default App;
