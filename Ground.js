class Ground {
    constructor() {
        var options = {isStatic: true}
        this.ground = Bodies.rectangle(600,550,1500,20,options)
        World.add(world, this.ground)      
    }
    display() {
        noStroke();
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,10000,20);
    }
}