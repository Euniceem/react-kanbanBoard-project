const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'cards' }
  get timestamps() { return true; }

  cards() {
    return this.belongsTo('User');
  }
}

module.exports = bookshelf.model('Card', Card);