import axios from 'axios';

const baseURL = 'http://192.168.1.100:57630/';
const api = 'api/checkinrequests';
const headerRequest = {
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
}
export default class checkInRequests {
  static getAllRequests = () => {
    return axios.get(`${baseURL}${api}`, {headers: headerRequest})
      .then((response) => {
        let allRequestsArray = response.data.map(element => {
          return {
            firstName: element.firstName,
            lastName: element.lastName,
            confirmationNumber: element.confirmationNumber
          }
        })
        return allRequestsArray;
      })
      .catch ((err) => console.log(err))
  }


  static addNewRequest = () => {
    return axios.put(`${baseURL}${api}`)
      .then(() => {
        
      })
      .catch(() => {

      })
  }
}