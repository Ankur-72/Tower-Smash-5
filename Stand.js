class Stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height; 
      World.add(world, this.body);
    }
    display(){
        //fill(color(random(0,255), random(0,255), random(0,255)));
        if(keyCode === UP_ARROW){
          console.log("yes");
          fill(color(random(0,255), random(0,255), random(0,255)));
      }
      push();
      translate(this.body.position.x,this.body.position.y);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
