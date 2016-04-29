var pop = function(obj){
  this.parent = obj.parent; // zainalichuangjian
  this.title = obj.title;   // biaoti
  this.content = obj.content; // neirong
  this.state = obj.state;   // zhuangtai
  this.drag = obj.drag;   // shifo tuodong
}
pop.prototype = {
  init:function(){
    if(!this.parent){
      return;
    }
    if(!this.drag){
      this.drag = true;
    }
    this.add();
    this.drags();
  },
  add:function(){
    var div = document.createElement("div");
    div.className = "yiiuPop";
    div.innerHTML += 
    div.innerHTML += "  <div class='popContent'>"
                  +  "    <div class='popTop'>"
                  +  "      <h1>" + this.title + "</h1>"
                  +  "    </div>"
                  +  "    <div class='content'>"
                  +  "        " + this.title + ""
                  +  "    </div>"
                  +  "    <div class='select'>"
                  +  "      <div class='gou'></div>"
                  +  "      <div class='cha'></div>"
                  +  "    </div>"
                  +  "  </div>";
    this.parent.appendChild(div);
    this.element = div;
  },
  drags:function(){
    var me = this.element.getElementsByClassName("popContent")[0];
    var mes = me.getElementsByClassName("content")[0];
    var meH = me.offsetHeight;
    var meW = me.offsetWidth;
    var meT = me.offsetTop;
    var meL = me.offsetLeft;
    var bnt = false;
    document.addEventListener('mousedown',function(e){
        mes.innerHTML = e.clientY - meT +","+ e.clientY;
    }, false); 
  },
};
var pops = new pop({
  parent:document.getElementsByClassName("aa")[0],
  title:"hello world",
  content:"hello javascript"
});
pops.init();