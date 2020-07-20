class waste{
        constructor(x, y,radius) {
                var options = {
                     isStatic:false,   
                    restitution :1,
                    friction:1.0,
                    density:1.0
                }
                this.x=x;
                this.y=y;
                this.radius=radius;
                this.body =Bodies.circle(this.x,this.y,this.radius,options);
                this.waste1=loadImage("paper.png");
                World.add(world, this.body);
              }
              display(){
                image(this.waste1,20,200,70,70)
                push();
               // fill("pink");
               
                translate(this.body.position.x, this.body.position.y);
                image(this.waste1,20,200,70,70)
                //ellipseMode(RADIUS);
               // ellipse(0,0,this.radius,this.radius);
                pop();
              } 
      }