<template>
  <div>
    <layout></layout>
    <div id="content">
    </div>
  </div>

</template>
<script>
//  import layout from "../compents/layout.vue";
  export default {
    data() {
      return {

      }
    },
    computed: {
      store: function () {
        return this.$store
      },

    },
    methods:{

    },
    created: function () {

    },
    components:{
      layout
    },
    updated: function () {

    }
  }
</script>


<style lang="scss" scoped>

</style>