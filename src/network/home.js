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
export function postBlogData(title, tag, content, abstract, picture) {
    return request({
        method: 'post',
        url: '/api/newblog',
        data: {
            title,
            tag,
            content,
            abstract,
            picture
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
export function editBlogData({title, id, label_id, content, abstract}) {
    return request({
        method: 'post',
        url: '/api/update',
        data: {
            title,
            id,
            content,
            label_id,
            abstract
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

//获取最新5条评论
export function getNewComment(currentPage, size) {
    return request({
        method: 'post',
        url: '/api/newComment',
        data: {
            currentPage,
            size
        }
    })
}

//获取最新5条留言
export function getNewMessage(currentPage, size) {
    return request({
        method: 'post',
        url: '/api/newMessage',
        data: {
            currentPage,
            size
        }
    })
}

//获得分类个数
export function getLabelCount() {
    return request({
        method: 'post',
        url: '/api/getLabelCount'
    })
}