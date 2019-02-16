
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorites').insert([
        { id: 1, name: 'High', rank: 1 },
        { id: 2, name: 'Medium', rank: 2 },
        { id: 3, name: 'Low', rank: 3 },
      ]);
    });
};
