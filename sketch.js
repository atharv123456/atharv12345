var canvas;
var music;
var box1,box2,box3,box4,box5;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
//create boxes here

//creating the 1st box here
box1 = createSprite(random(20,750));
box1.shapeColor("grey");
box1.velocityX=2;
box1.velocityY=4;

//creating the 2nd box here
box2 = createSprite();
box2.shapeColor("blue");

//creating the third box here
box3 = createSprite();
box3.shapeColor("red");

//creating 4th box here
box4 = createSprite();
box4.shapeColor("yellow");

//craeting 5th box here
box5 = createSprite();
box5.shapeColor("green");
    

}

function draw() {
    background("cyan");
    //create edgeSprite
    createedgeSprites();

    music.play();
 

box1.bounceOff(edges);

if(box2.isTouching(box1)&&box1.bounceOff(box2)){
    box1.shapeColor="blue";
}

if(box3.isTouching(box1)&&box1.bounceOff(box3)){
    box1.shapeColor="red";
}

if(box4.isTouching(box1)&&box1.bounceOff(box4)){
    box1.shapeColor="yellow";
}

if(box5.isTouching(box1)&&box1.bounceOff(box5)){
    box1.shapeColor="green";
}

if(box2.isTouching(box1)){
    box1.velocityX=0;
    box1.velocityY=0;
    music.stop();
}

if(box3.isTouching(box1)){
    box1.velocityX=0;
    box1.velocityY=0;
    music.stop();
}

if(box4.isTouching(box1)){
    box1.velocityX=0;
    box1.velocityY=0;
    music.stop();
}

if(box5.isTouching(box1)){
    box1.velocityX=0;
    box1.velocityY=0;
    music.stop();
}
  
    drawSprites();
}
