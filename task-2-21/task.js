var arr = [];               //标签
var conarr = [];         //兴趣爱好
var tagcnt = document.getElementsByClassName("tags")[0];
/*
 * 吧字符串分割开来
 * 回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号
 */ 
/*  */
/* 吧字符分隔开，批量插入 */
function te(obj){
    var cc = obj.value.trim();
    var bb = cc.split(/[\s|,|，|、|　]+/);
    for(var i=0;i<bb.length;i++){
        if(!arr.eqArray(bb[i])){
            arr.push(bb[i]);            
        }
    }
    div(tagcnt);
    console.log(arr);
}
/* 输出 */
function div(obj){
    var tag = document.getElementById("tag-1");
    tag.value = "";
    obj.innerHTML = "";  
    for(var i=0;i<arr.length;i++){
        obj.innerHTML += "<span id='"+i+"'>"+ arr[i] +"</div>";
    }
    del(obj);
}
// 按钮的动作
function open(){
    /* 标签的回车事件 */
    var tag = document.getElementById("tag-1");
    tag.addEventListener("keydown",function(e){
        if(event.keyCode==13){
            var sp = document.getElementById
            nulls(tag);
        }
    })
}
/*  value是否有内容 */
function nulls(obj){
        if(obj.value == ''){
            alert("请输入添加的值");
            return;
        }else{
            te(obj);
        }
}
/* 删除标签 */
function del(obj){
    obj.addEventListener("click",function(e){
        if(e.target && e.target.nodeName == "SPAN"){
            //arr.splice(1,this.arr-length);
            arr.splice(e.target.id,1);
        }
    })
}
//去除空格
String.prototype.trim=function() {
    return this.replace(/(^\s*)|(\s*$)/g,'');
}
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
    open()
}