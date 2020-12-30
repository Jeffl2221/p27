class Link{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:500
        
        }
        this.pointB=pointB;
        this.link =Constraint.create(option) 
        World.add(world, this.link);
        
    }
    display(){
        var posA =this.link.bodyA.position
        var posB =this.pointB;
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}