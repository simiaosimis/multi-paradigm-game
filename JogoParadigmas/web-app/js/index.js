
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
var mousePosition = [];
initializeKeys();
var x;
var y;
var vx;
var vy;
var gameTime = 0;
var paused = false;
var PLAYER_SPEED = 20;
var PLAYER_FRICTION = 0.99;
var pressingKey;
var enemy = [];
var shots = [];

function setupPlayer(player){
	x = player[0].x;
	y = player[0].y;
	vx = player[0].vx;
	vy = player[0].vy;
        //update: [success: 'alert("ok");', failure: 'alert("nok");'],        
}

function Enemy(x, y){
	this.x = x;
	this.y = y;
	this.width = 50;
	this.height = 50;
	this.alertState = false;
	this.range = 50;
	this.ok;
	this.deadX = -100;
	this.deadY = -100;
}

function Shot(x, y, mx, my, xToFollow, yToFollow){
	this.x = x;
	this.y = y;
	this.mx = mx - 197;
	this.my = my - 136 - (240 - window.pageYOffset);
	this.xToFollow = xToFollow;
	this.yToFollow = yToFollow;
}

enemy[0] = new Enemy(400,150);
enemy[1] = new Enemy(600,350);
enemy[2] = new Enemy(500,550);

function update(dt){

	//jQuery.ajax({type:'POST',data:'attr=' + vx, url:'/JogoParadigmas/player/printa'});
	if(pressingKey){
		PLAYER_FRICTION = 0.98;
	}
	else{
		PLAYER_FRICTION = 0.95;
	}

	handleKeyboard(dt);
	updateEnemy();
	updateShotCollision(dt);
	updatePlayer();
	updateShot();


}

function updatePlayer(){

	vx *= PLAYER_FRICTION;
	vy *= PLAYER_FRICTION;

	x += vx;
	y += vy;

	checkBoundaries();
}

function updateEnemy(){

	for(var i = 0; i<enemy.length; i++){

		if(enemy[i].alertState){

			var direction = randomize(3) + 1;
			console.log(direction);
			if(direction == 1){
				enemy[i].x += 50;
			}
			else if(direction == 2){
				enemy[i].x -= 100;
			}
			else if(direction == 3){
				enemy[i].y += 50;
			}
			else if(direction == 4){
				enemy[i].y -= 100;
			}
			enemy[i].alertState = false;
			return;
		}
	}

	checkBoundariesEnemy();
}

function updateShot(){

	for(var i = 0; i<shots.length; i++){

		shots[i].x += shots[i].xToFollow * 10;
		shots[i].y += shots[i].yToFollow * 10;
		
		if(shots[i].x >= canvas.width || shots[i].x < 0){
			shots.splice(i,1)
			return;
		}
	}
}

function updateShotCollision(dt){
	
	for(var i = 0; i<shots.length; i++){
		for(var j = 0; j<enemy.length; j++){
			if(shots[i].x > (enemy[j].x - enemy[j].range) && shots[i].x < (enemy[j].x + enemy[j].width + enemy[j].range)){
				if(shots[i].y > (enemy[j].y - enemy[j].range) && shots[i].y < (enemy[j].y + enemy[j].height + enemy[j].range)){
					enemy[j].alertState = true;
				}
			}
			if(shots[i].x > enemy[j].x && shots[i].x < (enemy[j].x + enemy[j].width)){
				if(shots[i].y > enemy[j].y && shots[i].y < (enemy[j].y + enemy[j].height)){
					shots.splice(i,1);
					enemy.splice(j,1);
					return;
				}	
			}
		}
	}	
}

function render(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	renderEnemy();
	renderPlayer();
	renderShot();

}

function renderEnemy(){
	
	for(var i = 0; i<enemy.length; i++){
		ctx.fillStyle = "blue";
		ctx.fillRect(enemy[i].x,enemy[i].y,50,50);
	}
}

function renderPlayer(){
	ctx.fillStyle = "black";
	ctx.fillRect(x,y,100,100);
}

function renderShot(){
	for(var i = 0; i<shots.length; i++){
		ctx.fillStyle = "green";
		ctx.fillRect(shots[i].x,shots[i].y,10,10);
	}
}

function handleKeyboard(dt){

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

function mouseController(e){
	e=e||event;
	mousePosition[0] = e.screenX;
	mousePosition[1] = e.screenY;
	shots[shots.length] = new Shot(x+40, y+40, mousePosition[0], mousePosition[1]);
	shots[shots.length-1].xToFollow = shots[shots.length-1].mx - shots[shots.length-1].x;
	shots[shots.length-1].yToFollow = shots[shots.length-1].my - shots[shots.length-1].y;
	var hypotenuse = Math.sqrt( (shots[shots.length-1].xToFollow*shots[shots.length-1].xToFollow)+(shots[shots.length-1].yToFollow*shots[shots.length-1].yToFollow) );

	hypotenuse = (hypotenuse==0) ? 1 : hypotenuse;
	shots[shots.length-1].xToFollow /= hypotenuse;
	shots[shots.length-1].yToFollow /= hypotenuse;
}

function initializeKeys(){
	for (var i = 0; i < 123; i++) {
		pressedKeys[i] = false;
	}
}

function checkBoundaries(){
	if(x + 100 >= canvas.width){
		x = canvas.width - 100;
		vx /= 2;
	}
	else if(x <= 0){
		x = 0;
		vx /= 2;
	}
	if(y + 100 >= canvas.height){
		y = canvas.height - 100;
		vy /= 2;
	}
	else if(y <= 0){
		y = 0;
		vy /= 2;
	}
}

function checkBoundariesEnemy(){
	for(var i = 0; i<enemy.length; i++){
		if(enemy[i].x + 100 >= canvas.width){
			enemy[i].x = canvas.width - 100;
		}
		else if(enemy[i].x <= 0){
			enemy[i].x = 0;
		}
		if(enemy[i].y + 100 >= canvas.height){
			enemy[i].y = canvas.height - 100;
		}
		else if(enemy[i].y <= 0){
			enemy[i].y = 0;
		}
	}
}

function randomize(limit){
	return Math.floor(Math.random()*limit)+1;
}

window.onkeydown = KeyPressed;
window.onkeyup = KeyReleased;
canvas.onclick = mouseController;

var lastTime;

function main() {

	var now = window.performance.now();
	var dt = (now - lastTime) / 1000.0;

	update(dt);
	render();

		if(!paused){
			gameTime += dt;
		}

	lastTime = now;
	requestAnimFrame(main);
}

main();
