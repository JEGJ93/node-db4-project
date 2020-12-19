
exports.seed =  async function(knex) {
  await knex('recipes').insert([
    { name: "Pepperoni Pizza"},
    { name: "Hot Dogs"},
    { name: "Hamburgers"}
  ])
};
