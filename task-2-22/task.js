var root  = document.getElementById("root");
var data = [];
var state = 0;          //0表示没有遍历，1表示正在遍历
/* 递归方法实现前序遍历 */
window.onload = function(){
    var pre = document.getElementById("pre");
    var ins = document.getElementById("in");
    var post = document.getElementById("post");
    bnt(pre,preOrder);
    bnt(ins,inOrder);
    bnt(post,postOrder);
}
var preOrder = function(node){
    if(node){
        data.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);            
        }
    }
}
/* 递归方法实现中序遍历 */
var inOrder = function(node){
    if(node){
        preOrder(node.firstElementChild);
        data.push(node);
        preOrder(node.lastElementChild);
    }
}
/* 递归方法实现后序遍历 */
var postOrder = function(node){
    if(node){
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
        data.push(node);
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