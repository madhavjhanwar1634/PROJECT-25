class Dustbin{
    constructor (x,y,width,height){
var option={
    isStatic:true,
    friction:0.3
    
}
this.body=Bodies.rectangle(x,y,width,height,option)
this.width=width
this.height=height
this.image=loadImage("dustbingreen.png")
World.add(world,this.body)

}
display(){

    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)


}
}
