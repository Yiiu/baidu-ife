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
/*
 * 添加
 * 删除
 *
 */
rootNode.prototype = {
  // 添加节点和元素
  addChild:function(type){
    if(type === "" || type === null){
      alert("请输入添加的节点的名字");
      return;
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
    if(this.child.length !==0){
      for(var i = 0;i<this.child.length;i++){
        this.child[i].del();
      }
    }
    this.element.parentNode.removeChild(this.element);
    for(var j=0;j<this.parent.child.length;j++){
      if(this.parent.child[j] == this){
        this.parent.child.splice(i, 1);
        return;
      }
    }
    console.log(this.parent.element);
    console.log(this.element);
  },
  name:function(t){
    this.title = t;
    var my = this.element.getElementsByTagName("span")[0];
    my.innerHTML = t;
    return this;
  }
}
var root = new rootNode({parent:null,child:[],element:document.getElementById("root"),node:document.getElementById("node")});
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
