import express from "express";
import { createBlogHandle, deleteBlogHandleById, getAllBlogHandles, getBlogHandleById, updateBlogHandleById } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlogHandles);

router.get("/:id", getBlogHandleById);

router.post("/", createBlogHandle);

router.put("/:id", updateBlogHandleById);

router.delete("/:id", deleteBlogHandleById);

export default router;