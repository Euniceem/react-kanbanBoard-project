
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 2,
          title: 'Grocery Shopping',
          body: 'Buy ingredients to make your special chicken pot pie',
          priority_id: 1,
          status_id: 1,
          created_by: 1,
          assigned_to: 1
        },
        {
          id: 3,
          title: 'Haircut Appointment',
          body: 'Ala Moana Building @12:00am',
          priority_id: 1,
          status_id: 3,
          created_by: 1,
          assigned_to: 1
        }

      ]);
    });
};
