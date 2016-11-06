<template>
    <div id="wrapper">
        <sidebar></sidebar>
        <div id="page-wrapper" class="gray-bg dashbard-1">
            <top></top>
            <router-view></router-view>
            <bottom></bottom>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../partial/sidebar.vue';
    import Top from '../partial/top.vue';
    import Bottom from '../partial/bottom.vue';
    export default {
        data:function(){
            return {

            }
        },
        components:{
            sidebar:Sidebar,
            top:Top,
            bottom:Bottom
        }
    }
</script>