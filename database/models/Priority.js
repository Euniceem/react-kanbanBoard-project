const bookshelf = require('./bookshelf');

class Priority extends bookshelf.Model {
  get tableName() { return 'priorites'; }
  get timestamps() { return true; }

  priorites() {
    return this.hasMany('Card', 'priority_id');
  }
}

module.exports = bookshelf.model('Priority', Priority);
