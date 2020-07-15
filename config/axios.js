import axios from 'axios'
const instance = axios.create({
  // basic url
  baseURL: 'http://127.0.0.1:8081/demoapp_war_exploded/api',
  // 超时时间
  timeout: 3000,
  withCredentials: true
})
export default instance
