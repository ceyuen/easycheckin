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

  addNewRequest = (firstName, lastName, confirmationNumber, email, phoneNumber) => {
    CheckInRequest.addNewRequest(firstName, lastName, confirmationNumber, email, phoneNumber)
      .then(() => {
        this.setState({addFlightError: false})
        this.getAllRequests()
      });
  }

  getAllRequests = () => {
    CheckInRequest.getAllRequests()
      .then(data => this.setState({allRequests: data}));
  }

  componentDidMount() {
    this.getAllRequests();
  }

  render() {
    return (
      <div>
        <AddFlight addFlightError={this.state.addFlightError} addNewRequest={this.addNewRequest}/>
        <Schedule allRequests={this.state.allRequests}/>
      </div>
    );
  }
}

export default App;
