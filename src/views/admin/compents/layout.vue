<template>
  <div>
    <div id="header">
      <h1>花间超市</h1>
    </div>
    <div id="user-nav" class="navbar navbar-inverse">
      <ul class="nav">
        <li class="dropdown" id="profile-messages"><a title="" href="#" data-toggle="dropdown"
                                                      data-target="#profile-messages" class="dropdown-toggle"><i
          class="icon icon-user"></i> <span class="text">{{ store.state.current_user.name }}</span><b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="#"><i class="icon-user"></i> My Profile</a></li>
            <li class="divider"></li>
            <li><a href="#"><i class="icon-check"></i> My Tasks</a></li>
            <li class="divider"></li>
            <li :click="logout">Log Out</li>
          </ul>
        </li>
        <li class="dropdown" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages"
                                                   class="dropdown-toggle"><i class="icon icon-envelope"></i> <span
          class="text">Messages</span> <span class="label label-important">5</span> <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a class="sAdd" title="" href="#"><i class="icon-plus"></i> new message</a></li>
            <li class="divider"></li>
            <li><a class="sInbox" title="" href="#"><i class="icon-envelope"></i> inbox</a></li>
            <li class="divider"></li>
            <li><a class="sOutbox" title="" href="#"><i class="icon-arrow-up"></i> outbox</a></li>
            <li class="divider"></li>
            <li><a class="sTrash" title="" href="#"><i class="icon-trash"></i> trash</a></li>
          </ul>
        </li>
        <li class=""><a title="" href="#"><i class="icon icon-cog"></i> <span class="text">Settings</span></a></li>
        <li class="" ><a title="" v-on:click="logout"><i class="icon icon-share-alt"></i> <span class="text">Logout</span></a>
        </li>
      </ul>
    </div>
    <div id="search">
      <input type="text" placeholder="Search here..."/>
      <button type="submit" class="tip-bottom" title="Search"><i class="icon-search icon-white"></i></button>
    </div>

    <div id="sidebar">
      <a href="#" class="visible-phone"><i class="icon icon-home"></i> Dashboard</a>
      <ul>
        <li :class="[current_view == '/production' ? 'active':'']">
          <router-link :to="'/production'"><span>产品列表</span></router-link>
        </li>
        <li :class="[current_view == '/import_record' ? 'active':'']">
          <router-link :to="'/import_record'"><span>入库记录</span></router-link>
        </li>
        <li :class="[current_view == '/sell_record' ? 'active':'']">
          <router-link :to="'/sell_record'"><span>销售记录</span></router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default{
    data() {
      return {
//        productions: []
      }
    },
    computed: {
      store: function () {
        return this.$store
      },
      current_view: function () {
        return this.$route.path
      }

    },
    methods:{
      logout:function () {
        $.ajax({
          url:'/admin/logout',
          type:"delete",
          success:function () {
            window.location.reload()
          }
        })
      }
    },
    created: function () {

    },
    components:{
//      productList,
//      importRecord,
//      sellRecord,
//      sellShow,
    },
    updated: function () {


    }
  }
</script>

<style lang="scss" scoped>
  #header h1 {
    line-height: 20px;
    color: #fff;
    background: none;
    font-size: 23px;
  }
</style>