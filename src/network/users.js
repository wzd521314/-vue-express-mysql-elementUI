import {request} from 'network/request.js'

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