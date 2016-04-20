var form = function(obj){
  this.parent = obj.parent;       // 要添加到的父节点
  this.text = obj.text;           // 内容
  this.warning = obj.warning;     // 警告的文档
  this.type = obj.type;
}
form.prototype = {
  add:function(){
    var div = document.createElement("div");
    div.className = "content";
    div.innerHTML = "   <span>"+ this.text +"</span>"
                  + "   <div id='texts'>"
                  + "     <input type='"+ this.type +"' class='text'>"
                  + "     <p id='prompt' class='none'>"+this.warning+"</p>"
                  + "   </div>";
    this.parent.appendChild(div);
    this.element = div;
    this.me();
    return this;
  },
  // 检测
  warn:function(){
    var text = this.element.getElementsByClassName("text")[0];
    var div = childs(this.element,"texts");
    var prompt = childs(div,"prompt");
    var bnt = this.element.getElementsByClassName("bnt")[0];
    if(this.type == "text" || this.type == "password"){
      if(text.value.Slength() < 4 || text.value.Slength() > 16){
        div.className = "err";
        prompt.innerHTML = this.warning;
        return false;
      }else {
        div.className = "ye";
        prompt.innerHTML = "格式正确";
        return true;
      }
    }else if(this.type = "mail") {
      var apos = text.value.indexOf("@")
      var dotpos = text.value.lastIndexOf(".")
      if (apos<1||dotpos-apos<2){
        div.className = "err";
        prompt.innerHTML = this.warning;
        return false;
      }else {
        div.className = "ye";
        prompt.innerHTML = "格式正确"
        return true;
      }
    }
    if(text.value === "" || text.value === null){
      div.className = "err";
      prompt.innerHTML = "不能为空"
    }
  },
  me:function(e){
    var div = childs(this.element,"texts");
    var input = childs(div,"text");
    var prompt = childs(div,"prompt");
    var that = this;
    input.onfocus = function(){
      prompt.className = "";
    }
    input.onblur = function(){
      that.warn();
    }
    /*if(e){
      prompt.className = "none";
    }else {
      prompt.className = "";
    }*/
  }
}
var a = new form({parent:document.getElementById("e"),text:"名字：",warning:"必填,长度为4~16个字符",type:"text"}).add();
var b = new form({parent:document.getElementById("e"),text:"邮件：",warning:"请输入正确的邮箱",type:"mail"}).add();
var c = new form({parent:document.getElementById("e"),text:"密码：",warning:"必填",type:"password"}).add();
function childs(obj,cls){
  for(var i = 0;i<obj.children.length;i++){
    if(obj.children[i].className == cls || obj.children[i].id == cls){
      return obj.children[i];
    }
  }
}
(function (){
  var bnt = document.getElementsByClassName("bnt")[0];
  bnt.onclick = function(){
    if(a.warn() == true && b.warn() == true && c.warn() == true){
      alert("提交成功");
    }else{
      alert("提交失败");
    }
  }

})()
String.prototype.Slength = function(){
  var str = this.split("");
  var num = 0;
  for(var i = 0; i<str.length;i++){
    if(/[a-zA-Z0-9]/.test(str[i])){
      num ++;
    }else {
      num += 2;
    }
  }
  return num;
}
