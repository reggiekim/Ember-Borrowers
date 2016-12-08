import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.store.findAll('friend');
    //
    // We now use store.query and pass include in the options
    // below we include "loans", which returns JSON of all friends, and includes loans related to each friend
    return this.store.query('friend', {include: 'loans'});
  }
});
