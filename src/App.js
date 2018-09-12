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
      allRequests: null
    }
  }

  addNewRequest = () => {
    // CheckInRequest.addNewRequest(); 
  }

  getAllRequests = () => {
    CheckInRequest.getAllRequests()
      .then(data => this.setState({allRequests: data}))
  }

  componentDidMount() {
    this.getAllRequests();
  }

  render() {
    return (
      <div>
        <AddFlight addFlightError={this.state.addFlightError}/>
        <Schedule allRequests={this.state.allRequests}/>
      </div>
    );
  }
}

export default App;
