
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
var gameTime = 0.0;
var paused = false;
var PLAYER_SPEED = 20;
var PLAYER_FRICTION = 0.99;
var pressingKey;
var enemyCoolDown = 0.5;
var enemy = [];
var shots = [];
var score = 0;

function setupPlayer(player){
	x = player[0].x;
	y = player[0].y;
	vx = player[0].vx;
	vy = player[0].vy;
	createEnemy(400,150);
	createEnemy(600,350);
	createEnemy(500,550);
}

function createEnemy(x, y){
	var img = new Image();
	img.src = "../images/MyChar.png";
	img.onload = function(){
	var sprite = new Sprite(img, [0,1], [32,32], 2, [0,1,2,3,4,5], 'horizontal', false);
	enemy[enemy.length] = new Enemy(x,y, sprite);
	};
}

function Enemy(x, y, sprite){
	this.x = x;
	this.y = y;
	this.width = 50;
	this.height = 50;
	this.sprite = sprite;
	this.alertState = false;
	this.range = 50;
	this.lastTime = 0;
}

function Shot(x, y, mx, my, owner, xToFollow, yToFollow){
	this.x = x;
	this.y = y;
	this.mx = mx;
	this.my = my;
	this.owner = owner
	this.xToFollow = xToFollow;
	this.yToFollow = yToFollow;
}

function update(dt){

	//jQuery.ajax({type:'POST',data:'attr=' + vx, url:'/JogoParadigmas/player/printa'});
	if(pressingKey){
		PLAYER_FRICTION = 0.98;
	}
	else{
		PLAYER_FRICTION = 0.95;
	}

	handleKeyboard(dt);
	updateEnemy(dt);
	updateShotCollision();
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

function updateEnemy(dt){

	for(var i = 0; i<enemy.length; i++){

		enemy[i].lastTime += dt;
	
		if(enemy[i].alertState && enemy[i].lastTime > enemyCoolDown){

			var direction = randomize(3) + 1;
			if(direction == 1){
				enemy[i].x += enemy[i].width;
			}
			else if(direction == 2){
				enemy[i].x -= enemy[i].width*2;
			}
			else if(direction == 3){
				enemy[i].y += enemy[i].height;
			}
			else if(direction == 4){
				enemy[i].y -= enemy[i].height*2;
			}
			spamShot(enemy[i].x + enemy[i].width/2, enemy[i].y + enemy[i].height/2, x, y, "enemy");
			enemy[i].alertState = false;
			enemy[i].lastTime = 0;
			continue;
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

function updateShotCollision(){
	
	for(var i = 0; i<shots.length; i++){
		for(var j = 0; j<enemy.length; j++){
			if(shots[i].x > (enemy[j].x - enemy[j].range) && shots[i].x < (enemy[j].x + enemy[j].width + enemy[j].range)){
				if(shots[i].y > (enemy[j].y - enemy[j].range) && shots[i].y < (enemy[j].y + enemy[j].height + enemy[j].range)){
					if(enemy[j].lastTime > enemyCoolDown)
						enemy[j].alertState = true;
				}
			}
			if(shots[i].x > enemy[j].x && shots[i].x < (enemy[j].x + enemy[j].width) && shots[i].owner == "player"){
				if(shots[i].y > enemy[j].y && shots[i].y < (enemy[j].y + enemy[j].height)){
					shots.splice(i,1);
					enemy.splice(j,1);
					createEnemy(randomize(canvas.width/50) * 50, randomize(canvas.height/50) * 50);
					score++;
					return;
				}	
			}
			if(shots[i].x > x && shots[i].x < (x + 100) && shots[i].owner == "enemy"){
				if(shots[i].y > y && shots[i].y < (y + 100)){
					alert("player morto, score: " + score);
				}	
			}
		}
	}	
}

function renderAll(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	renderEnemy();
	renderPlayer();
	renderShot();

}

function renderEnemy(){
	
	for(var i = 0; i<enemy.length; i++){
		enemy[i].sprite.render(enemy[i].x, enemy[i].y);
	}
}

function renderPlayer(){
	ctx.fillStyle = "black";
	ctx.fillRect(x,y,100,100);
}

function renderShot(){
	for(var i = 0; i<shots.length; i++){
		if(shots[i].owner == "player")
			ctx.fillStyle = "green";
		if(shots[i].owner == "enemy")
			ctx.fillStyle = "red";
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
	spamShot(x+40, y+40, mousePosition[0] - 197, mousePosition[1] - 136 - (240 - window.pageYOffset), "player");

}

function spamShot(posX, posY, destX, destY, owner){
	
	shots[shots.length] = new Shot(posX, posY, destX, destY, owner);
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

function Sprite(img, pos, size, speed, frames, dir, once) {
		this.img = img; // The path to the image for this sprite
		this.pos = pos; // The x,y coordinate in the image for this sprite
		this.size = size; // Size of the sprite (the keyframe)
		this.speed = typeof speed === 'number' ? speed : 0; // Speed in frames per second for animating
		this.frames = frames; // An array of frame indexes for animating
		this.dir = dir || 'horizontal'; // Which direction to move in the sprite map when animating
		this.once = once; // True to run the animation once, defaults to false
		this._index = 0;
		this.width = this.size[0];
		this.height = this.size[1];
	};

	Sprite.prototype = {
		update: function(dt) {
			this._index += this.speed*dt;
		},

		render: function(posX, posy) {
			var frame;

			if(this.speed > 0) {
				var max = this.frames.length;
				var idx = Math.floor(this._index);
				frame = this.frames[idx % max];

				if(this.once && idx >= max) {
					this.done = true;
					return;
				}
			}
			else {
				frame = 0;
			}


			var animX = this.pos[0];
			var animY = this.pos[1];

			if(this.dir == 'vertical') {
				animY += frame * this.size[1];
			}
			else {
				animX += frame * this.size[0];
			}

			ctx.drawImage(this.img,
						animX, animY,
						this.size[0], this.size[1],
						posX, posy,
						this.size[0], this.size[1]);
		}
	};

var lastTime = 0;

function main() {

	var now = window.performance.now();
	var dt = (now - lastTime) / 1000.0;

	update(dt);
	renderAll();

	if(!paused){
			gameTime += dt;
	}	

	lastTime = now;
	requestAnimFrame(main);
}

main();
