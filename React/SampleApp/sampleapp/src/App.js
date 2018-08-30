import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from "./MultiListPage";

class App extends Component {
  state = {
    listItems : [{
      url:"",
      header: "Harsha",
      description: " Get in to this",
      family: [
          {
              url:"",
              header: "Jahnawii",
              description: " Getting in to this"
          },
          {
              url:"",
              header: "Anagha",
              description: " Getting in to this"
          },
          {
              url:"",
              header: "Anaaya",
              description: " Getting in to this"
          }
      ]
  },
  {
      url:"",
      header: "Jahnawii",
      description: " Get in to this"
  },
  {
      url:"",
      header: "Anagha",
      description: " Get in to this"
  },
  {
      url:"",
      header: "Anaaya",
      description: " Get in to this"
  }
  ]
  }
  


  clicked = () =>{

    setTimeout(() => {
      this.setState(prevState => ({
        listItems: prevState.listItems.push({
          url:"",
          header: "Anaaya",
          description: " Getting in to this",
          style: "margin:20px"
      })
    }))
    }, 5000);
    


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.clicked}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List sourceArray = {this.state.listItems}> </List>
      </div>
    );
  }
}

export default App;
