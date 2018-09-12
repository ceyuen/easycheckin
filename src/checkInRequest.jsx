import axios from 'axios';

const baseURL = 'http://192.168.1.100:57630/';
const api = 'api/checkinrequests'
export default class checkInRequests {
//Access-Control-Allow-Origin: true as header
  static getAllRequests = () => {
    console.log('link: ', baseURL)
    return axios.get(`${baseURL}${api}`)
      .then((response) => {
        let allRequestsArray = response.map((element) => {
          return {
            firstName: element.firstName,
            lastName: element.lastName,
            confirmationNumber: element.confirmationNumber
          }
        })
        return allRequestsArray;
      })
  }


  static addNewRequest = () => {
    return axios.put(`${baseURL}${api}`)
      .then(() => {
        
      })
      .catch(() => {

      })
  }
}