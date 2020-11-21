class Paper{
    constructor (x,y,r){
var option={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body=Bodies.circle(x,y,r,option)
this.r=r
this.image=loadImage("paper.png")
World.add(world,this.body)

    }
    display(){
        fill("blue")
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)

    }
}