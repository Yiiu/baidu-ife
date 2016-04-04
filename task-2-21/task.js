var arr = [];               //标签
var conarr = [];         //兴趣爱好
var tagcnt = document.getElementsByClassName("tags")[0];
/*
 * 吧字符串分割开来
 * 回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号
 */ 
/*  */
/* 吧字符分隔开，批量插入 */
/* obj需要获取的值，con输出内容的容器，arrs装载的容器 */
function te(obj,con,arrs){
    var cc = obj.value.trim();
    var bb = cc.split(/[\s|,|，|、|　]+/);
    for(var i=0;i<bb.length;i++){
        if(!arrs.eqArray(bb[i])&&bb[i] != ""){
            if(arrs.length == 10){
                arrs.shift();
            }
            arrs.push(bb[i]);            
        }
    }
    div(con,arrs);
    console.log(arrs);
}
/* 输出 */
function div(obj,arrs){
    obj.innerHTML = "";  
    for(var i=0;i<arrs.length;i++){
        obj.innerHTML += "<span id='"+i+"'>"+ arrs[i] +"</div>";
    }
    init()
    del(obj);
}
// 按钮的动作
/* obj需要获取的值，con输出内容的容器，arrs装载的容器 */
function open(obj,con,arrs){
    /* 标签的回车事件 */
    obj.addEventListener("keydown",function(){
        if(event.keyCode==13 || event.keyCode==188 || event.keyCode==32 || event.keyCode==220 || event.keyCode==9){
            nulls(obj,con,arrs);
            //del(con);
            init();
        }
    })
    init();
}
function open1(obj,con,arrs){
    var bnt = document.getElementById("con");
    bnt.addEventListener("click",function(e){
        nulls(obj,con,arrs);
        init()     
    })
    init() 
}


/*  value是否有内容 */
function nulls(obj,con,arrs){
        if(obj.value == ''){
            alert("请输入添加的值");
            return;
        }else{
            te(obj,con,arrs);
        }
}
/* 删除标签 */

function del(obj){
    var me = '';
    obj.onmouseover = function(e){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(e.target &&e.target.nodeName === "SPAN"){ 
            me = e.target.innerHTML;
            e.target.className = "del";
            e.target.innerHTML = "删除" + e.target.innerHTML;
            e.stopPropagation();
        }
    }
    obj.onmouseout = function(e){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(e.target &&e.target.nodeName === "SPAN"){ 
            e.target.innerHTML = me;
            e.target.className = "";
            e.stopPropagation();
        }
    }
    obj.onclick = function(e){
        if(e.target && e.target.nodeName == "SPAN"){
            //arr.splice(1,this.arr-length);
            arr.splice(e.target.id,1);
            div(obj,arr)
        }
    }
}

/* 初始化 */
function init(){
    var tag = document.getElementById("tag-1");
    tag.value = null;
    var tag1 = document.getElementById("tag-2");
    tag1.value = null;
}
//去除空格
String.prototype.trim=function() {
    return this.replace(/(^\s*)|(\s*$)/g,'');
}
/* 判断数组是否包含某个数 */
Array.prototype.eqArray = function(e){
    var num = 0;
    for(var i=0;i<this.length;i++){
        if(this[i] === e){
            num++;
        }
    }
    if(num == 0){
        return false;
    }else{
        return true;
    }
}
window.onload = function(){
    var tag = document.getElementById("tag-1");
    var tagcn = document.getElementsByClassName("tags")[0];
    var tag2 = document.getElementById("tag-2");
    var tagcn2 = document.getElementsByClassName("tags")[1];
    open(tag,tagcn,arr);
    open1(tag2,tagcn2,conarr);
}