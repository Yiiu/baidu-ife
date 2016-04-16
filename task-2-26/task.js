
var vessel = function(obj){
  this.element = obj.element;
  this.prepare = obj.prepare;   // 飞船状态 true false true:在 false: 不在
  this.status = obj.status;     // 飞行的状态 true false
  this.energy = 100;            // 能源，初始100能源，飞行时间减少能源
}
vessel.prototype = {
  //飞船状态
  // false 不在 true 在
  pre:function(){
    var sty = this.element.children[0];
    if(this.prepare === true){
      this.prepare = false;
      sty.className += " none";
    }else{
      sty.className = sty.className.replace(/ none/,"")
      this.prepare = true;
      console.log(sty);
    }
    return this
  },
  //飞船飞行态
  // false 不在飞行 true 在飞行
  sta:function(){
    if(this.status === true){
      this.fl();
      this.status = false;
    }else{
      this.fl();
      this.status = true;
    }
    return this
  },
  // 飞行
  fl:function(){
    if(this.prepare === true && this.prepare === true){
      var timer = setInterval(function(){
        if(this.energy <=0 ){
          clearInterval(timer);
        }else{
          this.style.transform = "roate("+10+"deg)"
        }
      },1000);
    }
  }
  ,
}
var a = new vessel({element:document.getElementsByClassName("vessels")[0],prepare:false,status:false});
