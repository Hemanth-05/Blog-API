import {param} from "express-validator"
import { handleValidationErrors } from "./handleValidationErrors.js"

export const blogIdValidators = [param("id")
    .isInt({min:1})
    .withMessage("Blog Id must be positive integer"), handleValidationErrors]