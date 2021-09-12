import Request from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

const AdnyRequest = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: config => {
      const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE2MzEyNTc2MjcsImV4cCI6MTYzMzg0OTYyN30.m0P-eDDtR_uTQgEhyuKYnX-vbZmHOP3Qm9Or7N1zmNgqojWFp26bNfew3kXNkgt5mIToBpLaLzdthjrhCMglJSL4ghp0Hkoejmb9Rehv6DRxm4YB6LK3SSxbTBn5H3S8aQV0TOqJDUbATUxBwzNulM2i9hDk7F0Q9Jidz0baDnw'
      config.headers.Authorization = `Bearer ${token}`
      return config
    },
    requestInterceptorCatch: error => {
      return error
    },
    responseInterceptor: config => {
      return config.data
    },
    responseInterceptorCatch: error => {
      return error
    }
  }
})

export default AdnyRequest
