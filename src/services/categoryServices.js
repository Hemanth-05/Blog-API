import { getAll, getCategory, create, update, remove} from "../repositories/categoryRepo.js";

export function getAllCategories(query){
    // console.log("We are in Services");
    return getAll(query);
}

export function getCategoryById(id){
    let output = getCategory(id);
    if(output === undefined){
        const err = new Error(`The id: ${id} doesn't exist`);
        err.status = 400;
        throw err;
    }
    return output;
}

export function createCategory(data){
    const currentTime = new Date();
    const formattedDate = currentTime.toISOString().split("T")[0];

    const category = {
        name: data.name,
        description: data.description,
        isActive: data.isActive || false ,
        createdAt: formattedDate
    }

    return create(category);
}

export function updateCategory(id, updateData){
    if((!updateData) || (!updateData.name && !updateData.content)){
            const e = new Error(`No fields to update`);
            e.status = 400;
            throw e;
        }
        const updatedBlog = update(id, updateData);
        if(updatedBlog){
            return updatedBlog;
        }else{
            const err = new Error(`The Category with ${id} id was not found`);
            err.status = 404;
            throw err;
        }
}

export function deleteCategory(id){
    const result = remove(id);
        if(result){
            return true;
        }else{
            const err = new Error(`The blog with ${id} id was not found`);
            err.status = 404;
            throw err;
        }
}