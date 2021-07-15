class Ground
{
    constructor(x,y,width,height){

        let options={
            isStatic:true
        }
       this.body=Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body);
       this.w=width;
       this.h=height;
    }

    display() {
        
        var pos =this.body.position;
        push ();
        rectMode(CENTER)
        fill ("green");
        stroke (255);
        rect(pos.x,pos.y,this.w,this.h);
        pop ();


    }




}