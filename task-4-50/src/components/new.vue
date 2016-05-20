<template>
    <div transition="gui" id="new">
        <n_title :text.sync='text' :class="'new-title'" :iclass="'form-control new-title'"></n_title>
        <div class="content">
            <div class="questions" v-for="t in que">
                <question :index='$index+1' :type='t.type' v-ref:sss></question>
            </div>
            <div class="adds">
                <div class="btns" v-show="n_add_ts"  transition="n_add_t">
                    <button type="button" class="btn btn-default btn-sm" @click="radio">
                        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span> 
                        单选
                    </button>
                    <button type="button" class="btn btn-default btn-sm" @click="checkbox">
                        <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> 
                        多选
                    </button>
                    <button type="button" class="btn btn-default btn-sm" @click="textarea">
                        <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span> 
                        文本题
                    </button>
                </div>
                <div class="add" @click="n_add_t_c">+ 添加问题</div>
            </div>
        </div>
        <div class="footer">
            <date></date>
            <div class="btns">
                <button type="button" class="btn btn-default btn-sm" @click="mes">保存问卷</button>
                <button type="button" class="btn btn-default btn-sm" @click="check">提交问卷</button>
            </div>
        </div>
        <pop :on.sync="btn" :war="warning"></pop>
    </div>
</template>
<script>
import n_title from "./n_title"
import pop from "./pops"
import date from "./date"
import question from "./question"
    export default{
        data(){
            return {
                text:"请输入标题",
                n_add_ts : false,
                que:[],
                data:[],
                date:"",
                index:1,
                btn:false,
                warning:"!"
            }
        },
        methods:{
            n_add_t_c : function(){
                this.n_add_ts = true;
            },
            radio : function(){
                this.que.push({"type":"radio"})
                this.n_add_ts = false;
            },
            checkbox : function(){
                this.que.push({"type":"checkbox"})
                this.n_add_ts = false;
            },
            textarea : function(){
                this.que.push({"type":"textarea"})
                this.n_add_ts = false;
            },
            // 验证
            check: function(){
                this.mes()
                for(var i=0;i<this.data.length;i++){
                    console.log(this.data[i])
                    if(this.data[i].h1=="请输入标题"){
                        this.warning = "请输入问题"+(i+1)+ "的标题";
                        this.btn = true;
                    }else if(this.data[i].problem.length <= 1){
                        this.warning = "每个问题至少2个问题";
                        this.btn = true;
                    }
                }
            },
            mes:function(){
                this.data = []
                for(var i=0;i<this.$children.length;i++){
                    if(/question/.test(this.$children[i].$el.className)){
                        let me = {};
                        me.h1 = this.$children[i].h1;
                        me.problem = this.$children[i].problem;
                        me.required = this.$children[i].required;
                        this.data.push(me)
                        console.log(this.data)
                    }
                }
            },
            c:function(){
                this.btn = true
            }
        },
        // 组件
        components:{
            question,
            n_title,
            date,
            pop
        }
    }
</script>
<style>
    /* 过渡效果 */
    .n_add_t-transition {
      transition: height .3s ease;
      height: 30px;
      overflow: hidden;
    }

    /* .expand-enter 定义进入的开始状态 */
    /* .expand-leave 定义离开的结束状态 */
    .n_add_t-enter, .n_add_t-leave {
      height: 0;
      opacity: 0;
    }
    /*  new  */
    #new  span.new-title{
        display: block;
        margin:0;
        height: 34px;
        padding-top: 2px;
        line-height: 1.42857143;
        text-align: center;
        font-size: 24px;
    }
    #new  span.new-title:hover{
        background: #fff;
    }
    #new  input.new-title{
        margin: 0;
        padding:0;
        text-align: center;
        font-size: 24px;
        border :0;
    }
    #new>.content {
        margin-top: 10px;
        margin-bottom: 10px;
        padding:20px;
        border-top: 2px solid #ccc;
        border-bottom: 2px solid #ccc;
    }
    #new .adds {
        margin-top: 10px;
        border: 1px solid #ccc;
    }
    #new .content .add{
        height: 80px;
        line-height: 80px;
        background:#ddd;
        color: #777;
        font-size: 24px;
        text-align: center;
        cursor: pointer;
    }
    #new .content .adds .btns {
        position: relative;
        width: 205px;
        margin: 10px auto 10px auto;
    }
    #new .footer .btns {
        float: right;
    }
</style>