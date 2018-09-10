import axios from 'axios';

export default class CheckInRequest {
  addNewRequest = () => {
    axios.put('api/checkinrequests')
      .then(() => {
        this.setState({addFlightError: true})
      })
      .catch(() => {

      })
  }
}