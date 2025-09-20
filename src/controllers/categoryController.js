import {getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory} from "../services/categoryServices.js"
import { matchedData } from "express-validator";

export function getAllCategoryHandle(req, res){
    // console.log("We are in Controller");
    const query = matchedData(req);
    const output = getAllCategories(query);
    res.status(200).json(output);
}

export function getAllCategoryById (req, res){
    const id = parseInt(req.params.id)
    const output = getCategoryById(id);
    res.status(200).json(output);
}

export function createCategoryHandle(req, res){
    const data = req.body;
    const createdCategory = createCategory(data);
    res.status(201).json(createdCategory);
}

export function updateCategoryById(req, res){
    const idToUpdate = parseInt(req.params.id);
    const dataToBeUpdated = req.body;
    const updatedResult = updateCategory(idToUpdate, dataToBeUpdated);
        
    res.status(200).json(updatedResult);
}

export function deleteCategoryById(req, res){
    const id = parseInt(req.params.id);
    delete deleteCategory(id);
    res.status(204).send();
}