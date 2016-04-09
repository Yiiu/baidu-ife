var root      = document.getElementById("root"),
    data      = [],
    seekdata  = [],
    state     = 0,          //0表示没有遍历，1表示正在遍历
    box       = document.getElementById("box"),
    div       = box.getElementsByTagName("div"),
    namedata  =
["function","var","this","for","if","else","try","in","do","new","while","width","default","case","void","delete","int","char","class","window","prototype","undefined"];
/* 递归方法实现前序遍历 */
window.onload = function(){
    var pre   = document.getElementById("pre"),
        ins   = document.getElementById("in"),
        post  = document.getElementById("post");
    bnt(pre,preOrder);
    names();
}
// 搜索功能
function seach(){
    var seek = document.getElementById("seek"),
        bnt = document.getElementById("seek-bnt");
    bnt.onclick = function(){
        if(seek.value == null || seek.value == ''){
            alert("请输入要查询的值");
        }else{
            init() //初始化
            preOrder(root);
            var i     = 0,
                me    = 0,
                timer = setInterval(function(){
                state = 1;
                if(i<data.length){
                    if(i>0){
                        data[i-1].className = "";
                    }
                    data[i].className = "red";
                    if(seek.value == data[i].data){
                        data[i].style.background = "blue";
                        seekdata.push(data[i]);
                        me = 1;
                    }
                }else if(i == data.length){
                    clearInterval(timer);
                    state = 0;
                    data[i-1].className = "";
                    if(me == 0){
                        alert("没有查找到");
                    }
                }
                i++;
            },500);
        }
    }
}
function init(){
    for(var i=0;i<seekdata.length;i++){
        seekdata[i].style.background = ""
    }
    data = [];
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
                data[i-1].className = "";
            }
            data[i].className = "red";
        }else if(i == data.length){
            clearInterval(timer);
            state = 0;
            data[i-1].className = "";
            data = [];
        }
        i++;
    },500);
}
//去除空格
String.prototype.trim=function() {
    return this.replace(/(^\s*)|(\s*$)/g,'');
}
seach()
