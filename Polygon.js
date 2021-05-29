class Polygon{
    constructor(x, y,) {
       
        this.body = Bodies.circle(10,10,10);
        this.x= x;
        this.y= y;
        World.add(world, this.body);
        this.image = loadImage("polygon.png");
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);21
        imageMode(CENTER)
        image(this.image,5,5)
        pop();
        this.image.scale=0.5
      }
}
