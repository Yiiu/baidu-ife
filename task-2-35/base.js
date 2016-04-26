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
  }
}
var scroll = function(){
  var text = document.getElementsByClassName("text")[0];
  text.onscroll = function(){
    var nums = document.getElementsByClassName("nums")[0];
    nums.style.marginTop = -text.scrollTop + "px";
  }
}
var rows = function(){
  var text = document.getElementsByClassName("text")[0];
  text.onkeydown = function(e){
    var e = e || window.event;
    if(e.keyCode == 13){
      cmd.rows();
    }
  }
}
function init(){
  cc();
  move()
  rows()
  scroll()
}
init();