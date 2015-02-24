var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var dataArray = [];

var validUrl = {
  "/classes/messages" : true,
  "/classes/messages/" : true,
  "/classes/room1" : true,
  "/classes/room" : true
};

var processPost = function(request) {
  var queryData = "";
  request.on('data', function(data){
    queryData += data;
  });
  request.on('end', function(){
    var message = JSON.parse(queryData);
    message.objectId = dataArray.length+1;
    dataArray.push(message);
  });
};


exports.requestHandler = function(request, response) {
  var method = request.method;
  var statusCode, data;

  if(!validUrl[request.url]){
    statusCode = 404;
  } else if(request.method === "POST"){
    statusCode = 201;
    processPost(request);
  } else if(request.method === "GET"){
    data = JSON.stringify({'results':dataArray});
    statusCode = 200;
  } else if(request.method === "OPTIONS"){
    statusCode = 200;
  }

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "text/plain";
  response.writeHead(statusCode, headers);
  response.end(data);
};

