<template>
    <div class="n_radio question">
        <h4>
            <template 
            v-if="type=='radio'">
                Q{{index}}  (单选题)
            </template>
            <template 
            v-if="type=='checkbox'">
                Q{{index}}  (多选题)
            </template>
            <template 
            v-if="type=='textarea'">
                Q{{index}}  (文本题)
            </template>
            <span>
                <n_title :text='"请输入标题"'></n_title>
            </span>
        </h4>
        <ul>
            <!-- 单选 -->
            <template v-for="test in item" v-if="type=='radio'">
                <li>
                    <span class="glyphicon glyphicon-unchecked"></span>
                    <n_title 
                        :text="test.title" 
                        :class="''" 
                        :iclass="''"
                    ></n_title>
                    <span class="glyphicon glyphicon-remove" 
                    @click="pr_del($index)"
                    ></span>
                </li>
            </template>
            <!-- 多选 -->
            <template v-for="test in item" v-if="type=='checkbox'">
                <li>
                    <span class="glyphicon glyphicon-record"></span>
                    <n_title 
                        :text="test.title" 
                        :class="''" 
                        :iclass="''"
                    ></n_title>
                    <div class="glyphicon glyphicon-remove" 
                        @click="pr_del($index)"
                    ></div>
                </li>
            </template>
            <!-- 文本 -->
            <template  v-if="type=='textarea'">
                <li>
                    <span class="glyphicon glyphicon-align-justify"></span>
                </li>
            </template>
            <li class="q_add" 
                @click="pr_add"  
                v-if="type=='radio' || type=='checkbox'"
            >+</li>
        </ul>
            <!--必填按钮-->
        <div class="required btns">
            <input type="checkbox" name="required" v-model="required" :true="true" :false="false"/><span>此题是否必填</span>
        </div>
        <!--功能按钮-->
        <div class="fun btns">
            <span>上移</span>
            <span>下移</span>
            <span>复用</span>
            <span>删除</span>
        </div>
    </div>
</template>
<script>
/* 
index: 第几个问题
type: 类型
 */
import n_title from "./n_title"
    export default {
        data(){
            return {
                item: [
                    {"title":"问题"},
                    {"title":"问题"}
                ],
                required:false
            }
        },
        props: {
            index: Number,
            type: String,
        },
        components:{
            n_title
        },
        methods:{
            pr_add:function(){
                this.item.push({"title":"问题"})
            },
            pr_del:function(index){
                this.item.splice(index,1)
            },
        }
    }
</script>
<style>
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
    .glyphicon-remove{
        cursor: pointer;
    }
    .glyphicon-align-justify {
        font-size: 46px;
    }
</style>