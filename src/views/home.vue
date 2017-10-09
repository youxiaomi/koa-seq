//index.vue
<template>
    <div class='home'>
        <Tit/>
        {{hah}}
        <Tooltip content="没错，我就是vue-router的实例了">
            <Button type="info" v-on:click="dianji">点我跳转</Button>
        </Tooltip>
        <div class="less_demo">
            我是less得示例
        </div>
    </div>
</template>
<script>

    export default {
        name: 'home',
        created(){

        },
        methods: {
            dianji: function (event) {

            }
        },
        data ()
        {
            return {
                hah: str_cut('还是大家还是觉得好就是当今世界的技术的',6)
            }
        }
    }
</script>