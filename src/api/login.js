import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  console.log(data)
  return request({
    url: '/login',
    method: 'get',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/userInfo',
    method: 'get',
    params: { token }
  })
}

