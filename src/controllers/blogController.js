import { getAllBlogs } from "../services/blogServices.js";

export function getAllBlogHandles(req, res) {
    const result = getAllBlogs(req.query);
    res.status(200).json(result);
}

export function getBlogHandleById(req, res) {
    res.status(200).json({message: `Sending Blog with the id: ${req.params.id}`});
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