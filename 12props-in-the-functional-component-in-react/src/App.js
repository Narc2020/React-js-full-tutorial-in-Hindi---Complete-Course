import './App.css';
import Student from './Student';
function App() {
  return (
    <div className="App">
      <Student data={"Sachin"} email={"sachin@gmail.com"}/>
      {/* <Student data={"Pitter"} email={"Pitter@gmail.com"}/>
      <Student data={"Prity"} email={"Prity@gmail.com"}/> */}
    </div>
  );
}

export default App;
