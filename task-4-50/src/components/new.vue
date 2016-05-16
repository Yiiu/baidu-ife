
/* n_add_t 打开问题样式*/

<template>
    <div transition="gui" id="new">
        <n_title :text="'请输入标题'" :class="'new-title'" :iclass="'form-control new-title'"></n_title>
        <div class="content">
            <div class="questions">
                <div class="n_radio question">
                    <h4>
                        Q1 
                        <span>
                            <n_title :text="'请输入问题'" :class="''" :iclass="''"></n_title>
                        </span>
                    </h4>
                    <ul>
                        <li>
                            <input type="radio" name="q1"/><n_title :text="'选择一'" :class="''" :iclass="''">
                        </li>
                        <li>
                            <input type="radio" name="q1"/><n_title :text="'选择二'" :class="''" :iclass="''">
                        </li>
                        <li class="q_add">+</li>
                    </ul>
                        <!--必填按钮-->
                    <div class="required btns">
                        <input type="checkbox" name="question"/><span>此题是否必填</span>
                    </div>
                    <!--功能按钮-->
                    <div class="fun btns">
                        <span>上移</span>
                        <span>下移</span>
                        <span>复用</span>
                        <span>删除</span>
                    </div>
                </div>
                <div>
                    <h4>Q2 多选题</h4>
                    <ul>
                        <li><input type="checkbox" name="q2"/>选择一</li>
                        <li><input type="checkbox" name="q2"/>选择二</li>
                    </ul>
                </div>
                <div>
                    <h4>Q3 <span>文本题</span></h4>
                    <ul>
                        <li><textarea></textarea></li>
                    </ul>
                </div>

            </div>
            <div class="adds">
                <div class="btns" v-show="n_add_t"  transition="n_add_t">
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span> 
                        单选
                    </button>
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> 
                        多选
                    </button>
                    <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span> 
                        文本题
                    </button>
                </div>
                <div class="add" @click="n_add_t_c">+ 添加问题</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                n_btn : true,
                n_add_t : false
            }
        },
        methods:{
            me:function (){
                this.n_btn = false
            },
            mes:function (event){
                var el = event.currentTarget;
                this.n_btn = true;
                el.select()
                console.log(el)
            },
            n_add_t_c : function(){
                this.n_add_t = true
            }
        },
        // 组件
        components:{
            n_title:{
                props: {
                    text: String,
                    editing: Boolean,
                    class: String,
                    iclass: String
                },
                template:
                    "<span class='{{class}}' "+
                        "v-if='!editing' "+
                        "@click='edit'"+
                    ">"+
                        "{{ text }}"+
                    "</span>"+
                    "<input type='text' class='{{iclass}}'"+
                        "v-el:input "+
                        "v-if='editing' "+
                        "@blur='blur'"+
                        "v-model='text' "+
                    ">",
                methods: {
                    blur: function(){
                        let ntext = this.text
                        this.editing = false;
                        if(this.text == ""){
                            this.text = ntext
                        }
                    },
                    edit: function(){
                        this.editing = true;   
                        // 在dom有变化后立即执行
                        this.$nextTick(function(){
                            // 全选
                            this.$els.input.select();
                        })   
                    }
                }
            },
            n_add_q:{
                props: {
                    text: String,
                    editing: Boolean,
                    class: String,
                    iclass: String
                },
                template: 
                    "<div class='n_radio question'>"+
                        "<h4>"+
                            "Q1 "+
                            "<span>"+
                                "<n_title :text=''请输入问题'' :class='''' :iclass=''''></n_title>"+
                            "</span>"+
                        "</h4>"+
                        "<ul>"+
                            "<li>"+
                                "<input type='radio' name='q1'/><n_title :text=''选择一'' :class='''' :iclass=''''>"+
                            "</li>"+
                            "<li>"+
                                "<input type='radio' name='q1'/><n_title :text=''选择二'' :class='''' :iclass=''''>"+
                            "</li>"+
                            "<li class='q_add'>+</li>"+
                        "</ul>"+
                            "<!--必填按钮-->"+
                        "<div class='required btns'>"+
                            "<input type='checkbox' name='question'/><span>此题是否必填</span>"+
                        "</div>"+
                        "<!--功能按钮-->"+
                        "<div class='fun btns'>"+
                            "<span>上移</span>"+
                            "<span>下移</span>"+
                            "<span>复用</span>"+
                            "<span>删除</span>"+
                        "</div>"+
                    "</div>"
            }
        }
    }
</script>
<style>
    /* 过渡效果 */
    .n_add_t-transition {
      transition: all .3s ease;
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
    #new .content .questions>div{
        transition: 0.3s all;
        position: relative;
        padding: 10px;
    }
    #new .content .questions>div:hover{
        background: #dedede;
    }
    #new .content .questions ul{
        padding-left: 30px;
    }
    #new .content .questions li{
        list-style: none;
    }
    #new .content .questions li.q_add{
        transition: 0.2s;
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