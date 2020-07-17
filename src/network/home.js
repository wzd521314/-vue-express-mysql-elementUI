import {request} from 'network/request.js'

//获取博客详情数据
export function getBlogDetails(id) {
    return request({
        method: 'get',
        url: '/api/detail',
        params: {
            id
        }
    })
}

//新建博客
export function postBlogData(title, tag, content) {
    return request({
        method: 'post',
        url: '/api/newblog',
        data: {
            title,
            tag,
            content
        }
    })
}

////获取首页及分页博客数据
export function postPageData(pageSize, targetPage) {
    return request({
        method: 'post',
        url: '/api/blog',
        data: {
            pageSize,
            targetPage
        }
    })
}

//修改博客数据
export function editBlogData({title, id, tag, content}) {
    return request({
        method: 'post',
        url: '/api/update',
        data: {
            title,
            id,
            content,
            tag
        }
    })
}

//删除博客(修改状态state=0)
export function delBlog(id) {
    return request({
        method: 'post',
        url: '/api/delete',
        data: {
            id
        }
    })
}


//获取标签列表
export function getTags() {
    return request({
        method: 'post',
        url: '/api/tags'
    })
}