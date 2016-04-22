var a = [];
function grid(obj){
  this.xy = obj.xy;
  this.state = obj.state;
  this.parent = obj.parent;
}
grid.prototype = {
  add:function(){
    this.parent.innerHTML += "<div class='"+ this.xy[0] +"-"+this.xy[1]+"'></div>";
    return this;
  },
}
function (){}
function cc(){
  var content = document.getElementsByClassName("content")[0];
  var across = document.getElementsByClassName("across");
  for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
      a[j] = new grid({xy:[i,j],parent:across[i]}).add();
    }
  }
}
cc();
