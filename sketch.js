const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drops;  
var maxdrops= 100;

var world;
function setup()
{
createCanvas(1600, 700);
rectMode(CENTER);


engine = Engine.create();
world = engine.world;

drops= new Drops(200, 300, 4);
Engine.run(engine);
}

function draw()
{
    background(0);
    
    drops.display();

}