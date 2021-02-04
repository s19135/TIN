// const fs = require('fs');
// const file = fs.readFileSync('./data/player_data.json', 'utf-8');
// var json_obj = JSON.parse(file);
// var highScore = json_obj.high_score;
// all this comments are because when i tried to make a nodejs sever firstly there was a problem with sound permission
// then i got a problem with fs, so i decided to create a new project and put here everything that worked, also there appeared a problem with shifting the game. 
// I spend ton of nervs looking for the solution. Prabably this is because my browser.


var score = 0;
var audio = new Audio('music/PHONK.mp3');
audio.play();

class Road
{
    constructor(image, y)
    {
        this.x = 0;
        this.y = y;
        this.loaded = false;

        this.image = new Image();

        var obj = this;

        this.image.addEventListener("load", function () { obj.loaded = true; });

        this.image.src = image;
    }

    Update(road)
    {
        this.y += speed;

        if(this.y > window.innerHeight)
        {
            this.y = road.y - canvas.width + speed;
        }
    }
}

class Coin
{
    constructor(image, x, y){
        this.x = x;
        this.y = y;
        this.loaded = false;

        this.image = new Image();
        var obj = this;

        this.image.addEventListener("load", function () {
            obj.loaded = true;
        })
        this.image.src = image;
    }
    Update(coin)
    {
        this.y += speed;

        if(this.y > canvas.height + 50)
        {
            this.dead = true;
        }
    }
}
class Car
{
    constructor(image, x, y, isPlayer)
    {
        this.x = x;
        this.y = y;
        this.loaded = false;
        this.dead = false;
        this.isPlayer = isPlayer;
        this.image = new Image();
        var obj = this;
        this.image.addEventListener("load", function () { obj.loaded = true; });
        this.image.src = image;
    }

    Update()
    {
        if(!this.isPlayer)
        {
            this.y += speed;
        }

        if(this.y > canvas.height + 50)
        {
            this.dead = true;
        }
    }

    Collide(car)
    {
        var hit = false;

        if(this.y < car.y + car.image.height * scale && this.y + this.image.height * scale > car.y)
        {
            if(this.x + this.image.width * scale > car.x && this.x < car.x + car.image.width * scale)
            {
                hit = true;
            }
        }

        return hit;
    }

    Move(v, d)
    {
        if(v === "x")
        {
            d *= 2;

            this.x += d;

            if(this.x + this.image.width * scale > canvas.width)
            {
                this.x -= d;
            }

            if(this.x < 0)
            {
                this.x = 0;
            }
        }
        else
        {
            this.y += d;

            if(this.y + this.image.height * scale > canvas.height)
            {
                this.y -= d;
            }

            if(this.y < 0)
            {
                this.y = 0;
            }
        }

    }
}

const UPDATE_TIME = 1000 / 60;

var timer = null;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var scale = 0.1;

//
// sound_image = new Image();
// sound_image.src = 'images/sound.png';
// ctx.drawImage(sound_image, 0, 0, 100,100);
// sound_image.addEventListener("mousedown", clicked, false);

// function clicked(e){
// 	e.preventDefault();
// 	var x = e.clientX;
// 	var y = e.clientY;
//
// 	if(x>0 && x<100 && y>0 && y>100){ //780 = 580+(200) <- image width
// 		alert('Hello');
// 	}
// // }
//
//
// var C = (function() {
// 	ctx.beginPath();
// 	ctx.moveTo(20, 20);
// 	ctx.lineTo(60, 20);
// 	ctx.moveTo(20, 20);
// 	ctx.lineTo(20, 230);
// 	ctx.moveTo(60, 20);
// 	ctx.lineTo(60, 160);
// 	ctx.moveTo(60, 160);
// 	ctx.lineTo(75, 160);
// 	ctx.moveTo(75, 160);
// 	ctx.lineTo(75, 230);
// 	ctx.moveTo(75, 230);
// 	ctx.lineTo(20, 230);
// 	ctx.stroke();
// 	return (this);
// });
//
// var sound = new Audio("music/PHONK.mp3");
// sound.preload = 'auto';
// sound.load();
//
// function playSound(volume) {
// 	C();
// 	var click = sound.cloneNode();
// 	click.volume = volume;
// 	click.play();
// }


Resize();
window.addEventListener("resize", Resize);
canvas.addEventListener("contextmenu", function (e) { e.preventDefault(); return false; });

window.addEventListener("keydown", function (e) { KeyDown(e); });

var enemies = [];
var coins = [];

var roads =
    [
        new Road("images/road.jpg", 0),
        new Road("images/road.jpg", canvas.width)
    ];

var player = new Car("images/car.png", canvas.width / 2, canvas.height / 2, true);


var speed = 5;

Start();


function Start()
{

    alert("3");
    alert("2");
    alert("1");
    alert("PHONK (make 10% sound in order not to kill your ears)");
    if(!player.dead)
    {
        timer = setInterval(Update, UPDATE_TIME);
    }

}

function Stop()
{
    clearInterval(timer);
    timer = null;
}

function Update()
{
    roads[0].Update(roads[1]);
    roads[1].Update(roads[0]);

    if(RandomInteger(0, 1000) > 970)
        enemies.push(new Car("images/car_red.png", RandomInteger(30, canvas.width - 50), RandomInteger(250, 400) * -1, false));

    if (RandomInteger(0, 1000) > 995)
        coins.push(new Coin("images/coin.png", RandomInteger(30, canvas.width - 50), RandomInteger(250, 400) * -1));

    player.Update();

    if(player.dead)
    {
        alert("Game Over!");
        Stop();
    }

    var isDeadCar = false;
    var isDeadCoin = false;

    for(var i = 0; i < enemies.length; i++)
    {
        enemies[i].Update();

        if(enemies[i].dead)
            isDeadCar = true;
    }

    for(var i = 0; i < coins.length; i++)
    {
        coins[i].Update();

        if(coins[i].dead)
            isDeadCoin = true;
    }

    if(isDeadCoin)
        coins.shift();

    if(isDeadCar)
        enemies.shift();

    var hitCar = false;
    var hitCoin = false;

    for(var i = 0; i < enemies.length; i++)
    {
        hitCar = player.Collide(enemies[i]);

        if(hitCar)
        {
            alert("Game Over!");
            Stop();
            player.dead = true;
            break;
        }
    }

    for(var i = 0; i < coins.length; i++)
    {
        hitCoin = player.Collide(coins[i]);

        if(hitCoin)
        {
            score += 1000;
            coins[i].dead = true;
        }
    }

    Draw();
}
function Draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(var i = 0; i < roads.length; i++)
    {
        ctx.drawImage
        (
            roads[i].image,
            0,
            0,
            roads[i].image.width,
            roads[i].image.height,
            roads[i].x,
            roads[i].y,
            canvas.width,
            canvas.width
        );
    }

    DrawCar(player);
    DrawHighScore();
    for(var i = 0; i < enemies.length; i++)
        DrawCar(enemies[i]);

    for(var i = 0; i < coins.length; i++)
        DrawCar(coins[i]);
}

function DrawHighScore(){
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    //ctx.fillText(`High Score: ${highScore}`, 10, 100);
    ctx.fillText(`Score: ${score}`, 10, 50);
    score += 1;
}s

function DrawCar(car)
{
    ctx.drawImage
    (
        car.image,
        0,
        0,
        car.image.width,
        car.image.height,
        car.x,
        car.y,
        car.image.width * scale,
        car.image.height * scale
    );
}

function KeyDown(e)
{
    switch(e.keyCode)
    {
        case 37:
            player.Move("x", -speed);
            break;

        case 39:
            player.Move("x", speed);
            break;

        case 38:
            player.Move("y", -speed);
            break;

        case 40:
            player.Move("y", speed);
            break;

        case 27:
            if(timer == null)
            {
                Start();
            }
            else
            {
                Stop();
            }
            break;
    }
}

function Resize()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function RandomInteger(min, max)
{
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}