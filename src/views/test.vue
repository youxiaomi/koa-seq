<template>
<div class="example_warp">
    123
   <form action="/admin/production/create_img" method="post" enctype="multipart/form-data">

       <input type="file"/>
       <button type="submit">提交233</button>
   </form>
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