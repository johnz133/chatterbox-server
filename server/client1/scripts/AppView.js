var AppView = Backbone.View.extend({
  triggerRoom: function(roomname) {
    console.log(123, roomname);
    this.messagesView.roomname = roomname;
    this.messagesView.render();
  },

  initialize: function(){
    var context = this;
    this.formView = new FormView({el: $('#main'), collection: this.model.get('messages')});
    this.messagesView = new MessagesView({el: $('#chats'), collection: this.model.get('messages')});
    this.roomView = new RoomsView({el: $('#rooms'), collection: this.model.get('messages').rooms});
    this.roomView.on('roomChange1', console.log(123));
  }

});

