<template>
  <div id="app">
    <mt-header fixed :title="title">
      <router-link to="/" slot="right">
          <mt-button icon="more"></mt-button>
      </router-link>
    </mt-header>
    <router-view/>
    <mt-tabbar v-model="selected" is-fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/images/shouye.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="goodsPrice">
        <img slot="icon" src="./assets/images/gouwuche.png">
        好价
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/images/sousuo.png">
        好物社区
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/images/wodejuhuasuan.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:'home',
      title:'什么值得买'
    }
  },
  created(){
    this.$router.push({
      name:'home'
    })
  },
  watch:{
    selected(nVal, oVal){    
      console.log(nVal)
      this.title = nVal == 'home' ? '什么值得买' : ''
      this.title = nVal == 'goodsPrice' ? '好价' : ''
      this.title = nVal == 'search' ? '好物社区' : ''
      this.title = nVal == 'member' ? '我的' : ''
    if( nVal == 'home' ){
      this.title = '什么值得买'
    }else if(nVal == 'goodsPrice'){
      this.title = '好价'
    }else if(nVal == 'search'){
      this.title = '好物社区'
    }else if(nVal == 'member'){
      this.title = '我的'
    }
      this.$router.push({
        name:nVal
      })
    }
  }
}
</script>

<style>
body{
    background:rgba(211,211,211,.2)
}
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
.mint-tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:999
}
</style>
