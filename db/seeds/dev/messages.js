
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: 1, 
          name: 'John Doe', 
          email: 'jdoe@gmail.com', 
          company: 'Slalom', 
          message: 'Hi Jacob: Great meeting you last week. When are you available to come in for an interview?'
        },
        {
          id: 2, 
          name: 'Megan',
          email: 'megan@companyxyz.com',
          company: 'xyz',
          message: 'Hello Jacob. I stumbled upon your portfolio site. It looks great!'
        },
        {
          id: 3, 
          name: 'Ross',
          email: 'ross@huronconsulting.com',
          company: 'Huron Consulting',
          message: 'Good Morning Jacob!'
        }
      ]);
    });
};
