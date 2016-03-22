var arr = [2,3];//初始数组
var bnt = document.getElementsByTagName("button");
var num = document.getElementById("num");
function div(){
    var num = document.getElementById("nu");
    num.innerHTML = ""
    for(var i=0;i<arr.length;i++){
        num.innerHTML += "<div class='me'>"+ arr[i] +"</div>";
    }
}
function open(){
    for(var i=0;i<bnt.length;i++){
        bnt[i].addEventListener("click",function(e){
            if(isNaN(num.value)){
                alert("请输入数字！！！！！");
                return ;
            }
            if(arr.length==0){
                alert("数组里没有数字啦");
                return ;
            }
            switch(e.target.id){
                case "leftjoin":
                    arr.unshift(num.value);
                    break;
                case "rightjoin":
                    arr.push(num.value);
                    break;
                case "leftcome":
                    arr.shift();
                    break;
                case "rightcome":
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