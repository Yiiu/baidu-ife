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
    var newul = document.createElement("ul");
    var newli = document.createElement("li");
    var newdiv = document.createElement("div");
    newdiv.className = "root open";
    var newtitle = document.createElement("span");
    newtitle.className = "title";
    newtitle.innerHTML = type;
    this.element.appendChild(newul);
    newul.appendChild(newli);
    newli.appendChild(newdiv);
    newdiv.appendChild(newtitle);
    // 添加到 this.child 里
    this.child.push(new rootNode({parent:this,child:[],title:type,element:newul}));
    console.log(this);
    return this;
  },

}
var root = new rootNode({parent:null,child:[],element:document.getElementById("root")});
root.addChild("me").addChild("hello").addChild("world");
root.child[0].addChild("me").addChild("lalal");
