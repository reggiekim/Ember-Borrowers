import Ember from 'ember';

export default Ember.Component.extend({
  // isValid: Ember.computed(
  //   'model.email',
  //   'model.firstName',
  //   'model.lastName',
  //   'model.twitter',
  //   {
  //     get() {
  //       return !Ember.isEmpty(this.get('model.email')) &&
  //         !Ember.isEmpty(this.get('model.firstName')) &&
  //         !Ember.isEmpty(this.get('model.lastName')) &&
  //         !Ember.isEmpty(this.get('model.twitter'));
  //     }
  //   }
  // ),
  //
  // The above block of code verifies if the form is valid
  // by checking if the form fields are NOT empty.
  //
  // Ember computed.notEmpty and Ember.computed.and are Ember helper
  // functions to accomplish the same thing
  //
  hasEmail: Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName: Ember.computed.notEmpty('model.lastName'),
  hasTwitter: Ember.computed.notEmpty('model.twitter'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),

  actions: {
    save() {
      console.log('+- save action in edit-form component');
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          //
          // This function gets called if the HTTP request succeeds
          //
          //
          // We are calling the save action passed down when rendering
          // the component: action=(action "save")
          //
          return this.save(friend);
        }, (err) => {
          //
          // This gets called if the HTTP request fails.
          //
          this.set('errorMessage', 'there was something wrong saving the model');
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    },
    cancel() {
      console.log('+- cancel action in edit-form component');
      //
      // We are calling the cancel action passed down when rendering the
      // component: action=(action "cancel")
      //
      this.cancel(this.get('model'));
    }
  }
});
