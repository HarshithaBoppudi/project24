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
              
                World.add(world, this.body);
              }
              display(){
                push();
                fill("pink");
                translate(this.body.position.x, this.body.position.y);
                ellipseMode(RADIUS);
                ellipse(0,0,this.radius,this.radius);
                pop();
              } 
      }