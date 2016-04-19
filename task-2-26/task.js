var vessel = function(obj){
  this.element = obj.element;
  this.prepare = obj.prepare;   // 飞船状态 true false true:在 false: 不在
  this.status = obj.status;     // 飞行的状态 true false
  this.energy = 100;            // 能源，初始100能源，飞行时间减少能源
  this.jo = 0;                  // 到达的地点，初始起点0
}
vessel.prototype = {
  //飞船状态
  // false 不在 true 在
  pre:function(){
    if(this.prepare === true){
      this.stop();
      this.prepare = false;
    }else{
      this.element.className = this.element.className.replace(/ none/,"");
      this.prepare = true;
    }
    return this
  },
  //飞船飞行态
  // false 不在飞行 true 在飞行
  sta:function(){
    if(this.status == true){
      this.status = false;
      this.stop();
    }else{
      this.status = true;
      this.fl();
    }
  },
  // 飞行
  fl:function(){
    if(this.prepare == true && this.status == true){
      var e = this;
      var en = childs(this.element,"energy");
      var baifen = childs(en,"baifen");
      var speed = 1;      //速度
      clearInterval(e.Stimer);
      if(this.Ftimer){
        clearInterval(this.Ftimer);
      }
      this.Ftimer = setInterval(function(){
        if(e.energy > 0){
          e.energy = e.energy-1;
          baifen.style.width = e.energy+"%";
          e.jo+=speed;
          e.element.style.webkitTransform = "rotate("+ e.jo +"deg)"
        }
        if(e.energy == 0){
          e.supply();
        }
      },50);
    }
  },
  //补给,燃料为0自动填充
  supply:function(){
    if(this.energy == 0){
      var flag = false;
      var en = childs(this.element,"energy");
      var baifen = childs(en,"baifen");
      var e = this;
      clearInterval(this.Ftimer);
      if(this.Stimer){
        clearInterval(this.Stimer);
      }
      this.Stimer = setInterval(function(){
        e.energy = e.energy+1;
        baifen.style.width = e.energy+"%";
        if(e.energy >= 100){
          e.energy = 100;
          e.fl();
        }
      },100);
    }
  },
  // 停止飞行
  stop:function(){
    var en = childs(this.element,"energy");
    var baifen = childs(en,"baifen");
    this.prepare = false;
    this.status = false;
    this.energy = 100;
    this.jo = 0;
    this.element.className += " none";
    this.element.style = "";
    baifen.style.width = 100 + "%";
    if(this.Ftimer){
      clearInterval(this.Ftimer);
    }
    if(this.Stimer){
      clearInterval(this.Stimer);
    }
  },
}
var ve1 = new vessel({element:document.getElementsByClassName("vessels")[0],prepare:false,status:false});
var ve2 = new vessel({element:document.getElementsByClassName("vessels")[1],prepare:false,status:false});
var ve3 = new vessel({element:document.getElementsByClassName("vessels")[2],prepare:false,status:false});
var ve4 = new vessel({element:document.getElementsByClassName("vessels")[3],prepare:false,status:false});

function childs(obj,cls){
  for(var i = 0;i<obj.children.length;i++){
    if(obj.children[i].className == cls || obj.children[i].id == cls){
      return obj.children[i];
    }else if(obj.children[i].children.length != 0){
      childs(obj.children[i],cls);
    }
  }
}
