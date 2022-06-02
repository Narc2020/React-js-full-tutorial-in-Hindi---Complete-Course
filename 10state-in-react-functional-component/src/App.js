import {useState} from 'react';
import './App.css';

function App() {
  const [vari, setvari] = useState("Sachin");
  function update(){
    setvari("Raj")
  }
  return (
    <div className="App">
      hh
      <h1>{vari}</h1>
      <button onClick={()=>update()}>Update</button>
    </div>
  );
}

export default App;
