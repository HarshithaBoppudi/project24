class dustbin{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            'friction':1.0,
            'density':1.0
        }
        this.width = width;
        this.height = height;
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(this.x, this.y,this.width,this.height, options);
        this.dustbin1=loadImage("dustbingreen.png");
        World.add(world, this.body);
      }
      display(){
       
       // fill("aqua");
        
        push();
       
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.dustbin1,0,0,200,200);
       // rectMode(CENTER);
        pop();
       // rect(this.body.position.x,this.body.position.y ,this. width,this.height);
       
      }
}