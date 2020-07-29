import {request, requestToken} from 'network/request.js'

//提交注册信息
export function handleRegister ({nickname , username , password}) {
  return request ({
    method: 'post',
    url: '/users/register',
    data: {
      nickname,
      username,
      password
    }
  })
}

export function handleLogin ({username, password}) {
  
  return request ({
    method: 'post',
    url: '/users/login',
    data: {
      username,
      password
    }
  })
}

export function checkToken () {
  return requestToken ({
    method: 'post',
    url: '/users/token',
  })
}