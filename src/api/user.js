import request from '@/utils/request';

export function login(data) {
    return request({
        url: '/api/user/login',
        method: 'post',
        data
    })
}

export function getInfo() {
    return request({
        url: '/api/user/getinfo',
        method: 'post'
    })
}

export function sendCaptcha(data) {
    return request({
        url: '/api/user/getinfo',
        method: 'post',
        data
    })
}

export function postBlog(data) {
    return request({
        url: '/api/user/postblog',
        method: 'post',
        data
    })
}

export function modifyBlog(data) {
    return request({
        url: '/api/user/modifyblog',
        method: 'post',
        data
    })
}

export function delBlog(data) {
    return request({
        url: '/api/user/delBlog',
        method: 'post',
        data
    })
}

export function commentBlog(data) {
    return request({
        url: '/api/user/commentblog',
        method: 'post',
        data
    })
}




