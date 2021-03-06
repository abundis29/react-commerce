import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.monsters.map((monster) => (
            <h4 key={monster.id} >{monster.name}</h4>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
