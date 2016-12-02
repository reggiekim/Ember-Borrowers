import Ember from 'ember';
// import request from 'ic-ajax';

// export default Ember.Route.extend({
//   model() {
//     return request('/friends').then(function(data){
//       return {
//         friendsCount: data.data.length
//       };
//     });
//   }
// });

export default Ember.Route.extend({
  //
  // Check the following for more information about services
  // https://guides.emberjs.com/v2.5.0/applications/services/
  //
  ajax: Ember.inject.service(),
  model() {
    return this.get('ajax').request('/friends').then(function(data){
      return {
        friendsCount: data.data.length
      };
    });
  }
});
