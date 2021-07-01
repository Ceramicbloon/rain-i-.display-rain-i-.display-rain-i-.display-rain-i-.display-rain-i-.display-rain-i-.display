const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var rain = []
var d
var maxDrops = 100
function preload() {

}

function setup() {
    createCanvas(400, 400)
    engine = Engine.create()
    world = engine.world
    //d = new Raindrop(40, 40, 10)
    for (var i = 0; i < maxDrops; i++) {
        rain.push(new Raindrop(random(0, 400), random(-300, 300), 5))
        
    }
}

function draw() {
    
    background(0)
    Engine.update(engine)

    for (var i = 0; i < rain.length; i++) { 
        //rain[i].update()
        rain[i].display()
    }
    

    // d.display()
}

