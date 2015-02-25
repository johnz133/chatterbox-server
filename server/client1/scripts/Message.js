var Message = Backbone.Model.extend({
  url: 'http://127.0.0.1:3000/classes/messages/',
  defaults: {
    username  : '',
    text      : ''
  }
});
