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
  /*document.onkeydown = function(){
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
  }*/
  bnt.onclick = function(){
    alert(1)
    cmd.value();
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