const db = require("../data/db-config")

function find() {
    return db("cookbook")
}

function findById(id) {
    return db("cookbook")
    .where("id", id)
    .first()
}

function findIngredients(recipes) {
    return db("cookbook as cb")
    .join("ingredients as i", "i.id", "cb.ingredients_id")
    .join("recipes as r", "r.id", "cb.recipes_id")
    .where("recipes.id", recipes)
    .select(
        'i.id',
        'i.name',
        'r.name as recipes_name',
        'cb.quantity'
    )
}

module.exports = {
    find, 
    findById,
    findIngredients
}