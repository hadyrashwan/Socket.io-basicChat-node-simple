	var person = prompt("Please enter your name", "Harry Potter");
	roomName = prompt("Please enter the room name or create a new one press enter if u want the defualt", "toALL");
	var socket = io();
	socket.on('connect', function() {
	    // body...
	    console.log("the user has entered ");
	})

	socket.on(roomName, function(msg) {

	    console.log('msg here ' + msg.text)
	    var temp = document.getElementById("msgs").innerHTML
	    document.getElementById("msgs").innerHTML = temp + "<br>" + "<font color='red'>" + msg.text + " @ " + moment().format('LTS') + "</font>";
	})

	var $form = jQuery("#message-form")
	$form.on('submit', function(event) {
	    console.log('hello')
	    event.preventDefault()
	    var msg = {}
	    msg.room = roomName
	    msg.time =
	        msg.person = person
	    msg.text = $form.find("input[name=message]").val() + " -- " + person
	    var temp = document.getElementById("msgs").innerHTML
	    document.getElementById("msgs").innerHTML = temp + "<br>" + "<font color='blue'>" + msg.text + " @ " + moment().format('LTS') + "</font>";
	    socket.emit('msg', msg)
	    $form.find("input[name=message]").val("")
	})