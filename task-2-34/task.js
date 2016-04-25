var a = [];
var grid = function (obj){
  this.xy = obj.xy;
  this.state = obj.state;
  this.parent = obj.parent;
  this.node = obj.node;     // 节点
}
grid.prototype = {
  add:function(){
    var div = document.createElement("div");
    div.className = this.xy[0] +"-"+this.xy[1];
    this.parent.appendChild(div);
    this.node = div;
    this.node.nodes = this;
    return this;
  },
}
var block = {
  state:{
    x:0,              // 默认x轴 0 ;
    y:0,              // 默认y轴 0 ;
    dir:"top",        // 方块的默认向上;
    element:document.getElementById("as")      // element
  },
  // 动作:先改变状态再运动
  action:function(dir){
    switch(dir){
      case "top":
        block.dir("top");
      break;
      case "bottom":
        block.dir("bottom");
      break;
      case "left":
        block.dir("left");
      break;
      case "right":
        block.dir("right");
      break;
      case "go":
        if(block.state.dir == "top"){
          block.tra("top")
        }else if(block.state.dir == "bottom"){
          block.tra("bottom")
        }else if(block.state.dir == "left"){
          block.tra("left")
        }else if(block.state.dir == "right"){
          block.tra("right")
        }
      break;
    }
  },
  // 动作:不改变状态直接运动
  tra:function(dir){
    switch(dir){
      case "top":
        if(block.state.x<=0){
          return;
        }else{
          block.state.x --;
          block.move(block.state.x,block.state.y);
        }
      break;
      case "bottom":
        if(block.state.x>=9){
          return;
        }else{
          block.state.x++;
          block.move(block.state.x,block.state.y);
        }
      break;
      case "left":
        if(block.state.y<=0){
          return;
        }else{
          block.state.y--;
          block.move(block.state.x,block.state.y);
        }
      break;
      case "right":
        if(block.state.y>=9){
          return;
        }else{
          block.state.y++;
          block.move(block.state.x,block.state.y);
        }
      break;

    }
  },
  // 动作: 动作和运动一起改变
  mov:function(dir){
    switch(dir){
      case "top":
        if(block.state.x<=0){
          return;
        }else{
          block.state.x --;
          block.move(block.state.x,block.state.y);
          block.dir(dir);
        }
      break;
      case "bottom":
        if(block.state.x>=9){
          return;
        }else{
          block.state.x++;
          block.move(block.state.x,block.state.y);
          block.dir(dir);
        }
      break;
      case "left":
        if(block.state.y<=0){
          return;
        }else{
          block.state.y--;
          block.move(block.state.x,block.state.y);
          block.dir(dir);
        }
      break;
      case "right":
        if(block.state.y>=9){
          return;
        }else{
          block.state.y++;
          block.move(block.state.x,block.state.y);
          block.dir(dir);
        }
      break;
    }
  },
  //移动节点
  move:function(x,y){
    var top = x*51;
    var left = y*51;
    block.state.element.style.top = top + "px";
    block.state.element.style.left = left + "px";
  },
  // 改变他们的状态
  dir:function(d){
    block.state.dir = d;
    block.state.element.className = d;
  },
}
var cc = function(){
  var across = document.getElementsByClassName("across");
  var content = document.getElementsByClassName("content")[0];
  for(var i=0;i<10;i++){
    a[i] = [];
    for(var j=0;j<10;j++){
      a[i].push(new grid({xy:[i,j],parent:across[i]}).add())
    }
  }
}
function move(){
  var bnt = document.getElementsByClassName("bnt")[0];
  document.onkeydown = function(){
    var e = window.event ;
    // 按w键或者上键
    if(e && e.keyCode == 87 || e && e.keyCode == 38){
      block.mov("top");
    // 按s键或者下键
    }else if(e && e.keyCode == 83 || e && e.keyCode == 40){
      block.mov("bottom");
    // 按a键或者左键
    }else if(e && e.keyCode == 65 || e && e.keyCode == 37){
      block.mov("left");
    // 按d键或者右键
    }else if(e && e.keyCode == 68 || e && e.keyCode == 39){
      block.mov("right");
    }
  }
  bnt.onclick = function(){
    var value = document.getElementsByClassName("text")[0].value;
    switch (value){
      case "TUN TOP":
        block.action("top");
      break;
      case "TUN BAC":
        block.action("bottom");
      break;
      case "TUN LEF":
        block.action("left");
      break;
      case "TUN RIG":
        block.action("right");
      break;
      case "GO":
        block.action("go");
      break;
      case "TRA LEF":
        block.tra("right");
      break;
      case "TRA TOP":
        block.tra("right");
      break;
      case "TRA RIG":
        block.tra("right");
      break;
      case "TRA BOT":
        block.tra("right");
      break;
      case "MOV LEF":
        block.mov("right");
      break;
      case "MOV TOP":
        block.mov("right");
      break;
      case "MOV RIG":
        block.mov("right");
      break;
      case "MOV BOT":
        block.mov("right");
      break;
    }
  }
}
function init(){
  cc();
  move()
}
init();