import {blogs} from "../db/blogs.js";
let result = [...blogs];

export function getAll(query){

    if(query.title){
        result = result.filter(blog => blog.title.toLowerCase() === query.title.toLowerCase())
    }

    if(query.content){
        result = result.filter(blog => blog.content.toLowerCase().includes(query.content.toLowerCase()))
    }
    return result;
}

export function getId(id){
    const blogById = result.find(blog => blog.id === id);
    return blogById;
}