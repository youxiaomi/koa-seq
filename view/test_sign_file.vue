<template>
<div class="example_warp">
    <div class="example">
        {{ msg }}
    </div>
</div>

</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js Appssss'
      }
    }
  }
</script>

<style lang="scss" scoped>
    .example_warp {
        .example {
            color: red;
        }
    }
</style>