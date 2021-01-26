class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }
  display(){
console.log(this.body.speed);
if(this.body.speed<3){
  super.display();
}
else{
  World.remove(world,this.body);
  push();
  this.Visiblity = this.Visiblity - 5;
  tint(255, this.Visiblity);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  pop();
}
}
};


//Color/transparency is measured between 0 to 255
//0 -> 1 fully OFF byte(00000000)
//255 => 1 fully ON byte(11111111)

//Each key is identified by a "keyCode"

