var arr = [2,3];//初始数组
var bnt = document.getElementsByTagName("button");
var num = document.getElementById("num");
function div(){
    var num = document.getElementById("nu");
    num.innerHTML = ""
    for(var i=0;i<arr.length;i
        num.innerHTML += "<div class='me'>"+ arr[i] +"</div>";
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
}
function i(){
    div()
    open();
}
i();