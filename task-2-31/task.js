(function(){
  var dd = {
    bj:["北京大学","清华大学"],
    sh:["上海大学","复旦大学"],
    xm:["厦门大学","华侨大学"],
  }
  var text = document.getElementsByClassName("school")[0];
  var city = document.getElementsByClassName("text");
  var content = document.getElementsByClassName("content");
  text.onchange = function(){
    var e = event.target;
    if(e.nodeName = "INPUT"){
      if(e.value == "student"){
        content[1].className = content[1].className.replace(/ none/,"");
          content[2].className = "content none";
      }else if(e.value == "Nostudent"){
        content[1].className = "content none";
        content[2].className = content[2].className.replace(/ none/,"");
      }
    }
    citys[0].onchange = function(){
      console.log(e)
    }
  }
})()
