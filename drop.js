class Drop {
    constructor(x, y, radius) {
      var options = {
          restitution : 0.3,
          friction : 0.1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
  
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill (25, 25, 112);
      ellipse(0, 0, this.radius);
      pop();
      //console.log(pos.y);
      }

      updateY() {
        var pos =this.body.position;
        if(pos.y > 700) {
          Body.setPosition(this.body, {x:random(0, 400), y:random(-10000, 400)});
          //console.log(pos);
        }
      }

  };