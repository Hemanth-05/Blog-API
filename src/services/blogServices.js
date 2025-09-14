import {getAll, getId, create} from "../repositories/blogRepo.js"

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