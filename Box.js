class Box {
    constructor (x,y,width,height) {
        var options = {
            restitution:0.4,
            friction:1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    fill(color(random(0,252),random(0,252),random(0,252)));

    if (this.body.speed < 7) {
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height)
        pop ();
    } else {
        push ();
            World.remove(world,this.body);
            this.visiblity = this.visiblity-5
            tint(255,this.visiblity)
        pop();
        
    }

}


}