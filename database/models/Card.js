const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'cards' }
  get timestamps() { return true; }

  cards() {
    return this.belongsTo('Users');
  }
}

module.exports = bookshelf.Model('Cards', Card);