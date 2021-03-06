var MessageView = Backbone.View.extend({

  // template: _.template('<div class="chat" data-id="<%- objectId %>"> \
  //                      <div class="user"><%- username %></div> \
  //                      <div class="text"><%- text %></div> \
  //                      </div>'),
  template: _.template('<div class="chat"> \
                       <div class="user"><%- username %></div> \
                       <div class="text"><%- text %></div> \
                       </div>'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});
