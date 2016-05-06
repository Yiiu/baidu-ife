var table = function(obj){
    this.element = obj.element;
    this.data = obj.data;
    this.parent = obj.parent;

    this.init();
}
table.prototype = {
    init:function(){
        this.add();
        this.action();
        this.sc();
    },
    // 添加表单
    add:function(){
        var table = document.createElement("table");
        var header = document.createElement("tr");
        table.className = "tables";
        // 添加表头
        for(var i=0;i<this.data.header.length;i++){
            if(this.data.me[i] == 1){
                header.innerHTML += "<td>"
                                                      +         this.data.header[i]
                                                      +    "    <span class='sort-bnt' data-id="+i+">"
                                                      +    "        <div class='top'></div>"
                                                      +    "        <div class='bottom'></div>"
                                                      +    "    </span>"
                                                      +    "</td>";
            }else{
                header.innerHTML += "<td>"+ this.data.header[i] +"</td>";
            }
        }
        table.appendChild(header);
        // 添加表单本身
        for(var j=0;j<this.data.tbody.length;j++){
            var tr = document.createElement("tr");
            tr.setAttribute("data-id",j);
            for(var z=0;z<this.data.tbody[j].length;z++){
                tr.innerHTML += "<td class=s>"+this.data.tbody[j][z]+"</td>"
            }
            table.appendChild(tr);
        }
        this.parent.appendChild(table);
        this.element = table;
    },
    eles:function(){
        var el = this.element;
        this.parent.innerHTML = "";
        this.add();
        this.action();
    },
    //  排序结果
    small:function(line){
        for(var i=0;i<this.data.tbody.length;i++){
            for(var j=0;j<this.data.tbody.length-i-1;j++){
                if(this.data.tbody[j][line]>this.data.tbody[j+1][line]){
                    var s = this.data.tbody[j];
                    this.data.tbody[j] = this.data.tbody[j+1];
                    this.data.tbody[j+1] = s;
                }
            }
        }
        this.eles()
    },
    big:function(line){
        for(var i=0;i<this.data.tbody.length;i++){
            for(var j=0;j<this.data.tbody.length-i-1;j++){
                if(this.data.tbody[j][line]<this.data.tbody[j+1][line]){
                    var s = this.data.tbody[j];
                    this.data.tbody[j] = this.data.tbody[j+1];
                    this.data.tbody[j+1] = s;
                }
            }
        }
        this.eles()
    },
    action:function(){
        var that = this;
        this.element.addEventListener("click",function(e){
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if(target.nodeName == "DIV"){
                if(target.className == "top"){
                    that.small(target.parentNode.attributes["data-id"].nodeValue);
                }else if(target.className == "bottom"){
                    that.big(target.parentNode.attributes["data-id"].nodeValue);
                }
            }
        });
    },
    sc:function(){
        var elTop = this.element.offsetTop;
        var elBo = elTop + this.element.offsetHeight;
        var that = this;
        window.onscroll = function(){
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if(t>=elTop && t<= elBo){
                that.element.firstChild.className = "fixed";
            }else{
                that.element.firstChild.className = "";
                return
            }
        }
    }
}

