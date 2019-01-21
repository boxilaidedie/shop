<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(img,index) in imgs" :key="index">
		  	<img :src="img">
		  </mt-swipe-item>
		</mt-swipe>

		<div class="grid">
			<header-item>
				<li v-for="(item, index) in itemImages" :key="index">
					<a href="#/news/list">
						<span class="cms-news" :style = "{backgroundImage:'url('+item.icon+')'}"></span>
						<div class="news-text">{{item.title}}</div>
					</a>
				</li>
			</header-item>
		</div>
	</div>
</template>

<script>
const baozhu = require('../../assets/images/baozhu.png')
const dagu = require('../../assets/images/dagu.png')
const fuzifutie = require('../../assets/images/fuzifutie.png')
const wushitou = require('../../assets/images/wushitou.png')
const zhongguofengjianzhu = require('../../assets/images/zhongguofengjianzhu.png')
const bianpao = require('../../assets/images/bianpao.png')
	export default {
		data(){
			return {
				imgs:['http://iph.href.lu/375x224','http://iph.href.lu/375x224','http://iph.href.lu/375x224'],
				itemImages:[{
					title:'新闻资讯',
					icon:baozhu,
					url:'#/news/list'	
				},{
					title:'图文分享',
					icon:dagu,	
					url:'#/news/list'	
				},{
					title:'国际时讯',
					icon:fuzifutie,	
					url:'#/news/list'	
				},{
					title:'世界之窗',
					icon:zhongguofengjianzhu,	
				},{
					title:'在线天气',
					icon:bianpao,	
					url:'#/news/list'	
				},{
					title:'高考咨询',
					icon:wushitou,	
					url:'#/news/list'	
				}],
			}
		},
		methods:{

		},
		created(){
			// this.axios.get('http://www.sinya.online/api/getlunbo')
			// .then((res)=>{
			// 	console.log(res.data)
			// 	this.imgs = res.data.message
			// })
			// .catch((err)=>{
			// 	console.log('swpie-error' + err)
			// })
		}
	}
</script>

<style scoped>
	.mint-swipe {
		height: 224px;
		border: 1px solid red;
		overflow: hidden;
		margin-top: 40px
	}
	img {
		width: 100%;
		background: red
	}

	.grid li{
		list-style: none;
		width: 33.3333333%;
		float: left;
		background: green;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}
	.grid li a{
		margin-top: 10px;
		text-decoration: none;
		color: #fff
	}
	.cms-news{
		display: block;
		width: 50px;
		height: 50px;
		margin-top: 15px;
		background-repeat: round;
		/* background-image: url('../../assets/images/dagu.png'); */
		margin-left: 37px;
	}
	.news-text{
		font-size: 12px;
		height: 15px;
		line-height: 15px;
	}

</style>