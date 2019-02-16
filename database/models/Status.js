const bookshelf = require('./bookshelf');

class Status extends bookshelf.Model {
  get tableName() { return 'statuses'; }
  get timestamps() { return true; }

  statuses() {
    return this.hasMany('Card', 'status_id');
  }
}

module.exports = bookshelf.model('Status', Status);