class Bob{
     constructor(x,y,diameter){
        var options ={
            isStatic:false,
            'restitution': 1.0, 
            'friction': 0.4, 
            'density': 0.2
        }

        this.body = Bodies.circle(x,y,diameter-20,options);
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);

        rectMode(CENTER);

        fill("magenta");
        ellipse(0,0, this.diameter,this.diameter);
        pop();
    }
}
