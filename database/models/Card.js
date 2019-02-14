const bookshelf = require('./bookshelf');
require('./Priority');
require('./Status');
require('./User');

class Card extends bookshelf.Model {
  get tableName() { return 'cards' };
  get timestamps() { return true; };

  created() {
    return this.hasOne('User', 'id', 'created_by');
  };

  assigned() {
    return this.hasOne('User', 'id', 'assigned_by');
  };

  status() {
    return this.hasOne('Statuses', 'id', 'status_id');
  };

  priority() {
    return this.hasOne('Priorites', 'id', 'priority_id');
  };
};

module.exports = bookshelf.model('Card', Card);