import {query, param, body} from "express-validator"
import { handleValidationErrors } from "./handleValidationErrors.js";

export const validateCategoryQuery = [
    query('name').optional().trim().escape().toLowerCase(),
    handleValidationErrors
];

export const validateCategoryId = [
    param('id').isInt({min:1}).withMessage("The Id should be a Number"),
    handleValidationErrors
];

export const createCategoryValidation = [
    body('name')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Name cannot be empty")
        .bail()
        .isLength({min:3})
        .withMessage("Name should atleast be 3 characters"),

    body('description')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Description cannot be empty")
        .bail()
        .isLength({min:10})
        .withMessage("Description should atleast be 10 characters"),

    body("isActive")
        .optional()
        .toLowerCase()
        .isBoolean()
        .withMessage("The value of isActive should either be true or false")
        .toBoolean(),
        handleValidationErrors
];

export const updateBlogValidator = [
    body('name')
        .optional()
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Name cannot be empty")
        .bail()
        .isLength({min:3})
        .withMessage("Name should atleast be 3 characters"),

    body('description')
        .optional()
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Description cannot be empty")
        .bail()
        .isLength({min:10})
        .withMessage("Description should atleast be 10 characters"),

    body("isActive")
        .optional()
        .toLowerCase()
        .isBoolean()
        .withMessage("The value of isActive should either be true or false")
        .toBoolean(),
    handleValidationErrors
];

