const db = require("../data/config")

function find() {
    return db("ingredients as i")
    .leftJoin("recipes as r", "r.id", "i.recipes_id")
    .select("i.id", "i.name", "r.name as recipes_name")
}

function findById(id) {
    return db("ingredients as i")
    .where("i.id", id)
    .leftJoin("recipes as r", "r.id", "i.recipes_id")
    .first("i.id", "i.name", "r.name as recipes_name")
}


module.exports = {
    find,
    findById,
}