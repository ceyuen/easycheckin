import React, { Component } from 'react';
import './App.css';
import AddFlight from './addFlight.jsx';
import Schedule from './schedule.jsx';
import CheckInRequest from './checkInRequest.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      addFlightError: undefined,
    }
  }

  addNewRequest = () => {
    CheckInRequest.addNewRequest(); 
  }

  getAllRequests = () => {
    let allRequestsArray = CheckInRequest.getAllRequests();
    console.log(CheckInRequest);
  }

  render() {
    return (
      <div>
        <AddFlight addFlightError={this.state.addFlightError}/>
        <Schedule />
        {this.getAllRequests()}
      </div>
    );
  }
}

export default App;
