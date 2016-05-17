
/* n_add_t 打开问题样式*/

<template>
    <div transition="gui" id="new">
        <n_title :text='"请输入标题"' :class="'new-title'" :iclass="'form-control new-title'"></n_title>
        <div class="content">
            <div class="questions" v-for="t in que">
                <question :index='$index+1' :type='t.type'></question>
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
        </div>
    </div>
</template>
<script>
import n_title from "./n_title"
import date from "./date"
import question from "./question"
    export default{
        data(){
            return {
                n_add_ts : false,
                que:[],
                index:1
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
            }
        },
        // 组件
        components:{
            question,
            n_title,
            date
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
    #new .content {
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
    #new .content .questions>div.question{
        transition: 0.3s all;
        position: relative;
        padding: 10px;
    }
    #new .content .questions>div.question:hover{
        background: #dedede;
    }
    #new .content .questions ul{
        padding-left: 30px;
    }
    #new .content .questions li{
        list-style: none;
    }
    #new .content .questions li.q_add{
        cursor: pointer;
        text-align: center;
        font-size: 18px;
        border: 2px dashed #ccc;
        box-shadow: 10px;
        border-radius: 2px;
        opacity: 0;
    }
    #new .content .questions li.q_add:hover{
        opacity: 1;
    }
    #new .content .questions input{
        margin-right: 5px;
    }
    #new .content .questions textarea{
        width: 100%;
        max-width: 100%;
    }
    #new .content .questions .required{
        position: absolute;
        top: 5px;
        right: 10px;
        height: 0;
        font-size: 10px;
    }
    #new .content .questions .fun{
        position: absolute;
        bottom: 20px;
        right: 10px;
        height: 0;
        font-size: 10px;
    }
    #new .content .questions .question h4 {
        height: 21px;
    }
    #new .content .questions .question input {
        width: auto;
        border: 0;
    }
</style>