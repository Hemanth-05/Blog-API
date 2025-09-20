import {categories} from "../db/categories.js";
import {getNextCategoryId} from "../db/categories.js";

export function getAll(query){
    // console.log("We are in Repo");
    let output = [...categories];

    if(query.name){
        output = output.filter(category => category.name.toLowerCase() === query.name);
    }
    return output;
}

export function getCategory(id){
    let output = [...categories];
    output = output.find(category => category.id === id);
    return output;
}

export function create(category){
    const newId = getNextCategoryId();
    const newCategory = {id: newId, ...category};
    categories.push(newCategory);
    return newCategory;
}

export function update(id, updateData){
    let result = [...categories];
    
        let indexOfCategoryToUpdate = result.findIndex(category => category.id === id);
    
        if(indexOfCategoryToUpdate !== -1){
            let newCategory = {...categories[indexOfCategoryToUpdate], ...updateData};
            categories[indexOfCategoryToUpdate] = newCategory;
            return categories[indexOfCategoryToUpdate];
        }else{
            return null;
        }
}

export function remove(id){
    let elements = [...categories];
    const categoryIdToBeDeleted = elements.findIndex(category => category.id === id);
    if(categoryIdToBeDeleted === -1){
            return false;
        }
        categories.splice(categoryIdToBeDeleted, 1);
        return true;
}