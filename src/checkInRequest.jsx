import axios from 'axios';

export default class CheckInRequest {
  hostName = 'http://192.168.1.100:57630/'

  addNewRequest = () => {
    axios.put(`${this.hostName}api/checkinrequests`)
      .then(() => {
        this.setState({addFlightError: true})
      })
      .catch(() => {

      })
  }
}