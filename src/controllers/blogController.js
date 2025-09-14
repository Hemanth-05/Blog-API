import { getAllBlogs, getBlogById, createBlog } from "../services/blogServices.js";

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
    res.status(200).json({message: `Updated the blog with id: ${req.params.id}`})
}

export function deleteBlogHandleById (req, res) {
    res.status(204).send();
}