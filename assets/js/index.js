import {
    getCategory,
    getCategoryFoodByname,
    getFoodDetails
} from "./function.js";

const urlParams = new URLSearchParams(window.location.search)
const category = urlParams.get('category')
var meals = urlParams.get('meals')

if(category){
    await getCategoryFoodByname(category)
}
if(meals){
    await getFoodDetails(meals)
}

await getCategory()