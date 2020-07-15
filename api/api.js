import axios from '../config/axios'
function userinfo() {
  return axios({
    method: 'GET',
    url: '/account/user'
  })
}
export default {userinfo}
