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
        block.tra("left");
      break;
      case "TRATOP":
        block.tra("top");
      break;
      case "TRARIG":
        block.tra("right");
      break;
      case "TRABOT":
        block.tra("bottom");
      break;
      case "MOVLEF":
        block.mov("left");
      break;
      case "MOVTOP":
        block.mov("top");
      break;
      case "MOVRIG":
        block.mov("right");
      break;
      case "MOVBOT":
        block.mov("bottom");
      break;
    }
  },
}
var cmd = {
  state:{
    element:document.getElementsByClassName("text")[0],
    num:1,
    nums:0,
    data:{},
    command:[
      "TUNTOP","TUNBAC","TUNLEF","TUNRIG","GO","TRALEF","TRATOP","TRARIG","TRABOT","MOVLEF","MOVTOP","MOVRIG","MOVBOT"
    ],
  },
  // chushihua
  init:function(){
    cmd.state.data = {};
    cmd.state.nums = 0;
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
      cmd.error(st,num);
    }
    //yunxing
    cmd.implement();
    cmd.init();
  },
  // 错误检测和添加正确的命令到data
  error:function(st,num){
    var s = cmd.state;
    var t = cmd.state.command;
    var nums = document.getElementsByClassName("nums");
    var n = 0;
    for(var i=0;i<t.length;i++){
      if(t[i] == st){
        n = 1;
      }
    }
    if(n == 1){
      s.data[s.nums] = [];
      s.data[s.nums].push(st);
      s.data[s.nums].push(num);
      s.nums++;
    }else{
      nums[s.nums].style.background = "red";
      s.nums++;
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
    if(!num){
      num = 1;
    }
    clearInterval(timer);
    var timer = setInterval(function(){
      if(nums == num){
        clearInterval(timer);
      }else{
        block.imp(st);
      }
      nums++
    },500);
  },
  // 遍历所有命令，执行implement()
  ergodic:function(){
    for(var num in cmd.state.data){
      var timer = setTimeout(function(){
        cmd.implement(cmd.state.data[num][0],cmd.state.data[num][1])
      },100);
    }
  }
}