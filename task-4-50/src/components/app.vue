<template>
    <div>
        <navs></navs>
        <div class="content">
            <router-view></router-view>
        </div>
        <footer></footer>
    </div>
</template>
<script>
    import navs from './nav.vue'; 
    
    export default{ 
        components: {
            navs   
        }
    }
</script>