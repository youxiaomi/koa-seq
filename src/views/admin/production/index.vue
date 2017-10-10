<template>
<div class="example_warp">
    123{{ store.state.store_text}}
</div>

</template>

<script>
  export default {
    data () {
      return {
        msg: 'router'
      }
    },
    computed:{
      store:function () {
        return this.$store
      }
    },
    created(){
      $.get('/admin/production',function (production) {
        console.log(production[0])
      })
    }
  }
</script>

<style lang="scss" scoped>
    .example_warp {

    }
</style>