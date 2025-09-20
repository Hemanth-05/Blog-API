import express from "express";
import {getAllCategoryHandle, getAllCategoryById, createCategoryHandle, updateCategoryById, deleteCategoryById} from "../controllers/categoryController.js"
import {validateCategoryQuery, validateCategoryId, createCategoryValidation, updateBlogValidator} from "../middlewears/categoryValidators.js"

const router = express.Router();
    
router.get("/", validateCategoryQuery, getAllCategoryHandle);

router.get("/:id", validateCategoryId, getAllCategoryById);

router.post("/", createCategoryValidation, createCategoryHandle);

router.put("/:id", validateCategoryId, updateBlogValidator,  updateCategoryById);

router.delete("/:id", validateCategoryId, deleteCategoryById);

export default router;