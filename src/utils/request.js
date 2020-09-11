import axios from 'axios'
import {getToken} from './auth.js'

const service = axios.create({
    baseURL: '',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        // before sent
        if (getToken()) {
            config.headers['Token'] = getToken();
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    response => {
        // 拦截
        const res = response.data;
        console.log(res);
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)

export default service