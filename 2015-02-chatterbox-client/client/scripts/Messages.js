var Messages = Backbone.Collection.extend({
  model: Message,
  url: 'http://127.0.0.1:3000/classes/chatterbox/',
  rooms: new Rooms(),

  loadMsgs: function(){
    this.fetch({data: { order: '-createdAt' }});
  },

  parse: function(response, options){
    var results = [];
    var roomname;
    for( var i = response.results.length-1; i >= 0; i-- ){
      console.log(response.results[i].roomname)
      results.push(response.results[i]);
      this.rooms.addRoom(response.results[i].roomname);
    }
    return results;
  },



});
