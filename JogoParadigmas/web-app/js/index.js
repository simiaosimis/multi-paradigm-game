
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var pressedKeys = [];
initializeKeys();
var x =30;
var y =30;
var vx = 0;
var vy = 0;
var gameTime = 0;
var paused = false;
var PLAYER_SPEED = 10;
var PLAYER_FRICTION = 0.99;
var pressingKey;

function update(dt){

	if(pressingKey){
		PLAYER_FRICTION = 0.98;
	}
	else{
		PLAYER_FRICTION = 0.95;
	}

	updateKeyboard(dt);
	updatePlayer();
}

function updatePlayer(){

	vx *= PLAYER_FRICTION;
	vy *= PLAYER_FRICTION;

	x += vx;
	y += vy;

	ctx.fillRect(x,y,100,100);
}

function updateKeyboard(dt){

	ctx.clearRect(x-1,y-1,102,102);
	//Move Left (UP or W)
	if(pressedKeys[38] || pressedKeys[87]){
		vy -= PLAYER_SPEED * dt;
	}
	else{
	}
		
	//Move Left (LEFT or A)
	if(pressedKeys[37] || pressedKeys[65]){
		vx -= PLAYER_SPEED * dt;
	}
	else {
	}
		
	//Move Down (DOWN or S)
	if(pressedKeys[40] || pressedKeys[83]){
		vy += PLAYER_SPEED * dt;
	}
	else{
	}
	
	//Move Right (RIGHT or D)
	if(pressedKeys[39] || pressedKeys[68]){
		vx += PLAYER_SPEED * dt;
	}
	else{
	}

}

function KeyPressed(e){
	e=e||event;
	pressedKeys[e.keyCode] = true;
	pressingKey = true;
}

function KeyReleased(e){
	e=e||event;
	pressedKeys[e.keyCode] = false;
	pressingKey = false;
}

function initializeKeys(){
	for (var i = 0; i < 123; i++) {
		pressedKeys[i] = false;
	}
}

window.onkeydown = KeyPressed;
window.onkeyup = KeyReleased;

var lastTime;

function main() {

	var now = window.performance.now();
	var dt = (now - lastTime) / 1000.0;

	update(dt);

		if(!paused){
			gameTime += dt;
		}

	lastTime = now;
	requestAnimFrame(main);
}

main();
