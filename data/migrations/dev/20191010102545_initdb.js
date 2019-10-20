exports.up = function(knex) {
  return knex.schema
    .createTable("users", col => {
      col
        .increments()
      col
        .string('username',50)
        .unique()
        .notNullable()
      col
        .string('password',255)
        .notNullable()
      col
        .string('email',50)
        .notNullable()
        .unique()
    }).createTable('roles', col =>{

    }).createTable('diner', col =>{
      
    }).createTable('diner_favs', col =>{
      
    }).createTable('diner_reviews', col =>{
      
    }).createTable('operator', col =>{
      
    }).createTable('menus', col =>{
      
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
