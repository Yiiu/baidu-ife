<template>
    <div class="n_radio question" v-if="type=='radio'">
        <h4>
           Q{{index}}  (单选题)
            <span>
                <n_title :text='"请输入标题"'></n_title>
            </span>
        </h4>
        <ul>
            <template v-for="test in item">
                <li>
                    <span class="glyphicon glyphicon-unchecked"></span>
                    <n_title :text="test.title" :class="''" :iclass="''"></n_title>
                    <span class="glyphicon glyphicon-remove"></span>
                </li>
            </template>
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

    <div class="n_checkbox question" v-if="type=='checkbox'">
        <h4>
           Q{{index}}  (多选题)
            <span>
                <n_title :text='"请输入标题"'></n_title>
            </span>
        </h4>
        <ul>
            <template v-for="test in item">
                <li>
                    <span class="glyphicon glyphicon-record"></span>
                    <n_title :text="test.title" :class="''" :iclass="''"></n_title>
                    <div class="glyphicon glyphicon-remove"></div>
                </li>
            </template>
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
    <div class="n_textarea question" v-if="type=='textarea'">
        <h4>
           Q{{index}}  (文本题)
            <span>
                <n_title :text='"请点击输入标题"'></n_title>
            </span>
        </h4>
        <ul>
            <li>
                
            <span class="glyphicon glyphicon-align-justify"></span>
            </li>
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
                    {"title":"问题1"},
                    {"title":"问题2"}
                ],
            }
        },
        props: {
            index: Number,
            type: String,
        },
        components:{
            n_title
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