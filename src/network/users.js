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


//提交登录信息
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


//路由守卫，每次切换路由时都会进行Token的校验
export function checkToken () {
  return requestToken ({
    method: 'post',
    url: '/users/token',
  })
}



//提交一级评论信息
export function submitComment (commentData) {
  return requestToken ({
    method: 'post',
    url: '/users/submitComment',
    data: {
      commentData
    }
  })
}

//提交一级留言信息
export function submitMessage (commentData) {
  return requestToken ({
    method: 'post',
    url: '/users/submitMessage',
    data: {
      commentData
    }
  })
}


//提交回复信息
export function submitReply (replyData) {
  return requestToken ({
    method: 'post',
    url: '/users/submitReply',
    data: {
      replyData
    }
  })
}
//提交留言回复信息
export function submitMessageReply (replyData) {
  return requestToken ({
    method: 'post',
    url: '/users/submitMessageReply',
    data: {
      replyData
    }
  })
}


//获取评论信息
export function getComment (articleId) {
  return request ({
    method: 'post',
    url: '/users/getComment',
    data: {
      articleId
    }
  })
}

//获取留言信息
export function getMessage () {
  return request ({
    method: 'post',
    url: '/users/getMessage',
    
  })
}