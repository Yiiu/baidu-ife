var pop = function(obj){
  this.parent = obj.parent; // zainalichuangjian
  this.title = obj.title;   // biaoti
  this.content = obj.content; // neirong
  this.state = obj.state;   // zhuangtai
  this.drag = obj.drag;   // shifo tuodong
  this.define = obj.define;
  this.cancel = obj.cancel;
  this.element = obj.element;
  this.init();
  this.bnt();
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
  // 输出html
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
  // 拖动
  drags:function(){
    var me = this.element.getElementsByClassName("popContent")[0];
        mes = me.getElementsByClassName("content")[0],
        meH = me.offsetHeight,      // 长度
        meW = me.offsetWidth,       // 宽度
        meT = me.offsetTop,         // 顶部的距离
        meL = me.offsetLeft,        // 左边的距离
        bnt = false;
        xy = []
    me.addEventListener("mousedown",function(e){
      bnt = true;
      xy = [e.clientX - me.offsetLeft,e.clientY - me.offsetTop];
      if(bnt){
        me.onmousemove = function(e){
          if(!bnt){
            return;
          }else{
            me.style.cursor = "move";
            me.style.top = e.clientY -xy[1] + "px";
            me.style.marginTop = 0;
            me.style.left = e.clientX -xy[0] + "px";
            me.style.marginLeft = 0;        
          }
        }
        me.onmouseup = function(){
          bnt = false;
          me.style.cursor = "default";
          me.onmousemove = null;
        }
      }
    });
  },
  bnt:function(){
    var gou = this.element.getElementsByClassName("gou")[0];
    var cha = this.element.getElementsByClassName("cha")[0];
    var that = this;
    gou.addEventListener("click",this.define);
    cha.addEventListener("click",function(e){
      that.shut();
      that.define();
    });
  },
  shut:function(){
    console.log(this)
    this.element.className += " none";
    this.state = false;
  },
  on:function(){
    this.element.className.
  },
};
var pops = new pop({
  parent:document.getElementsByClassName("aa")[0],
  title:"hello world",
  content:"hello javascript",
  define:function(){
    alert(1);
  },
  cancel:function(){
    alert(2);
  },
});