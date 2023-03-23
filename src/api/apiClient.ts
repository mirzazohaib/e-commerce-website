import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'development' ? 'http://localhost:5173' : '/',
  headers: {
    'Content-type': 'application/json'
  }
})

export default apiClient
