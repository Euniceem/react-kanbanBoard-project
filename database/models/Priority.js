const bookshelf = require('./bookshelf');

class Priority extends bookshelf.Model {
  get tableName() { return 'priorites'; }
  get timestamps() { return true; }

  priorites() {
    return this.belongsTo('Card');
  }
}

module.exports = bookshelf.model('Priority', Priority);
