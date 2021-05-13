const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var BG ;

function preload() {
    getBackgroundImg( )
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var responseJSON=await response.json()
    // write code slice the datetime
    var datetime=responseJSON.datetime
    var hour=datetime.slice(11,13)
    

    // add conditions to change the background images from sunrise to sunset
    if (hour>=04 && hour<=06){
        BG="sunise1.png"
    
    }else if(hour>=06 && hour<=08){
        BG="sunrise2.png"
    }else if(hour>=23 && hour==0){
        BG="sunrise10.png"
 }else if(hour==0 && hour<=03){
    BG="sunset11.png"
}else {
    BG="sunset12.png"
}
    //load the image in backgroundImg variable here

    backgroundImg=loadImage(BG)





}