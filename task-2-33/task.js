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
    element:null      // element
  },
  add:function(){
    if(block.state.element){
      return;
    }
    var element = a[block.state.x][block.state.y].node;
    var iblock = document.createElement("div");
    iblock.id = "as";
    iblock.className = block.state.dir;
    element.appendChild(iblock);
    block.state.element = iblock;
  },
  // 动作
  action:function(dir){
    if(block.state.dir == dir){
      if(dir == "left" || dir == "right"){
        if(dir == "left"){
          if(block.state.y <= 0){
            return;
          }else{
            block.state.y--;
            block.move();
          }
        }else{
          if(block.state.y >= 9){
            return;
          }else{
            block.state.y++;
            block.move();
          }
        }
        console.log(block.state.y)
      }else{
        if(dir == "top"){
          if(block.state.x <= 0){
            return;
          }else{
            block.state.x --;
            block.move();
          }
        }else{
          if(block.state.x >= 9){
            return;
          }else{
            block.state.x ++;
            block.move();
          }
        }
        console.log(block.state.x)
      }
    }else{
      block.state.dir = dir;
      block.state.element.className = block.state.dir;
      console.log(block.state.dir)
    }
  },
  //移动节点
  move:function(){
    if(!block.state.element){
      return;
    }
    var element = a[block.state.x][block.state.y].node;
    element.insertBefore(block.state.element,element.childNodes[0]);
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
    var e = event || window.event ;
    // 按w键或者上键
    if(e && e.keyCode == 87 || e && e.keyCode == 38){
      block.action("top");
    // 按s键或者下键
    }else if(e && e.keyCode == 83 || e && e.keyCode == 40){
      block.action("bottom");
    // 按a键或者左键
    }else if(e && e.keyCode == 65 || e && e.keyCode == 37){
      block.action("left");
    // 按d键或者右键
    }else if(e && e.keyCode == 68 || e && e.keyCode == 39){
      block.action("right");
    }
  }
  bnt.onclick = function(){
    var value = document.getElementsByClassName("text")[0].value;
    switch (value){
      case "up":
        block.action("top");
      break;
      case "down":
        block.action("bottom");
      break;
      case "left":
        block.action("left");
      break;
      case "right":
        block.action("right");
      break;
    }
  }
}
function init(){
  cc();
  block.add();
  move()
}
init();