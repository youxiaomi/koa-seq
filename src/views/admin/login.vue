<template>
    <div id="wrap">
        <div id="loginbox">
            <form id="loginform" class="form-vertical">
                <div class="control-group normal_text"><h3><img src="img/logo.png" alt="Logo"/></h3></div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
                            <span class="add-on bg_lg"><i class="icon-user"></i></span>
                            <input type="text" placeholder="Username" v-model="account"/>
                        </div>
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
                            <span class="add-on bg_ly"><i class="icon-lock"></i></span>
                            <input type="password" placeholder="Password" v-model="password"/>
                        </div>
                    </div>
                </div>
                <div class="form-actions">
                    <!--<span class="pull-left"><a href="#" class="flip-link btn btn-info" id="to-recover">Lost password?</a></span>-->
                    <span class="pull-right">
                        <div v-on:click="submit" class="btn btn-success"> Login</div>
                    </span>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
  export default {
    data () {
      return {
        account: '',
        password:'',
      }
    },
    computed: {
      store: function () {
        return this.$store
      }
    },
    methods:{
      submit:function(){
        $.get('/login?account='+this.account+'&password='+this.password,function (data ){
          console.log(data)
        })
        }

    }
  }
</script>
<style lang="scss" scoped>
    .example_warp {

    }
</style>