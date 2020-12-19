class BaseClass1{
    constructor(diameter){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.body=Bodies.circle(100,200,diameter,options)
    this.diameter=diameter
    this.image=loadImage("New folder (2)/download (1).png")
    World.add(world,this.body)
    }
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
}