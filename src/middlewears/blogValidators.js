import {param, query, body} from "express-validator"
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

export const createBlogValidator = [
    body('title')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Title cannot be empty")
        .bail()
        .isLength({min:3})
        .withMessage("Title should atleast be 3 characters"),

    body('content')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Content cannot be empty")
        .bail()
        .isLength({min:10})
        .withMessage("content should atleast be 10 characters"),

    body("author")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Author field cannot be empty")
        .bail()
        .isAlphanumeric()
        .withMessage("Only alphanumeric allowed"),

    body("isPublished")
        .optional()
        .toLowerCase()
        .isBoolean()
        .withMessage("The value of published should either be true or false")
        .toBoolean(),
    handleValidationErrors
];

export const updateBlogValidator = [
    body('title')
        .optional()
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Title cannot be empty")
        .bail()
        .isLength({min:3})
        .withMessage("Title should atleast be 3 characters"),

    body('content')
        .optional()
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Content cannot be empty")
        .bail()
        .isLength({min:10})
        .withMessage("content should atleast be 10 characters"),

    body("author")
        .optional()
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Author field cannot be empty")
        .bail()
        .isAlphanumeric()
        .withMessage("Only alphanumeric allowed"),

    body("isPublished")
        .optional()
        .toLowerCase()
        .isBoolean()
        .withMessage("The value of published should either be true or false")
        .toBoolean(),
    handleValidationErrors
];

