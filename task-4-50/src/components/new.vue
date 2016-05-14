<template>
    <div transition="gui">
        <h1 class="new-title" 
            @click="me" 
            v-show="n_btn">
            {{ n_title }}
        </h1>
        <input type="text" class="form-control new-title"
            v-model="n_title" 
            v-show="!n_btn"
        >
    </div>
</template>
<script>
    export default{
        data(){
            return {
                n_btn : true,
                n_title: "这里是标题",
                me(){
                        n_btn : false
                }
            }
        },
    }
</script>