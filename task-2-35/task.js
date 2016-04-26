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
  imp:function(va){
    switch (va){
      case "TUNTOP":
        block.action("top");
      break;
      case "TUNBAC":
        block.action("bottom");
      break;
      case "TUNLEF":
        block.action("left");
      break;
      case "TUNRIG":
        block.action("right");
      break;
      case "GO":
        block.action("go");
      break;
      case "TRALEF":
        block.tra("right");
      break;
      case "TRATOP":
        block.tra("right");
      break;
      case "TRARIG":
        block.tra("right");
      break;
      case "TRABOT":
        block.tra("right");
      break;
      case "MOVLEF":
        block.mov("right");
      break;
      case "MOVTOP":
        block.mov("right");
      break;
      case "MOVRIG":
        block.mov("right");
      break;
      case "MOVBOT":
        block.mov("right");
      break;
    }
  },
}
var cmd = {
  state:{
    element:document.getElementsByClassName("text")[0],
    num:1,
    data:{},
    command:[
      "TUNTOP","TUNBAC","TUNLEF","TUNRIG","GO","TRALEF","TRATOP","TRARIG","TRABOT","MOVLEF","MOVTOP","MOVRIG","MOVBOT"
    ],
  },
  // 获取value，把他们的数据处理成:
  // nums:[st,num];   nums:命令的编号，从0开始;   st:命令的类型;    num:执行的次数;
  value:function(){
    var t = cmd.state;
    var da = [];
    da = cmd.state.element.value.split("\n");
    for(var i=0;i<da.length;i++){
      var st = da[i].replace(/[^a-z]/ig,"");
      var num = da[i].replace(/[^0-9]/ig,"");
      t.data[i] = [];
      t.data[i].push(st);
      t.data[i].push(num);
    }
  },
  // 错误检测,如果正确，返回true
  error:function(){
    var t = cmd.state.command;
    var nums = document.getElementsByClassName("nums");
    for(var num in cmd.state.data){
      var num = 0;
      for(var i=0;i<t.length;i++){
        if(t[i] == cmd.state.data[num][0]){
          num = 1;
        }
      }
      if(num == 0){
        console.log("good")
      }else{
        nums[num].style.background = "red";
        console.log("err")
      }
    }

    for(var i=0;i<t.length;i++){
      for(var num in cmd.state.data){
        if(t[i] !== cmd.state.data[num][0]){
          nums[num].style.background = "red";
        }else{
          return true;
        }
      }
    }
  },
  rows: function(){
    var div = document.getElementsByClassName("num")[0];
    cmd.state.num ++;
    div.innerHTML += "<div class='nums'>"
                  +  cmd.state.num
                  +  "</div>";
  },
  // 执行单个命令
  implement:function(st,num){
    var nums = 0;
    clearInterval(timer);
    var timer = setInterval(function(){
      if(nums == num){
        clearInterval(timer);
      }else{
        block.imp(st);
      }
      nums++
    },100);
  },
  // 遍历所有命令，执行implement()
  ergodic:function(){
    for(var num in cmd.state.data){
      var timer = setInterval(function(){
        if(nums == num){
          clearInterval(timer);
        }else{
          block.imp(st);
        }
        nums++
      },100);
    }
  }
}