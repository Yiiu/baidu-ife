<template>
    <div class="yiiuPop" v-if="on">
        <div class="popContent">
            <div class="popTop">
                <h1>警告</h1>
            </div>
            <div class="content">
                hello world
            </div>
            <div class="select">
                <button type="button" class="btn btn-primary btn-block">
                    <span class="glyphicon glyphicon-ok"></span>
                    确定
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                on:false,
            }
        }
    }
</script>
<style>
.yiiuPop {
    z-index: 1000;
    position: fixed;
    top:0;
    left:0;
    width: 100% ;
    height: 100%;
    background: rgba(0,0,0,.5);
    overflow: hidden;     
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 300px;
    -moz-perspective: 300px;
    -ms-perspective: 300px;
    -o-perspective: 300px;
    perspective: 300px;
}
.yiiuPop>div.popContent {
    margin:0;
    padding: 0;
    position: fixed;
    top: 50%;   
    left: 50%;
    margin-left:-200px;
    margin-top: -100px;
    width: 400px;
    height: 200px;
    background-color: #fff;
    border: 1px solid #337ab7;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.yiiuPop>div.popContent .popTop h1{
    margin:0;
    font-size: 24px;
}
.yiiuPop>div.popContent .popTop{
    background-color: #337ab7;
    color: #fff;   
    padding: 10px 15px;
    border-bottom: 1px solid #337ab7;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.yiiuPop>div.popContent .content{
    line-height: 90px;
    text-align: center;
    font-size: 16px;
}
.yiiuPop>div.popContent .select  {
    width: 80px;
    margin: 0 auto;
}
</style>