<template>
    <div transition="gui" id="new">
        <n_title :text="'请输入标题'" ></n_title>
        <div class="content">
            <div class="question">
                <div>
                    <h4>Q1 单选题</h4>
                        <!--必填按钮-->
                    <div class="required">
                        <input type="checkbox" name="question"/><span>此题是否必填</span>
                    </div>
                    <!--功能按钮-->
                    <div class="fun">
                        <span>上移</span>
                        <span>下移</span>
                        <span>复用</span>
                        <span>删除</span>
                    </div>
                    <ul>
                        <li><input type="radio" name="q1"/>选择一</li>
                        <li><input type="radio" name="q1"/>选择二</li>
                    </ul>
                </div>
                <div>
                    <h4>Q2 多选题</h4>
                    <ul>
                        <li><input type="checkbox" name="q2"/>选择一</li>
                        <li><input type="checkbox" name="q2"/>选择二</li>
                    </ul>
                </div>
                <div>
                    <h4>Q3 文本题</h4>
                    <ul>
                        <li><textarea></textarea></li>
                    </ul>
                </div>

            </div>
            <div class="adds">
                <div class="btns">
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
                <div class="add">+ 添加问题</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                n_btn : true,
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
            }
        },
        // 组件
        components:{
            n_title:{
                props: {
                    text: String,
                    editing: false
                },
                template:
                    "<h1 class='new-title' "+
                        "v-if='!editing' "+
                        "@click='edit'"+
                    ">"+
                        "{{ text }}"+
                    "</h1>"+
                    "<input type='text' class='form-control new-title'"+
                        "v-el:input "+
                        "v-if='editing' "+
                        "@blur='blur'"+
                        "v-model='text' "+
                    ">",
                methods: {
                    blur: function(){
                        this.editing = false;
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
        }
    }
</script>