var AppView = Backbone.View.extend({

  initialize: function(){
    var formView = new FormView({el: $('#main'), collection: this.model.get('messages')})
    var messagesView = new MessagesView({el: $('#chats'), collection: this.model.get('messages')});
    var roomView = new RoomsView({el: $('#rooms'), collection: this.model.get('messages').rooms})
  }

});

