import './App.css';
import AnimalShow from './AnimalShow';
import { useState } from 'react';


function App() {

  const [count,setCount] = useState(0)

  const handleClick= () => {
    setCount(count+1);
  };


  return (
    <div className="App">
     <button onClick={handleClick}> Add Animal</button>
    <div>
      Numbar of animal: {count}</div>
    
    </div>
  );
}

export default App;
