<template>
    <div class="home">
        <router-view>

        </router-view>
    </div>
</template>

<script>
    export default {

        components: {
        },
        data(){
            return{
                title:'队伍综合评估',
            }
        },
    }
</script>
<style lang="scss">
    .home{
        height:100%;
        overflow-y:visible ;
        background: #F5F5F5;
    }
</style>