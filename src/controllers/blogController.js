import { getAllBlogs, getBlogById, createBlog, updateBlogById } from "../services/blogServices.js";

export function getAllBlogHandles(req, res) {
    const result = getAllBlogs(req.query);
    res.status(200).json(result);
}

export function getBlogHandleById(req, res) {
    const idEntered = parseInt(req.params.id);
    const resultOfGetBlogById = getBlogById(idEntered);
    if(!resultOfGetBlogById.error){
        res.status(200).json(resultOfGetBlogById);
    } else{
        res.status(resultOfGetBlogById.statusCode).json({message: resultOfGetBlogById.error});
    }
}

export function createBlogHandle (req, res) {
    const data = req.body;
    const blog = createBlog(data);
    res.status(201).json(blog);
}

export function updateBlogHandleById (req, res) {
    const idToUpdate = parseInt(req.params.id);
    const dataToBeUpdated = req.body;
    const updatedResult = updateBlogById(idToUpdate, dataToBeUpdated);

    if(!updatedResult.error){
        res.status(200).json(updatedResult);
    }else{
        res.status(updatedResult.statusCode).json({"message": updatedResult.error});
    }
    
}

export function deleteBlogHandleById (req, res) {
    res.status(204).send();
}