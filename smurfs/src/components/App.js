import React, { Component } from "react";
import "./App.css";
import SmurfsList from './SmurfsList';
import SmurfsForm from './SmurfsForm';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="Header">
          <img className='img' src='https://www.smurfbusiness.com/static/img/logos/logo-smurfs-en-3.svg' alt='Smurf Village' />
        </div>
        <div>
          <SmurfsForm />
        </div>

        <h3>Current Smurfs in the Village</h3>

        <div>
          <SmurfsList />
        </div>
      </div>
    )
  }
}

export default App;
