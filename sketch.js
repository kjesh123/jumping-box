var PLAY=1
var END=0
var gameState
var canvas;
var music;
var surface1,surface2,surface3,surface4,box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(50,580,200,30);
surface1.shapeColor=rgb(0,0,200)

surface2=createSprite(265,580,200,30);
surface2.shapeColor= rgb(255,128,0)

surface3=createSprite(480,580,200,30);
surface3.shapeColor=rgb(100,80,80)

surface4=createSprite(695,580,200,30);
surface4.shapeColor=rgb(0,100,0)

    //create box sprite and give velocity
    box=createSprite(random(20,750))
    box.shapeColor="white"
    box.velocityX=5
    box.velocityY=5
    box.scale=0.5

}

function draw(){ 
if (gameState===(PLAY)){
    music.play();
}
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites();
box.bounce(surface4)
box.bounce(surface3)
box.bounce(surface2)
box.bounce(surface1)

    drawSprites();
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)){
        box.shapeColor=rgb(0,0,200)
    }if(surface2.isTouching(box)){
        box.shapeColor=rgb(255,128,0)
        box.velocityX(0)
        music.stop();

    }if(surface4.isTouching(box)){
        box.shapeColor=rgb(100,80,80)
    }
    if(surface4.isTouching(box)){
        box.shapeColor=rgb(0,100,0)
    }

}
