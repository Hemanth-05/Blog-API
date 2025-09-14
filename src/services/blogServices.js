import {getAll, getId, create, update} from "../repositories/blogRepo.js"

export function getAllBlogs(query){
    return getAll(query);
}

export function getBlogById(id){
    let result = getId(id);
    if(result === undefined){
        result = {error: `The blog with id: ${id} doesn't exists`, statusCode: 404};
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
    if(!updateData || (!updateData.title && !updateData.content && !updateData.author)){
        return {error: `No fields to update`, statusCode: 400};
    }
    const updatedBlog = update(id, updateData);
    if(updatedBlog){
        return updatedBlog;
    }else{
        return {error: `The blog with id: ${id} was not found`, statusCode: 404};
    }
}