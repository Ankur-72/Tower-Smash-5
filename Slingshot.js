class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.055,
            length: 5
        }
        this.launcher = Constraint.create(options);
        this.pointB = pointB;
     
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
        //console.log(body);
    }
    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        if(keyCode === UP_ARROW){
            console.log("yes");
            //fill();
            strokeWeight(2.25);
            stroke(color(random(0,255), random(0,255), random(0,255)))
        }
        ;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
    }
    

    fly(){
        this.launcher.bodyA = null;
    }

   
    
}