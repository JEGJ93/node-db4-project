
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').insert([
    { name: "Pepperoni", },
    { name: "Steamed Sausage"},
    { name: "Buns"},
    { name: "Beef Patty"},
    { name: "Ketchup"},
    { name: "Tomato Sauce"},
    { name: "Dough"},
    { name: "Cheese"},
    { name: "Ketchup"},

  ])   
}
