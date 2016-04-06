var root  = document.getElementById("root");
var data = [];
var state = 0;          //0表示没有遍历，1表示正在遍历
var box = document.getElementById("box");
var div = box.getElementsByTagName("div");
var namedata =
["function","var","this","for","if","else","try","in","do","new","while","width","default","case","void","delete","int","char","class","window","prototype"]
/* 递归方法实现前序遍历 */
window.onload = function(){
    var pre = document.getElementById("pre");
    var ins = document.getElementById("in");
    var post = document.getElementById("post");
    bnt(pre,preOrder);
    names();
}
// namedata
function names(){
    for(var i=0;i<div.length;i++){
        div[i].innerHTML += namedata[i];
        div[i].data = namedata[i];
    }
}
//深度优先遍历
var preOrder = function(node){
    if(node){
        data.push(node);
        for(var i=0;i<node.children.length;i++){
            preOrder(node.children[i]);
        }
    }
}
/* 按钮事件 */
function bnt(obj,Order){
    obj.addEventListener("click",function(){
        if(state){
            alert("正在遍历~请耐心等待")
        }else{
            Order(root);
            set(data);
            data = [];            
        }
    });
};
/* 500s延迟显示遍历结果 */
function set(data){
    var i = 0;
    var timer = setInterval(function(){
        state = 1;
        if(i<data.length){
            if(i>0){
                data[i-1].style.background = "#fff";                
            }
            data[i].style.background = "red";
        }else if(i == data.length){
            clearInterval(timer);
            state = 0;
            data[i-1].style.background = "#fff";
        }
        i++;
    },500);
}
//去除空格
String.prototype.trim=function() {
    return this.replace(/(^\s*)|(\s*$)/g,'');
}