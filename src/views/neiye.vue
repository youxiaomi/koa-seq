//about.vue
<template>
    <div class='neiye'>
        <div class="neiye_tit">
            {{tishi}}
        </div>
        <div class='neiye_li' >
            <div>
                <div><img alt=""/></div>

            </div>

        </div>
    </div>
</template>
<script>

    export default {
  name: 'neiye',
  mounted(){
        let that = this;
  },
  created(){


  },
  data () {
    return {
        tishi:'从主页来的吧，哈哈，点击浏览器的回退回去吧(下面是从线上拉取得数据，更新store)',
    }
  },
}
</script>
