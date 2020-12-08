import { useState } from 'react';
import './App.css';
import { TodoContext } from './TodoContext';
import InputTask from './inputTask';
import List from './List';

const App = () => {
  const [ tasks, setTasks] = useState([]);

  return (
    <TodoContext.Provider value={{
      tasks,
      setTasks
    }}>
      <div className="App">
        <header className="App-header">
         <InputTask></InputTask>
         <List></List>
        </header>
      </div>
      </TodoContext.Provider>
  );
}

export default App;
