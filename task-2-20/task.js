var arr = [];//初始数组
var bb = []; //临时数据

var bnt = document.getElementsByTagName("button");
var num = document.getElementById("num");
var cxinp = document.getElementById("cx");
/*
 * 吧字符串分割开来
 * 回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号
 */ 
/* 查询 */
function search (){
    var div = document.getElementsByClassName("me");
    var jg = qu();
    for(var j=0;j<div.length;j++){
        div[j].style.background = "";
    }
    for(var i=0;i<jg.length;i++){
        div[jg[i]].style.background = "green";
    }
}
function qu(){
    var cx = []; //查询到的序号
    var reg = eval("/"+cxinp.value+"/g");
    for(var i=0;i<arr.length;i++){
        if(reg.test(arr[i])){
            cx.push(i);
        }
    }
    console.log(cx);
    return cx;
}
/* 吧字符分隔开，批量插入 */
function te(){
    bb = num.value.split(/[\s|,|，|、|　]+/);
    console.log(arr);
}
function div(){
    var num = document.getElementById("nu");
    te();
    num.innerHTML = ""
    for(var i=0;i<arr.length;i++){
        num.innerHTML += "<div class='me'>"+ arr[i] +"</div>";
    }
}
// 按钮的动作
function open(){
    for(var i=0;i<4;i++){
        bnt[i].addEventListener("click",function(e){
            switch(e.target.id){
                case "leftjoin":
                    te();
                    console.log(bb);
                    for(var i=bb.length-1;i>=0;i--){
                        arr.unshift(bb[i]);
                    }
                    break;
                case "rightjoin": 
                    te();
                    for(var i=0;i<bb.length;i++){
                        arr.push(bb[i]);
                    }
                    break;
                case "leftcome":
                    te()
                    arr.shift();
                    break;
                case "rightcome":
                    te()
                    arr.pop();
                    break;
            }
            div();
        })
    }
}
function i(){
    div();
    te();
    open();
}
i();