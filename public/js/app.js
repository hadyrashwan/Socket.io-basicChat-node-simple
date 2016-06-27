	var socket = io();
	socket.on('connect',function () {
		// body...
		console.log("the user has entered called from the front end");
	})

	socket.on('toALL',function (msg) {
				console.log('msg here '+msg.text)
	})