/**
 * @description 创建根节点构造函数
 * @constructor
 * @param {object} obj =
 */
var rootNode = function(obj){
  this.parent = obj.parent;
  this.child = obj.child || [];
  this.title = obj.title;
  this.element = obj.element;
  this.node = obj.node;     // 插入子元素
  this.node.nodes = this;
}
var arr = [];
/*
 * 添加
 * 删除
 *
 */
rootNode.prototype = {
  // 添加节点和元素
  addChild:function(type){
    if(!type){
      var type = prompt("请输入您的名字", "");
      if(type == null){
        alert("请输入添加的节点的名字");
        return;
      }
    }
    var newdiv = document.createElement("div");
    newdiv.className = "root";
    var newul = document.createElement("ul");
    var newli = document.createElement("li");
    newli.className = "wendang"
    var newtitle = document.createElement("span");
    newtitle.className = "title";
    newtitle.innerHTML = type;
    this.node.appendChild(newdiv);
    newdiv.appendChild(newul);
    newli.appendChild(newtitle);
    newul.appendChild(newli);
    // 添加到 this.child 里
    this.child.push(new rootNode({parent:this,child:[],title:type,element:newdiv,node:newli}));
    console.log(this);
    return this;
  },
  // 收缩操作
  fold:function(){
    if(this.node.className == "wendang"){
      return this;
    }else if(this.node.className == "open"){
      this.node.className = "shut";
      return this;
    }else{
      this.node.className = "open";
      return this;
    }
  },
  // 展开
  unfold:function(){
    if(this.child.length){
      this.node.className = "open";
    }
    return this;
  },
  // 闭合
  close:function(){
    if(this.child.length){
      this.node.className = "shut";
    }
    return this;
  },
  del:function(){
    // 假如有儿子，连同儿子一起删除
    if(this.parent === null){
      alert("根节点不能删除~");
    }
    if(this.child.length !==0){
      for(var i = 0;i<this.child.length;i++){
        this.child[i].del();
      }
    }
    this.element.parentNode.removeChild(this.element);
    for(var j=0;j<this.parent.child.length;j++){
      if(this.parent.child[j] === this){
        this.parent.child.splice(i, 1);
      }
    }
  },
  name:function(t){
    this.title = t;
    var my = this.element.getElementsByTagName("span")[0];
    my.innerHTML = t;
    return this;
  },
  find:function(e){
    if(e ===null || e === ""){
      alert("请输入要查询的字符");
      return;
    }
    if(root.title == e){
      arr.push(root);
    }
    for(var i = 0;i<this.child.length;i++){
      this.child[i].find(e);
      if(this.child[i].title == e){
        arr.push(this.child[i]);
        console.log(arr);
      }
    }
  },
}
// 所有的绑定事件
function handle(){
  var key = document.getElementById("key");
  var add = document.getElementById("add");
  var del = document.getElementById("del");
  var findText = document.getElementById("find-text");
  var findBnt = document.getElementById("find-bnt");
  var els = null;
  // 右键菜单的事件委托
  root.element.addEventListener("mousedown",function(e){
    var oEvent = e||window.event;
    // 右键打开菜单栏 左键
    if(oEvent.target.nodeName === "SPAN"){
      var el = e.target || e.srcElement;
      els = el.parentNode.nodes;
      if(oEvent.button==2){
        var x = oEvent.clientX;
        var y = oEvent.clientY;
        if(/none/.test(key.className)){
          key.className = key.className.replace(/none/,"");
        }
        key.style.top = y+"px";
        key.style.left = x+"px";
      }
      if(oEvent.button==0){
        if(!/none/.test(key.className)){
          key.className += "none";
        }
      }
    }
  });
  // 添加元素
  add.addEventListener("click",function(e){
    key.className += "none";
    els.addChild().unfold();
  });
  // 删除元素
  del.addEventListener("click",function(e){
    key.className += "none";
    els.del();
  });
  findBnt.onclick = function(){
    if(arr.length){
      for(var j=0;j<arr.length;j++){
        arr[j].node.className = arr[j].node.className.replace(/ test/,"");
      }
      arr = [];
    }
    root.find(findText.value);
    for(var i=0;i<arr.length;i++){
      arr[i].node.className += " test"
    }
  }
}

var root = new rootNode({parent:null,child:[],element:document.getElementById("root"),node:document.getElementById("node"),title:"root"});
/* 折叠 */
root.element.addEventListener("click",function(e){
  var e = e.target || e.srcElement ;
  if(e.nodeName == "SPAN"){
    var el = e.parentNode.nodes;
    el.fold();
  }
  //var target = e.target || e.srcElement;
});
root.addChild("me").addChild("hello").addChild("world").unfold();
root.child[0].addChild("me1").addChild("lalal").unfold();
root.child[2].addChild("hey").unfold();
handle();











function nocontextmenu(){
 event.cancelBubble = true
 event.returnValue = false;
 return false;
}
function norightclick(e){
 if (window.Event){
  if (e.which == 2 || e.which == 3)
  return false;
 }
 else
  if (event.button == 2 || event.button == 3){
   event.cancelBubble = true
   event.returnValue = false;
   return false;
  }
}
document.oncontextmenu = nocontextmenu; // for IE5+
document.onmousedown = norightclick; // for all others
