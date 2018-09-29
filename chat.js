function connect() {
        return new Promise(function(resolve, reject) {
	            var server = new WebSocket('ws://mysite:1234');
	        server.onopen = function() {
		                resolve(server);
		        };
	        server.onerror = function(err) {
		                reject(err);
		        };
	
	    });
}


connect().then(function(server) {
    //server is ready here
}).catch(function(err) {
    // error here
});

