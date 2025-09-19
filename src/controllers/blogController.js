import { getAllBlogs, getBlogById, createBlog, updateBlogById, deleteBlogById } from "../services/blogServices.js";
import {matchedData} from "express-validator";

export function getAllBlogHandles(req, res) {
    const query = matchedData(req);
    console.log("Matched:", query);
    const result = getAllBlogs(query);
    res.status(200).json(result);
}

export function getBlogHandleById(req, res) {
    const idEntered = parseInt(req.params.id);
    const resultOfGetBlogById = getBlogById(idEntered);
    res.status(200).json(resultOfGetBlogById);
}

export function createBlogHandle (req, res) {
    const data = req.body;
    console.log("Create Blog Data", data);
    const blog = createBlog(data);
    res.status(201).json(blog);
}

export function updateBlogHandleById (req, res) {
    const idToUpdate = parseInt(req.params.id);
    const dataToBeUpdated = req.body;
    const updatedResult = updateBlogById(idToUpdate, dataToBeUpdated);
    
    res.status(200).json(updatedResult);
}

export function deleteBlogHandleById (req, res) {
    const idOfTheBlogToBeDeleted = parseInt(req.params.id);
    const deleteFunction = deleteBlogById(idOfTheBlogToBeDeleted);
    res.status(204).send();
}