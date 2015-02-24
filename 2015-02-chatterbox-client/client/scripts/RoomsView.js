var RoomsView = Backbone.View.extend({

  initialize: function(){
    this.render();
    this.collection.on('add', this.render, this);
  },

  render: function(){
    this.$el.children().detach();
    this.collection.models.forEach(this.renderRoom, this);
  },

  renderRoom: function(room){
    var roomView = new RoomView({model: room});
    this.$el.append(roomView.render());
  }

});
