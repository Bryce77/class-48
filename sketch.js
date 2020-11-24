const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var edges;

var manThing;

var cloudsGroup;

var form, player, game;
var allPlayers;
var gameState = 0;
var database;

var spikes,coin,plank,jungle,man;

var ground;
var playerCount;

var score;

function preload() {
    spikes = loadImage("sprites/Spikes.PNG");
    coin = loadImage("sprites/Coin.jpg");
   jungle = loadImage("sprites/jungle.jpg");
   man = loadImage("sprites/man.png");
}

function setup(){
    var canvas = createCanvas(displayWidth-6,displayHeight-115);
    engine = Engine.create();
    world = engine.world;

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  cloudsGroup = new Group();
 score = 0;
  

}

function draw(){
  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  fill("red");
textSize(45);
  text(score,displayWidth-600,200);
}