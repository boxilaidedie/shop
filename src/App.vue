<template>
  <div id="app">
    <mt-header fixed title="什么值得买">
      <router-link to="/" slot="right">
          <mt-button icon="more"></mt-button>
      </router-link>
    </mt-header>
    <div class="navbar-bottom" style="width:100%;height:30px;border-top:1px solid #eeee;z-index:999;display:flex;margin-top:40px;">
      <router-link to="/" style="display:inline-block">
        <span style="height:30px;display:inline-block;line-height:30px;width:50%;text-align:center;font-size:14px" class="recommend">推荐</span>
      </router-link>
       <router-link to="/">
      <span style="height:30px;display:inline-block;line-height:30px;width:50%;text-align:center;font-size:14px" class="fcous">关注</span>
       </router-link>
    </div>  
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/images/shouye.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="shopcar">
        <img slot="icon" src="./assets/images/gouwuche.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/images/sousuo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/images/wodejuhuasuan.png">
        会员
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:'home'
    }
  },
  watch:{
    selected(nVal, oVal){
      this.$router.push({
        name:nVal
      })
    }
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mint-header-title{
  width: 100%;
  text-align: left;
  flex:10
}
.mint-header{
  background-color: #fff;
  color: #000;
}
.mint-header-title{
  font-size: 16px;
  font-weight: bold
}
</style>
