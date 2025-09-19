import express from "express";
import {blogIdValidators} from "../middlewears/blogValidators.js"
import { createBlogHandle, deleteBlogHandleById, getAllBlogHandles, getBlogHandleById, updateBlogHandleById } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlogHandles);

router.get("/:id", blogIdValidators, getBlogHandleById);

router.post("/", createBlogHandle);

router.put("/:id", updateBlogHandleById);

router.delete("/:id", deleteBlogHandleById);

export default router;