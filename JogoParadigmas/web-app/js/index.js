
var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var pressedKeys = [];
initializeKeys();
var x =30;
var y =30;

function updatePlayer(){
	ctx.fillRect(x,y,100,100);
}

function updateKeyboard(){
	
	ctx.clearRect(x,y,100,100);

	//Move Left (UP or W)
	if(pressedKeys[38] || pressedKeys[87]){
		y-=5;
	}
	else{
	}
		
	//Move Left (LEFT or A)
	if(pressedKeys[37] || pressedKeys[65]){
		x-=5;	
	}
	else {
	}
		
	//Move Down (DOWN or S)
	if(pressedKeys[40] || pressedKeys[83]){
		y+=5;
	}
	else{
	}
	
	//Move Right (RIGHT or D)
	if(pressedKeys[39] || pressedKeys[68]){
		x+=5;
	}
	else{
	}

	updatePlayer();
}

function KeyPressed(e){
	e=e||event;
	pressedKeys[e.keyCode] = true;
}

function KeyReleased(e){
	e=e||event;
	pressedKeys[e.keyCode] = false;
}

function initializeKeys(){
	for (var i = 0; i < 123; i++) {
		pressedKeys[i] = false;
	}
}

updatePlayer();
window.onkeydown = KeyPressed;
window.onkeyup = KeyReleased;

window.setInterval("updateKeyboard()", 1000/60);
