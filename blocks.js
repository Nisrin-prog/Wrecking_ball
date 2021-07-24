class Block{
    constructor(x,y,w,h){
        var options = {
            restiution : 0.01,
            friction: 0.01,
            density : 0.4
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.w = w
        this.h = h

    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}