class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
   
        
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        
        
        if(this.sling.bodyA){
            this.sling = this.sling.bodyA.position;
            this.sling = this.pointB;
            //colour for the rubberband
            stroke(48,22,8);
            strokeWeight(4)
          



        }
    }
    
}