class Ball {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("origami.png");
      World.add(world, this.body);
    }

    display(color){
      fill(color);
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      //fill("brown");
      //ellipse(pos.x, pos.y, this.width, this.height);
      image(this.image, pos.x, pos.y, 40,40);
      pop();
    }
  };