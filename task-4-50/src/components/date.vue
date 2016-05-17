<template>
    <div class="date">
        <input type="text" class="form-control" placeholder="date" aria-describedby="basic-addon1" @click="datas" v-el:input>
        <div class="panel panel-primary" style="width: 340px;height: 370px;text-align: center" v-show="btn">
            <div class="panel-heading"style="font-size: 24px;">
                <span class="glyphicon glyphicon-chevron-left" @click="lessen('y')"></span>
                {{year}}
                <span class="glyphicon glyphicon-chevron-right" @click="add('y')"></span>
                <span class="glyphicon glyphicon-chevron-left" @click="lessen"></span>
                {{week}}
                <span class="glyphicon glyphicon-chevron-right" @click="add"></span>
                            <ul class="e"><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul>

            </div>
            <div class="table">
            <ul>
                <template v-for="fts in ft">
                    <li class="def front">{{fts}}</li>
                </template>
                <template v-for="cts in ct">
                    <li class="center" @click="myday(cts)" day=>{{cts}}</li>
                </template>
                <template v-for="ats in at">
                    <li class="def after">{{ats}}</li>
                </template>
            </ul>
        </div>
    </div>
</template>
<script>
let ft = [];
let ct = [];
let at = [];
let week = function(y,w,d){
    var x = new Date(y,w,d).getDay();
    return x ;
}
function days(y,w){
    var x  = new Date(y,w,0).getDate();
    return x;
}
    export default{
        data(){
            return{
                btn: false,
                day: Number,
                week: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
                ft:[],
                ct:[],
                at:[]
            }
        },
        methods:{
            add: function(d){
                if(d == "y"){
                    this.year = this.year+1;
                }else {
                    if(this.week == 12){
                        this.year++;
                        this.week = 1;
                    }else{
                        this.week = this.week+1;
                    }
                }
            },
            lessen:function(d){
                if(d == "y"){
                    this.year = this.year-1;
                }else {
                    if(this.week == 1){
                        this.year--;
                        this.week = 12;
                    }else{
                        this.week = this.week-1;
                    }
                }
            },
            datas: function(){
                function weeks(y,w,d){
                    var x = new Date(y,w,d).getDay();
                    return x ;
                }
                function days(y,w){
                    var x  = new Date(y,w,0).getDate();
                    return x;
                }
                this.ft = [];
                this.ct = [];
                this.at = [];
                let w = this.week-1,y = this.year;
                let one = weeks(y,w,1);
                let front = 0;
                let after = 0;
                w == 0?front = days(y-1,11):front = days(y,w);
                w == 11?after = days(y+1,0):after = days(y,w+1);
                // 开头
                if(one != 0){
                    let c = front-one;
                    let num = 0;
                    for(let i = front;i>c;i--){
                        this.ft[num] = i;
                        num++;
                    }
                    this.ft.reverse()
                }
                // 本月
                for(let i=0;i<days(this.year,this.week);i++){
                    this.ct[i] = i+1;
                }
                // 末尾
                var lengths = this.ft.length+this.ct.length;
                if(lengths != 42){
                    for(let i = 0;i<42-lengths;i++){
                        this.at[i] = i+1;
                    }            
                }
                this.btn = true;
            },
            myday:function(day){
                this.day = day
                this.$els.input.value = this.year +"-"+ this.week+ "-" + this.day;
                this.btn = false;
            }
        }
    }
</script>
<style>
    .date .table ul {
        padding: 0;
        margin: 0;
    }
    .date .table ul li {      
        width: 30px;
        height: 30px;
        margin: 7px;
        line-height: 30px;
        transition: 0.3s;
        text-align: center; 
        cursor: pointer;
        margin-top: 7px;
        font-size: 20px;
        display: inline-block;
        list-style-type: none;
    }
    .date .e {
        padding: 0;
        margin: 0;
    }
    .date .e li {      
        width: 30px;
        height: 30px;
        margin: 7px;
        line-height: 40px;
        transition: 0.3s;
        text-align: center; border-radius: 40px;
        text-align: center;
        cursor: pointer;
        margin-top: 7px;
        font-size: 20px;
        display: inline-block;
        list-style-type: none;
    }
    .date .def{
        color: #ccc;
    }
    .date .table li.center{
        border-radius: 20px;
    }
    .date .table li.center:hover{
        background: #337AB7;
        color: #fff;
    }
    .date .panel{
        margin-top: 10px;
        position: absolute;
    }
    .date .form-control{
        width: 200px;
    }
</style>