const axios = require('axios')

const BASE_URL = 'http://localhost:4000'
// const BASE_URL = 'https://blog-server-a.herokuapp.com/api'

const ENDPOINTS = {
  REGISTER: '/user/',
  MESSAGE: '/message/',
  SET_INTERVAL: '/message/updateMessageInterval',
  START: '/message/start',
  STOP: '/message/stop',
  CONFIG: '/message/interval',
}

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    if (error.response) {
      // Request made and server responded
      console.log('Response error = ', error.response)
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
      return error.response
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Request error = ', error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Unknown Error', error.message)
    }

    return Promise.reject(error)
  },
)

export const register = async (data) => {
  const response = await client.post(ENDPOINTS.REGISTER, data)
  return response
}

export const createMessage = async (data) => {
  const response = await client.post(ENDPOINTS.MESSAGE, data)
  return response
}

export const setInterval = async (data) => {
  const response = await client.put(ENDPOINTS.SET_INTERVAL, data)
  return response
}

export const start = async () => {
  const response = await client.post(ENDPOINTS.START)
  return response
}
export const stop = async () => {
  const response = await client.post(ENDPOINTS.STOP)
  return response
}
export const getConfig = async () => {
  const response = await client.get(ENDPOINTS.CONFIG)
  return response
}
