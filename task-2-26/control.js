/*
 * 控制台：
 * 发送消息会有 1/3的几率丢包
 */
var control = function(obj){
  this.id = obj.id;
  this.parent = obj.parent;
  this.commond = "init";     // 飞机的状态: init 未创建  nof 未飞行 yef 正在飞行
  this.vessel = obj.vessel;
  this.cmdElement = document.getElementsByClassName("cmd")[0];
}
control.prototype = {
  add:function(){
    var div = document.createElement("div");
    div.className = "ve"
    div.innerHTML = "  <h1>"+ this.id +"号飞船</h1>"
                  + "  <p class=add>+</p>";
    this.element = div;
    this.parent.appendChild(div);
    this.on()
    return this;
  },
  // 修改的html
  addEle:function(){
    this.element.innerHTML;
    switch (this.commond) {
      case "init":
        this.element.innerHTML = "  <h1>"+ this.id +"号飞船</h1>"
                               + "  <p class=add>+</p>";
        this.on();
        break;
      case "nof":
        this.element.innerHTML = "  <h1>"+ this.id +"号飞船</h1>"
                               + "  <p>准备飞行</p>"
                               + "  <p id='bnt'><button id='fx'>飞行</button> <button id='ch'>摧毁</button></p>";
        this.on();
        break;
      case "yef":
        this.element.innerHTML = "  <h1>"+ this.id +"号飞船</h1>"
                               + "  <p>飞行中</p>"
                               + "  <p id='bnt'><button id='fx'>停止飞行</button> <button id='ch'>摧毁</button></p>";
        this.on();
        break;
    }
  },
  create:function(){
    if(this.loss()){
      if(this.commond == "init"){
        this.commond = "nof";
        this.cmd("创建了飞船");
        this.vessel.pre();
        this.addEle();
      }else{
        this.commond = "init";
        this.cmd("摧毁了飞船");
        this.vessel.pre();
        this.addEle();
      }
    }else {
      if(this.commond == "init"){
        this.commond = "nof";
        this.cmd("创建了飞船");
        this.addEle();
      }else{
        this.commond = "init";
        this.cmd("摧毁了飞船");
        this.addEle();
      }
    }
  },
  fl:function(){
    if(this.loss()){
      if(this.commond == "nof"){
        this.commond = "yef";
        this.cmd("开始飞行");
        this.vessel.sta();
        this.addEle();
      }else if(this.commond == "yef"){
        this.commond = "nof";
        this.cmd("停止飞行");
        this.vessel.sta();
        this.addEle();
      }
    }else {
      if(this.commond == "nof"){
        this.commond = "yef";
        this.cmd("开始飞行");
        this.addEle();
      }else if(this.commond == "yef"){
        this.commond = "nof";
        this.cmd("停止飞行");
        this.addEle();
      }
    }
  },
  // 模拟丢包率，随机一个1-3的数
  loss:function(){
    var num  = Math.ceil(Math.random() * 3);  // 随机一个1-3的数
    if(num == 1 || num == 2){
      return true;
    }else{
      this.cmd("丢包了!!!!!!!!!!!!!!");
      return false;
    }
  },
  // 所有指令都打印到cmd上
  cmd:function(text){
    if(text == "丢包了!!!!!!!!!!!!!!"){
      this.cmdElement.innerHTML += "<P class='err'>"+text+"</p>";
    }else{
      this.cmdElement.innerHTML += "<P>"+text+"</p>";
    }
  },
  on:function(){
    var that = this;
    if(this.commond == "init"){
      var a = childs(this.element,"add");
      a.onclick = function(){
        that.create();
      }
    }else if(this.commond == "nof"){
      var t = childs(this.element,"bnt");
      var a = childs(t,"fx");
      var s = childs(t,"ch");
      a.onclick = function(){
        that.fl();
      }
      s.onclick = function(){
        that.create();
      }
    }else if(this.commond == "yef"){
      var t = childs(this.element,"bnt");
      var a = childs(t,"fx");
      var s = childs(t,"ch");
      a.onclick = function(){
        that.fl();
      }
      s.onclick = function(){
        that.create();
      }
    }
  },
}
var s = new control({id:1,parent:document.getElementsByClassName("console")[0],vessel:ve1}).add();
var ss = new control({id:2,parent:document.getElementsByClassName("console")[0],vessel:ve2}).add();
var sss = new control({id:3,parent:document.getElementsByClassName("console")[0],vessel:ve3}).add();
var ssss = new control({id:4,parent:document.getElementsByClassName("console")[0],vessel:ve4}).add();
