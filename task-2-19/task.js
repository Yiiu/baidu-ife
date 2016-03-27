var arr = [];//初始数组
var bnt = document.getElementsByTagName("button");
var num = document.getElementById("num");
function suiji(){
    if(arr.length>10){
        alert("不能再多啦");
        return arr;
    }
    for(var i=0;i<10;i++){
        var numb = Math.random()*100;
        arr.push(parseInt(numb));
    };
    div();
    return arr;
}
function maopao(){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var me = parseInt(arr[j]);
                arr[j] = parseInt(arr[j+1]);
                arr[j+1] = parseInt(me);
            }
        }
    }
    div();
    return arr;
}
function div(){
    var num = document.getElementById("nu");
    num.innerHTML = ""
    for(var i=0;i<arr.length;i++){
        num.innerHTML += "<div class='me'style='height:"+ arr[i] +"px;' id='"+i+"'></div>";
    }
}
function open(){
    for(var i=0;i<4;i++){
        bnt[i].addEventListener("click",function(e){
            switch(e.target.id){
                case "leftjoin":                    
                    if(isNaN(num.value)){
                        alert("请输入数字！！！！！");
                        return ;
                    }
                    if(num.value>0&&num.value<=100){
                    }else{
                        alert("请输入0到100的数");
                        return ;
                    }
                    arr.unshift(parseInt(num.value));
                    break;
                case "rightjoin":                    
                    if(isNaN(num.value)){
                        alert("请输入数字！！！！！");
                        return ;
                    }
                    if(num.value>0&&num.value<=100){
                    }else{
                        alert("请输入0到100的数");
                        return ;
                    }
                    arr.push(parseInt(num.value));
                    break;
                case "leftcome":
                    if(arr.length==0){
                        alert("数组里没有数字啦");
                        return ;
                    }
                    arr.shift();
                    break;
                case "rightcome":
                    if(arr.length==0){
                        alert("数组里没有数字啦");
                        return ;
                    }
                    arr.pop();
                    break;
            }
            div();
        })
    }
    nu.addEventListener("click",function(e){
        if(e.target && e.target.nodeName == "DIV"){
            //arr.splice(1,this.arr-length);
            arr.splice(e.target.id,1);
            div();
        }
    })
}
/*
 * 控制排序和随机数按钮，运行maopao()suiji()
 */
function paixu(){
    var suijime = document.getElementById("suiji");
    var maopaome = document.getElementById("maopao");
    suijime.addEventListener("click",function(){
        suiji()
    })
    maopaome.addEventListener("click",function(){
        maopao();
    })
}
function i(){
    paixu();
    div()
    open();
}
i();