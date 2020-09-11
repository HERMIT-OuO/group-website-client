import request from '@/utils/request';

export function getMessageList() {
    return request({
        url: '/api/common/messagelist',
        method: 'get',
    })
}

export function postMessage(data) {
    return request({
        url: '/api/common/postmessage',
        method: 'post',
        data
    })
}

export function getBlogList() {
    // 获取全部博客
    return request({
        url: '/api/common/bloglist',
        method: 'get',
    })
}

export function getBlogById(data) {
    return request({
        url: '/api/common/getblogbyid',
        method: 'get',
        data
    })
}

export function getMemberList() {
    return request({
        url: '/api/common/memberlist',
        method: 'get',
    })
}

export function getMemberById(data) {
    return request({
        url: '/api/common/getmemberbyid',
        method: 'get',
        data
    })
}