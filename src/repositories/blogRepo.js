import {blogs} from "../db/blogs.js";

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