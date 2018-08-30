import React, { Component } from 'react';
import './App.css';
import AddFlight from './addFlight.jsx';
import Schedule from './schedule.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <AddFlight />
        <Schedule />
      </div>
    );
  }
}

export default App;
