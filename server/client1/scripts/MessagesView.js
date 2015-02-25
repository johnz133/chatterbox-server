var MessagesView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('sync', this.render, this);
    this.onscreenMessages = {};
    this.roomname;
  },

  render: function(){
    this.collection.forEach(this.renderMessage, this);
  },

  renderMessage: function(message){
    if(!this.roomname || message.get('roomname') === this.roomname ){
      if( !this.onscreenMessages[message.get('objectId')] && message.get('objectId') ){
        var messageView = new MessageView({model: message});
        this.$el.prepend(messageView.render());
        this.onscreenMessages[message.get('objectId')] = true;
      }
    }
  }

});
