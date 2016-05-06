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
    this.bnt();
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
    gou.addEventListener("click",function(){
      if(that.define){
        that.define()
      }else{return}
    });
    cha.addEventListener("click",function(e){
      if(that.define){
        that.shut();
        that.define();
      }else{
        that.shut();
        return;
      }
    });
  },
  shut:function(){
    var that = this;
    var num = 100;
    var pC = that.element.getElementsByClassName("popContent")[0];
    clearInterval(that.sS)
    that.sS = setInterval(function(){
      if(num == 0){
        that.element.className += " none";
        that.state = false;
        clearInterval(that.sS)
      }else{
        num = num-5;
        that.element.style.opacity = num/100;
        pC.style.webkitTransform = "scale("+ num/100 +")";
      }
    },10)
  },
  on:function(){
    var that = this;
    var num = 0;
    var pC = that.element.getElementsByClassName("popContent")[0];
    this.element.className = that.element.className.replace(/ none/,"")
    this.state = true;
    this.remove();
    clearInterval(that.zZ)
    that.zZ = setInterval(function(){
      if(num == 100){
        clearInterval(that.zZ)
      }else{
        num = num+5;
        that.element.style.opacity = num/100;
        pC.style.webkitTransform = "scale("+ num/100 +")";
        console.log(num)
      }
    },10)
  },
  remove:function(){
    var pC = this.element.getElementsByClassName("popContent")[0];
    pC.style = "";
  },
};
