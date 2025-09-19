import {param, query} from "express-validator"
import { handleValidationErrors } from "./handleValidationErrors.js"

export const validateBlogQuery = [
    query('author').optional().trim().escape().toLowerCase(),
    query('title').optional().trim().escape().toLowerCase(),
    query('isPublished').optional().toLowerCase().isBoolean().withMessage("The value of published should either be true or false").toBoolean(),
    handleValidationErrors
];

export const blogIdValidators = [
    param("id")
    .isInt({min:1})
    .withMessage("Blog Id must be positive integer"), 
    handleValidationErrors
];

