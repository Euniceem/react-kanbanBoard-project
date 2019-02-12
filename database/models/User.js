const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users' }
  get timestamps() { return true; }

  users() {
    return this.hasMany('Card');
  }
}

module.exports = bookshelf.Model('Users', User);