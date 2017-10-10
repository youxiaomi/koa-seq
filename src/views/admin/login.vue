<!--<template>-->
<div id="wrap">
    <!-- Make page fluid -->
    <div class="row">
        <!-- Page content -->
        <div id="content" class="col-md-12 full-page login">
            <div class="inside-block">
                <img src="assets/images/logo-big.png" alt class="logo">
                <h1><strong>Welcome</strong> Stranger</h1>
                <h5>Minimal Admin Theme</h5>
                <form id="form-signin" class="form-signin">
                    <section>
                        <div class="input-group">
                            <input type="text" class="form-control" name="username" placeholder="Username">
                            <div class="input-group-addon"><i class="fa fa-user"></i></div>
                        </div>
                        <div class="input-group">
                            <input type="password" class="form-control" name="password" placeholder="Password">
                            <div class="input-group-addon"><i class="fa fa-key"></i></div>
                        </div>
                    </section>
                    <section class="controls">
                        <div class="checkbox check-transparent">
                            <input type="checkbox" value="1" id="remember" checked>
                            <label for="remember">Remember me</label>
                        </div>
                        <a href="#">Forget password?</a>
                    </section>
                    <section class="log-in">
                        <button class="btn btn-greensea">Log In</button>
                        <span>or</span>
                        <button class="btn btn-slategray">Create an account</button>
                    </section>
                </form>
            </div>
        </div>
    </div>
</div>
<!--</template>-->

<script>
  export default {
    data () {
      return {
        msg: 'router'
      }
    },
    computed: {
      store: function () {
        return this.$store
      }
    }
  }
</script>
<style lang="scss" scoped>
    .example_warp {

    }
</style>