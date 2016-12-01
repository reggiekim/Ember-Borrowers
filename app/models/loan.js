import Model from 'ember-data/model';
import attr from 'ember-data/attr';
//
// We can export hasMany or belongsTo depending on the type of the
// relationship.
//
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  notes: attr('string'),
  returned: attr('boolean'),
  createdAt: attr('date'),
  friend: belongsTo('friend'),
  article: belongsTo('article'),
});



// import DS from 'ember-data';

// export default DS.Model.extend({
//   notes: DS.attr('string'),
//   returned: DS.attr('boolean'),
//   createdAt: DS.attr('date'),
//   friend: DS.belongsTo('friend'),
//   article: DS.belongsTo('article')
// });
