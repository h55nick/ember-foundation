import Ember from 'ember';

var isFoundationDirty = false;

export default {
  name: 'ember-foundation',

  initialize: function(container, app) {
    app.inject('component:f-breadcrumbs', 'router', 'router:main');

    Ember.View.reopen({
      _initFoundation: function() {

        isFoundationDirty = true;
        Ember.run.schedule('afterRender', this, this._updateFoundation);
      }.on('didInsertElement'),

      _updateFoundation: function(){
        if(isFoundationDirty){
          Ember.$.fn.foundation(document.body);
          isFoundationDirty = false;
        }
      }
    });
  }
};