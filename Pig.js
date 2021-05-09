class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255;
  }
display(){
console.log(this.body.speed);
if(this.body.speed<3){
  super.display();
}
else{
World.remove(world,this.body);
push()
this.Visiblity=this.Visiblity-5
// tint adds the transparent layer to the image
// 255 means fully visible and 0 means not visible
tint(255,this.Visiblity);
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop()
}
}
};