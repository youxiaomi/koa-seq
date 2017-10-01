<template>
<div class="example_warp">
    <div class="example">
        {{ store.state.store_text}}
    </div>
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
        .example {
            color: blue;
        }
    }
</style>