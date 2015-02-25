var App = Backbone.Model.extend({

  initialize: function(){
    this.set('messages',new Messages());
    this.get('messages').loadMsgs();
    setInterval( this.get('messages').loadMsgs.bind(this.get('messages')), 1000 );
  }


});
