
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cookbook').insert([

    { recipes_id: 1, ingredients_id: 1, quantity: 5 },
    { recipes_id: 1, ingredients_id: 3, quantity: 7 },
    { recipes_id: 1, ingredients_id: 7, quantity:  9.5},
    { recipes_id: 1, ingredients_id: 8, quantity:  11.5},
    { recipes_id: 2, ingredients_id: 3, quantity:  5},
    { recipes_id: 2, ingredients_id: 5, quantity:  3.5},
    { recipes_id: 2, ingredients_id: 2, quantity:  5},
    { recipes_id: 3, ingredients_id: 4, quantity:  6},
    { recipes_id: 3, ingredients_id: 3, quantity:  6},
    { recipes_id: 3, ingredients_id: 9, quantity:  6},
    
  ])
   
};
