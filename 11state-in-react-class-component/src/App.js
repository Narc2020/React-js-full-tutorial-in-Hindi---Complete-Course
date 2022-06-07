import React,{Component} from "react";
import "./App.css"
export default class App extends Component{
  constructor(){
    super()
    this.state={
      data:"Sachin"
    }
  }

   update() {
    this.setState({data:"No One"})
  }
  render(){
    return(
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={this.update}>update</button>
      </div>
         
    );
  }
}