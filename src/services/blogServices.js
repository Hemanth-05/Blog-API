import {getAll, getId, create, update, deleteBlog} from "../repositories/blogRepo.js"

export function getAllBlogs(query){
    return getAll(query);
}

export function getBlogById(id){
    let result = getId(id);
    if(result === undefined){
        const error = new Error(`The field with id ${id} not found`);
        error.status = 400;
        throw error;
    }
    return result;
}

export function createBlog(data){
    const currentTime = new Date();
    const formattedDate = currentTime.toISOString().split("T")[0];

    const blog = {
        title: data.title,
        content: data.content,
        author: data.author,
        isPublished: data.isPublished || false,
        createdAt: formattedDate,
        updatedAt:formattedDate
    };
    return create(blog);
}

export function updateBlogById(id, updateData){
    if((!updateData) || (!updateData.title && !updateData.content && !updateData.author)){
        const e = new Error(`No fields to update`);
        e.status = 400;
        throw e;
    }
    const updatedBlog = update(id, updateData);
    if(updatedBlog){
        return updatedBlog;
    }else{
        const err = new Error(`The blog with ${id} id was not found`);
        err.status = 404;
        throw err;
    }
}

export function deleteBlogById(id){
    const result = deleteBlog(id);
    if(result){
        return true;
    }else{
        const err = new Error(`The blog with ${id} id was not found`);
        err.status = 404;
        throw err;
    }
}