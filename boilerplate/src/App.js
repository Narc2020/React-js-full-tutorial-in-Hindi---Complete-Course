import './App.css';
import React,{useEffect,useState} from 'react';


function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/8')
    .then((res)=>res.json())
    .then((data)=>{
      setUser(data.message);
      console.log(data.message)
    })
  }, [])
  return (
    <div className="App">
      {
        user.map((items)=>{
          return(
            <div className="innermain">
              <a>
              <img  src={items} width="100%" height={"250px"} />
              </a>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
