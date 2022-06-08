import React,{Component} from "react";
import "./App.css"

export default class App extends Component{
  constructor(){
      super()
       this.state={
         data:"sachin"
       }
  }
   Update(){
      this.setState({data:"Vibha"})
   }
  render(){
    return(
      <div className="App">
      <h1>{this.state.data}</h1>
      <button onClick={()=>this.Update()}>update</button>
      </div>
    )
  }
}