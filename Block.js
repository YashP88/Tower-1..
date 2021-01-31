class Block {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.3,
        friction:0.3,
        density:0.3
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(210,47,54);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
