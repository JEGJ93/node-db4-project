
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
    })


    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull()
    })

    await knex.schema.createTable('cookbook', (table) => {
        table
        .integer('recipes_id')
        .notNull()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        table
        .integer('ingredients_id')
        .notNull()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        table
        .float('quantity')
        .notNull()
    })


    
};



exports.down = async function(knex) {
await knex.schema.dropTableIfExists("ingredients")
await knex.schema.dropTableIfExists('recipes')  
};
