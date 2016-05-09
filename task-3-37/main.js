window.onload = function(){
  var button = document.getElementsByTagName("button")[0];
  var pops = new pop({
    parent:document.getElementsByClassName("aa")[0],
    title:"hello world",
    content:"hello javascript",
    /*define:function(){
      alert(1);
    },
    cancel:function(){
      alert(2);
    },*/
  button.onclick = function(){
    pops.on();
  }
};