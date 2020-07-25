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

//添加分类
export function newTag(tagName) {
    return request({
        method: 'post',
        url: '/api/newTag',
        data: {
            tagName
        }
    })
}

//获取分类所对应的博文数目信息
export function getTagCount() {
    return request({
        method: 'post',
        url: '/api/tagCount'
    })
}

//获取月份所对应的博文数目信息
export function getDateCount() {
    return  request({
        method: 'post',
        url: '/api/dateCount'
    })
}

//获取指定分类的博客内容
export function getLabelBlog(targetPage, pageSize, labelName) {
    return request({
        method: 'post',
        url: '/api/labelBlog',
        data: {
            targetPage,
            pageSize,
            labelName
        }
    })
}

//获取指定月份的博客内容
export function getDateBlog(targetPage, pageSize, year, month) {
    return request({
        method: 'post',
        url: '/api/dateBlog',
        data: {
            targetPage,
            pageSize,
            year,
            month
        }
    })
}