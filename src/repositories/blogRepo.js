import {blogs, getNextId} from "../db/blogs.js";

export function getAll(query){
    let result = [...blogs];
    if(query.title){
        result = result.filter(blog => blog.title.toLowerCase() === query.title)
    }

    if(query.author){
        result = result.filter(blog => blog.author.toLowerCase().includes(query.author))
    }
    if(query.isPublished !== undefined){
        result = result.filter( blog => blog.isPublished === query.isPublished)
    }
    return result;
}

export function getId(id){
    let result = [...blogs];
    const blogById = result.find(blog => blog.id === id);
    return blogById;
}

export function create(blog){
    const newId = getNextId();
    const newBlog = {id: newId, ...blog}
    blogs.push(newBlog);
    console.log(blogs);
    return newBlog;
}

export function update(id, updateData){
    let result = [...blogs];
    const currentTime = new Date();
    const formattedDate = currentTime.toISOString().split("T")[0];

    let indexOfBlogToUpdate = result.findIndex(blog => blog.id === id);

    if(indexOfBlogToUpdate !== -1){
        let newBlog = {...blogs[indexOfBlogToUpdate], ...updateData, updatedAt: formattedDate};
        blogs[indexOfBlogToUpdate] = newBlog;
        return blogs[indexOfBlogToUpdate];
    }else{
        return null;
    }   
}

export function deleteBlog(id){
    let result = [...blogs];
    const blogIdToBeDeleted = result.findIndex(blog => blog.id === id);
    if(blogIdToBeDeleted === -1){
        return false;
    }
    blogs.splice(blogIdToBeDeleted, 1);
    return true;
}