class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.launcherObject = Constraint.create(options);
        World.add(world, this.launcherObject );
    }

    fly(){
        this.launcherObject.bodyA=null;
    }

    Launch(bodyA){
        this.launcherObject.bodyA=bodyA;
    }

    display(){
       
    }
    
}