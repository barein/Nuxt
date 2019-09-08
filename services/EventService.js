import axios from 'axios' // ?

const apiClient = axios.create({
  baseURL: `http://localhost:3030`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('http://localhost:3030/events')
  },
  getEvent(id) {
    return apiClient.get('http://localhost:3030/events/' + id)
  }
}
