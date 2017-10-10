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
    }
  }
</script>

<style lang="scss" scoped>
    .example_warp {

    }
</style>