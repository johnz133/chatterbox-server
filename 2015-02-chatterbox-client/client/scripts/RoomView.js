var RoomView = Backbone.View.extend({

  template: _.template('<div class="room"> \
                       <div class="text"><%- roomname %></div> \
                       </div>'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});
