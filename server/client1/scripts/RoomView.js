var RoomView = Backbone.View.extend({

  template: _.template('<div class="room"> \
                       <div class="text"><%- roomname %></div> \
                       </div>'),
  events: {
    'click': 'triggerRoom'
  },

  triggerRoom: function() {
    this.trigger('roomChange', this.model.attributes.roomname);
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});
