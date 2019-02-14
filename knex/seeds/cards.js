
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 1,
          title: 'Exercise',
          body: 'Leg and Abs Day',
          priority_id: 2,
          status_id: 2,
          created_by: 1,
          assigned_to: 1
        },

      ]);
    });
};
