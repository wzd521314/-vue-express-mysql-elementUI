import axios from 'axios'




export function request(config) {
    const instance = axios.create({
        //baseURL: 'http://localhost:3000',
        timeout: 5000
    })

    

    return instance(config)
}

export function requestToken(config) {
    const instance = axios.create({
        //baseURL: 'http://localhost:3000',
        timeout: 5000
    })
    
    instance.interceptors.request.use((config) => {
        
        let token = localStorage.getItem('userToken')
        if(token) {
            config.headers.Authorization = 'Bearer '+ token
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    })


    instance.interceptors.response.use((response) => {
        //如果服务器端返回了新的token，则刷新原来的token
        if(response.data.token) {
            localStorage.setItem('userToken', response.data.token)
        }


        
        return response
    }, (error) => {
        let status = error.response.status
        let errno = error.response.data.errno
        //如果token过期或者验证失败，则清除掉本地的token
        if(status === 401 && errno === 1) {
            localStorage.removeItem('userToken')
        }
        return Promise.resolve(error.response)
    })

    return instance(config)
}