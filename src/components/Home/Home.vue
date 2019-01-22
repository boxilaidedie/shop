<template>
	<div>
		
			<div style="width:100%;height:30px;border-top:1px solid #eeee;z-index:999;display:flex;margin-top:40px;">
				<span style="height:30px;display:inline-block;line-height:30px;width:50%;text-align:center;font-size:14px" class="recommend">推荐</span>
				<span style="height:30px;display:inline-block;line-height:30px;width:50%;text-align:center;font-size:14px" class="fcous">关注</span>
			</div>
			<div ref="wrapper" :style="{overflow:scroll,height:contentHeight}">
				<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false">
					<mt-swipe :auto="4000" >
						<mt-swipe-item v-for="(img,index) in imgs" :key="index">
							<img :src="img">
						</mt-swipe-item>
					</mt-swipe>
				<div class="grid">
					<header-item>
						<li v-for="(item, index) in itemImages" :key="index">
							<a :href="item.url">
								<span class="cms-news" :style = "{backgroundImage:'url('+item.icon+')'}"></span>
								<div class="news-text">{{item.title}}</div>
							</a>
						</li>
					</header-item>
				</div>
				<div class="good-items">
					<ul>
						<li v-for="(good, index) in goods" :key="index">{{good.title}}</li>
					</ul>
				</div>
			</mt-loadmore>
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
					title:'白菜专区',
					icon:baozhu,
					url:'#/news/list'	
				},{
					title:'排行榜',
					icon:dagu,	
					url:'#/news/list'	
				},{
					title:'签到福利',
					icon:fuzifutie,	
					url:'#/news/xixi'	
				},{
					title:'经验攻略',
					icon:zhongguofengjianzhu,	
				},{
					title:'在线天气',
					icon:bianpao,	
					url:'#/news/list'	
				},{
					title:'分类导航',
					icon:wushitou,	
					url:'#/news/list'	
				}],
				items:[1,2,3,4,5,6,7],
				goods:[],
				loadCount:1,
				allLoaded:false,
				contentHeight:''
			}
		},
		created(){
			this.axios.get('/api/goods?skip=5&page=1')
			.then((res)=>{
				
				this.goods = res.data.data;
			}).catch((err)=>{
				console.log(err)
			});
		},
		methods:{
			loadTop(){
				setTimeout(() => {
					this.loadCount++;
					this.axios.get('/api/goods?skip=5&page='+this.loadCount)
					.then((res)=>{
						console.log(res.data.data)
						this.goods = res.data.data;
						console.log(this.loadCount)
					}).catch((err)=>{
						console.log(err)
					})
					this.$refs.loadmore.onTopLoaded();
				},1500)
			},
			loadBottom() {
				 this.$refs.loadmore.onBottomLoaded();
			},
			contentH(){
				var contentH = this.$refs.wrapper.clientHeight;
				this.contentHeight = contentH + 'px'
			}
		}
	}
</script>

<style scoped>

	.mint-swipe {
		height: 180px;

		overflow: hidden;

	}
	img {
		width: 100%;
		background: red
	}

	.grid li{
		list-style: none;
		width: 33.3333333%;
		float: left;
		background:#fff;
		height: 90px;
		line-height: 90px;
		text-align: center;
		position: relative;
	}
	.grid li a{
		margin-top: 10px;
		text-decoration: none;
		color:#000
	}
	.cms-news{
		display: inline-block;
		width: 50px;
		height: 50px;
		background-repeat: round;
		position: absolute;
		left: 50%;
		top: 10px;
		margin-left: -25px;

	}
	.news-text{
		display: inline-block;
		font-size: 12px;
		height: 30px;
		line-height: 30px;
		margin-top: 53px;
	}
	.good-items{
		width: 100%;
		margin-top: 192px;
	}
	.good-items ul li{
		list-style:none;
		color:black;
		height: 120px;
		border: 1px solid #eee;
		width: 94%;
		margin:10px auto;
		box-shadow: 0px 1px 4px grey;
		border-radius: 4px;
		background:#fff
		
	}

</style>