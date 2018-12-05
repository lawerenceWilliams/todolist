import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent';
import Button from '@material-ui/core/Button';
import NavBarPlaying from './NavBarPlaying';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      input: '',
      items: []
    };
  }

  toggle = ()=>{
    this.setState({isOn: !this.state.isOn})
  }

  inputUpdate = event=>{
    this.setState({input: event.target.value})
  }

  formSubmit = event=>{
    event.preventDefault();
    this.setState({
      items : [...this.state.items, this.state.input], input : ''
    })
  }

  
  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputUpdate} />
          <Button variant="contained" color="primary" onClick={this.toggle}>Submit</Button>
          </form>
          <FirstComponent items={this.state.items} />

        </header>
      </div>
      
      <NavBarPlaying/>
      </div>
    );
  }
}

export default App;