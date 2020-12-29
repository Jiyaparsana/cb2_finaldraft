

class Dustbin{
    constructor(x,y,width,height){

        var options={
            'isStatic':false,
            'restitution':0,
            'friction':1.0,
           'density':0.05
        }
        
this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
this.width = 150;
this.height = 150;
this.image=loadImage("dustbin.png")
World.add(world, this.body);

    }
    display(){
rectMode(CENTER)
var pos = this.body.position
rectMode(CENTER);
rect(this.image, pos.x, pos.y, this.width, this.height);

    }
}