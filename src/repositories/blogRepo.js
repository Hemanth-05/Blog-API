import {blogs, getNextId} from "../db/blogs.js";

export function getAll(query){
    let result = [...blogs];

    if(query.title){
        result = result.filter(blog => blog.title.toLowerCase() === query.title.toLowerCase())
    }

    if(query.content){
        result = result.filter(blog => blog.content.toLowerCase().includes(query.content.toLowerCase()))
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