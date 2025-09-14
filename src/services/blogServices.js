import {getAll, getId} from "../repositories/blogRepo.js"

export function getAllBlogs(query){
    return getAll(query);
}

export function getBlogById(id){
    return getId(id);
}