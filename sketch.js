var balls = []
var ball
var colors = "E26761-6693A0-EBC06F-605951".split("-").map(a=>"#"+a)
class ball_class{ //宣告一個ball_class物件
  constructor(args){  //描述物件的初始值，只有設定物件的資料內容
    this.p = args.p || {x:width/2,y:height/2} //球位置
    this.w = args.w || random(30,150)
    this.h = args.h || random(30,150)
    //this.r = args.r || random(50,150)  //球大小
    this.color = args.color || random(colors)
    this.v = args.v || {x:random(-5,5),y:random(-5,5)}
    this.a = args.a || {x:0,y:random(0.7,1.2)} //加速度
    this.rid = random(100)
    this.dc1 = args.dc1 || random(1,10)
    this.dc2 = args.dc2 || random(1,10)
    this.dc3 = args.dc3 || random(1,10)
    this.dc4 = args.dc4 || random(1,10)
    this.sw = args.sw || random(2,this.w/3.5)
  }
    
  draw(){
    push()
      translate(this.p.x,this.p.y)  //把原點設定到圓心
      stroke(this.color);
      //let dc1 = random(1,10);
      //let dc2 = random(1,10);
      //let dc3 = random(1,10);
      //let dc4 = random(1,10);
      
      let d = this.w/1.5;
      //let sw = random(2,this.w/3.5);
      
    noFill();
      
    if(random(100)<50){
    drawingContext.setLineDash([this.dc1,this.dc2,this.dc3,this.dc4]);
    strokeCap(SQUARE);   
    strokeWeight(this.sw);
    circle(0 , 0, d);      
    }else{

    strokeWeight(this.sw/1.3);      
    drawingContext.setLineDash([1,this.sw*random(1,1)]);
    strokeCap(ROUND);        
    circle(0 , 0, d); 
    noStroke();
    fill(this.color);
    circle(0 , 0, d/3); 
    }   
      pop() //把原點恢復到左上角
    
    
  }
  update(){
    
      this.p.x = this.p.x + this.v.x 
      this.p.y = this.p.y + this.v.y
    
    if(this.p.x<0){
      this.v.x = -this.v.x
    }
    if(this.p.x>width){
      this.v.x = -this.v.x
    }
    if(this.p.y<0){
      this.v.y = -this.v.y
    }
    if(this.p.y>height){
      this.v.y = -this.v.y
    }
  }
  isBAllInRange(){ //計算物件與滑鼠間的距離是否小於直徑
    //d:把目前這個物件的位置與滑鼠間的距離
    let e = dist(mouseX,mouseY,this.p.x,this.p.y)
    if(e<this.r){
      return true
    }
    else{
      return false
    }
  }
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  for(i=0;i<50;i++){
    ball= new ball_class({  //傳一串參數值到class內
      v:{x:random(-2,2),y:random(-2,2)},
      p:{x:random(0,width),y:random(0,height)},
      a:{x:0,y:0}
    })
    balls.push(ball) //把產生的ball物件推(存)入到balls陣列內
  }
}

function draw() {
  background("#F2EDEC");
  noStroke()
  for(j=0;j<balls.length;j++){
    ball = balls[j]
    ball.draw()
    ball.update()
    
  }
}

