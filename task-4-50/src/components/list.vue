<template>
    <div transition="gui">
        <div class="panel panel-default">
            <div class="panel-heading">问卷</div>
            <table class="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>标题</th>
                        <th>时间</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="test in item">
                        <th><input type="checkbox"></th>
                        <th>{{test.title}}</th>
                        <th>{{test.timeStart}}</th>
                        <th v-if="test.state">已发布</th>
                        <th v-else>发布中</th>
                        <th>
                            <a href="">编辑</a>
                            <a href="">删除</a>
                            <a href="">查看数据</a>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import data from "../data.js";

let a = data.out()
export default{
    data(){
        return{
            item:a.read
        }
    }
}
</script>