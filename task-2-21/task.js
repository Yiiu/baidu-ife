var arr = [];               //标签
var conarr = [];         //兴趣爱好
var bb = []; //临时数据
/*
 * 吧字符串分割开来
 * 回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号
 */ 
/* 吧字符分隔开，批量插入 */
function te(obj){
    cc = obj.value.trim();
    bb = cc.split(/[\s|,|，|、|　]+/);
    var num = 0;
    for(var i=0;i<bb.length;i++){
        for(var j=i+1;j<=bb.length;j++){
            if(bb[i] === bb[j]){
                bb.splice(j,1);
                alert(bb[j]);
            }
        }
    }
    arr.push(bb);
    console.log(arr);
}
/* 输出 */
function div(obj){
    obj.innerHTML = ""
    for(var i=0;i<arr.length;i++){
        obj.innerHTML += "<span id='"+i+"'>"+ arr[i] +"</div>";
    }
}
// 按钮的动作
function open(){
    /* 标签的回车事件 */
    var tag = document.getElementById("tag-1");
    var tagcnt = document.getElementsByClassName("tags")[0];
    tag.addEventListener("keydown",function(e){
        if(event.keyCode==13){
            nulls(tag);
            div(tagcnt);
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