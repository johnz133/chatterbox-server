var Rooms = Backbone.Collection.extend({
  model: Room,

  addRoom: function(roomname){
    if (this.where({'roomname': roomname}).length > 0){
      return;
    } else{
      this.add({'roomname': roomname});
    }
  }

});