const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var rain = [];
var ground;
var bruce, lightening;
var b1, b2, b3, b4, b5, b6, b7, b8;
var maxdrops = 1000;
var umbrella, umbrella2;

function preload(){

    b1 = loadAnimation("Bruce/walking_1.png", "Bruce/walking_2.png", "Bruce/walking_3.png", "Bruce/walking_4.png", "Bruce/walking_5.png", "Bruce/walking_6.png", "Bruce/walking_7.png", "Bruce/walking_8.png");
    l1 = loadAnimation("lightening/1.png", "lightening/4.png", "lightening/3.png", "lightening/2.png");

}

function setup(){
    ellipseMode(CENTER);
    createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;

    ground = createSprite(200, 780, 500, 50);
    ground.shapeColor = "lightblue";

    bruce = createSprite(200, 610, 20, 200);
    bruce.addAnimation("walking", b1);
    bruce.scale = 0.5;

    umbrella = Bodies.rectangle(200, 460, 150, 10);
    umbrella.visible = false;
    umbrella2 = Bodies.rectangle(120, 500, 10, 70);
    umbrella2.visible = false;

    lightening = createSprite(200, 100, 10, 10);
    lightening.addAnimation("working", l1);
    lightening.scale = 0.5;


    for(var i = 0; i < maxdrops; i++) {
        rain.push(new Drop(random(0, 400), random(-10000, 400), 10));
    }

    drawSprites();
    //console.log(rain);
}

function draw(){
    background("black");
    Engine.update(engine);

    for(var j = 0; j < maxdrops; j++) {
        rain[j].display();
        rain[j].updateY();
    }

    drawSprites();
}   

