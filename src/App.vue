<template>
  <div id="app">
    <mt-header fixed title="新蛋商城"></mt-header>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
