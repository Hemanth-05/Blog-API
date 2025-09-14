import { getAllBlogs, getBlogById } from "../services/blogServices.js";

export function getAllBlogHandles(req, res) {
    const result = getAllBlogs(req.query);
    res.status(200).json(result);
}

export function getBlogHandleById(req, res) {
    const idEntered = parseInt(req.params.id);
    const resultOfGetBlogById = getBlogById(idEntered);
    res.status(200).json(resultOfGetBlogById);
}

export function createBlogHandle (req, res) {
    res.status(201).json({message: "Blog Created"});
}

export function updateBlogHandleById (req, res) {
    res.status(200).json({message: `Updated the blog with id: ${req.params.id}`})
}

export function deleteBlogHandleById (req, res) {
    res.status(204).send();
}