	var socket = io();
	socket.on('connect',function () {
		// body...
		console.log("the user has entered ");
	})

	socket.on('toALL',function (msg) {
				console.log('msg here '+msg.text)
				var temp = document.getElementById("msgs").innerHTML
				document.getElementById("msgs").innerHTML = temp+ "<br>" + msg.text ;
	})

var  $form = jQuery("#message-form")
$form.on('submit',function (event) {
	console.log('hello')
	event.preventDefault()
	var msg={}
	 msg.text=	$form.find("input[name=message]").val()
socket.emit('msg',msg)
$form.find("input[name=message]").val("")
})
