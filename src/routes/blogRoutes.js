import express from "express";
import {blogIdValidators, validateBlogQuery} from "../middlewears/blogValidators.js"
import { createBlogHandle, deleteBlogHandleById, getAllBlogHandles, getBlogHandleById, updateBlogHandleById } from "../controllers/blogController.js";

const router = express.Router();

router.get("/",validateBlogQuery, getAllBlogHandles);

router.get("/:id", blogIdValidators, getBlogHandleById);

router.post("/", createBlogHandle);

router.put("/:id", blogIdValidators, updateBlogHandleById);

router.delete("/:id", blogIdValidators, deleteBlogHandleById);

export default router;