class Box  {
    constructor(x,y)   {
        var options = {
            isStatic:true
        }
        this.width1 = 20;
        this.height1 = 150;
        this.width2= 150;
        this.height2 = 20;
        this.bodyLeft = Bodies.rectangle(x,y,this.width1,this.height1,options);
        this.bodyRight = Bodies.rectangle(x+150,y,this.width1,this.height1,options);
        this.bodyBottom = Bodies.rectangle(x+75,y+50,this.width2,this.height2,options);
        
        
        this.image=loadImage("box.png")
        World.add(world,this.bodyLeft);
        World.add(world,this.bodyRight);
        World.add(world,this.bodyBottom);
}

    display()   {
        push();
        var pos = this.bodyLeft.position;
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width1,this.height1);
        pop();

        push();
        var pos2= this.bodyBottom.position;
        translate(pos2.x,pos2.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width2,this.height2);
        pop();

        push();
        var pos3= this.bodyRight.position;
        translate(pos3.x,pos3.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width1,this.height1);
        pop();
        
        push();
        imageMode(CENTER);
        image(this.image, pos2.x, pos2.y-50,190, 170)
        pop();

        

    }
}