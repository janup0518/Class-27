class Slingshot{
    constructor(body1, body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:150,
            stiffness:0.1
        }
        this.body= Constraint.create(options)
        World.add(world, this.body)
    }
    display(){
        //line(x1,y1,x2,y2)
        push()
        strokeWeight(3)
        line(this.body.bodyA.position.x, this.body.bodyA.position.y,this.body.bodyB.position.x, this.body.bodyB.position.y )
        pop()
    }
}