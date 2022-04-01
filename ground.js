class Ground{
    constructor(x , y, width, heigth){

        var options={
            isStatic: true
        }

        this.w = width;
        this.h = heigth;

        this.body = Bodies.rectangle(x , y, this.w, this.h, options);
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        Matter.Body.rotate(this.body, angle);

        push();
        rectMode(CENTER);
        stroke("yellow");
        fill("orange");

        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.w, this.h);
        pop();
        angle +=0.1;

    }
}