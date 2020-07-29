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
        console.log(token)
        if(token) {
            config.headers.Authorization = 'Bearer '+ token
        }
        config.headers.Authorization = 'Bearer '+ token
        return config
    }, (error) => {
        return Promise.reject(error)
    })

    return instance(config)
}