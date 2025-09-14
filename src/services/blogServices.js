import {getAll} from "../repositories/blogRepo.js"

export function getAllBlogs(query){
    return getAll(query);
}