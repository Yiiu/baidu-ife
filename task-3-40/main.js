var datas = function(obj){
    this.parent = obj.parent;
    this.init();
}
datas.prototype = {
    week:
        ["日","一","二","三","四","五","六"]
    ,
    init: function(){
        this.data = {
            f:[],
            c:[],
            a:[],
        }; 
        this.my();        // 初始化数据
        this.inner();    //  生成html
    },
    // 生成html
    inner: function(){
        var div = document.createElement("div");          // 容器
        var ym = document.createElement("div");          // ym
        var m = document.createElement("ul");              // 星期
        var day = document.createElement("div")         // 天
        div.className = "days";
        div.className = "rili";
        ym.className = "ym";
        day.className = "days"
        m.className = "e";
        ym.innerHTML = "<span class='zuo bnt y'><</span>"
                                 + "<span class='year'>"+this.myYear+"</span>"
                                 + "<span class='you bnt y'>></span>"
                                 + "<span class='zuo bnt m'><</span>"
                                 + "<span class='month'>"+this.myWeek+"</span>"
                                 + "<span class='you bnt m'>></span>";
        for(var i=0;i<this.week.length;i++){
            var li = document.createElement("li");
            li.innerHTML = this.week[i];
            m.appendChild(li);
        }
        div.appendChild(ym);
        div.appendChild(m);
        div.appendChild(day);
        this.parent.appendChild(div);
        this.el = div;
    },
    // 日期的html更新和添加
    inners:function(){
        var days = this.el.getElementsByClassName("days")[0];
        var ul = document.createElement("ul");
        days.className = "days";
        days.innerHTML = "";
        // front
        if(this.data["f"].length !=0){
            for(var i=0;i<this.data["f"].length;i++){
                ul.innerHTML += "<li date='front' class='def'>"+this.data["f"][i]+"</li>";
            }
        }
        // center
        for(var j=0;j<this.data["c"].length;j++){
            ul.innerHTML += "<li date='center'>"+this.data["c"][j]+"</li>";
        }
        // after
        if(this.data["a"].length !=0){
            for(var z=0;z<this.data["a"].length;z++){
                ul.innerHTML += "<li date='after' class='def'>"+this.data["a"][z]+"</li>";
            }
        }
        days.appendChild(ul);
    }
    ,
    // 计算日期
    // myDay，myWeek，myYear
    my: function(){
        this.myDay = new Date().getDay() + 1;
        this.myWeek = new Date().getMonth() + 1;
        this.myYear = new Date().getFullYear();
    },
    // 获取本月天数 添加一个days
    days: function(y,w){
        var x  = new Date(y,w,0).getDate();
        return x;
    },
    weeks: function(y,w,d){
        var x = new Date(y,w,d).getDay();
        return x ;
    },
    // 获取当月
    datas:function(){
        var w = this.myWeek-1,y = this.myYear;
        var one = this.weeks(y,w,1);
        var front = 0;
        var after = 0;
        w == 0?front = this.days(y-1,11):front = this.days(y,w);
        w == 11?after = this.days(y+1,0):after = this.days(y,w);
        // 开头
        if(one != 0){
            console.log(one)
            var c = front-one;
            var num = 0;
            for(var i = front;i>c;i--){
                this.data["f"][num] = i;
                num++;
            }
        }
        // 本月
        for(var i=0;i<this.days(this.myYear,this.myWeek);i++){
            this.data["c"][i] = i+1;
        }
        // 末尾
        var lengths = this.data["f"].length+this.data["c"].length;
        if(lengths != 35){
            for(var i = 0;i<35-lengths;i++){
                this.data["a"][i] = i+1;
            }            
        }
        this.inners();
    },
}
    var a = new datas({
        parent:document.getElementById("a")
    })