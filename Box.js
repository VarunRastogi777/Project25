class Box extends BaseClass {
    constructor(x, y, width, height) {
       var options={
          isStatic:true,
          restitution:0
       }
       super(x,y,width,height)
       this.image=loadImage("New folder (2)/dustbingreen.png")
    }
  };
  