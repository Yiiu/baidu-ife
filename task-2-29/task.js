(function(){
  var text = document.getElementsByClassName("text")[0];
  var box = document.getElementById("texts");
  var prompt = document.getElementById("prompt");
  var bnt = document.getElementsByClassName("bnt")[0];
  bnt.onclick = function(){
    if(text.value === "" || text.value === null){
      box.className = "err";
      prompt.innerHTML = "姓名不能为空"
    }else if(text.value.Slength() < 4 || text.value.Slength() > 16){
      box.className = "err";
      prompt.innerHTML = "必填,长度为4~16个字符"
    }else {
      box.className = "ye";
      prompt.innerHTML = "名称格式正确"
    }
  }
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
})()
