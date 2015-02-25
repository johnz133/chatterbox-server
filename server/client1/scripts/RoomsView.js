var RoomsView = Backbone.View.extend({

  triggerRoom: function(roomname) {
    // console.log(123, this);
    this.trigger('roomChange1', roomname);
  },

  initialize: function(){
    this.render();
    this.collection.on('add', this.render, this);
  },

  render: function(){
    this.$el.children().detach();
    this.collection.models.forEach(this.renderRoom, this);
  },

  renderRoom: function(room){
    var context = this;
    var roomView = new RoomView({model: room});
    roomView.on('roomChange', context.trigger('roomChange1'));
    this.$el.append(roomView.render());
  }

});
