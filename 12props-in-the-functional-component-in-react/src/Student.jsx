function Student(props){
    console.log(props)
    return(
      <div className="App">
          <h1>Student Component Name {props.data}</h1>
          <div className="email">{props.email}</div>
      </div>
    );
}

export default Student;