<template>
	<div>
		
			<!--注意项目中：overflow:scroll ，此wrapper使用fixed定位，去除首尾高度，适应mint-ui中loadmore插件 -->
			 <div class="wrapper" :style="{'height':contentHeight,'width':'100%',position:'fixed',overflow:'scroll'}">   
				<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false" :style="{touchAction: 'none'}">
					<mt-swipe :auto="4000" :style="{height:swipeHeight}">
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
						<li v-for="(good, index) in goods" :key="index">
							<div class="good-content" :style="{marginTop:'14px',marginLeft:'10px'}">
								<div style="float:left">
									<img :src="good.imageUrl" alt="" style="display:inline-block;width:90px;height:90px;">
								</div>
								<div>
									<div style="float:left;padding-left:10px;" class="item-content-right">
										<p class="good-title">{{good.title}}</p>
										<p class="good-tag">{{good.tag}}</p>
										<p class="good-price">{{good.price}}</p>
										<p :style="{marginTop:'4px'}">
											<span :style="{fontSize:'8px',marginTop:'4px'}">{{good.source}} | {{good.getTime}}</span>
											<span :style="{fontSize:'6px',display:'inline-block',marginLeft:'70px'}">值：{{good.deserveNumberPercent}}</span>
										</p>
									</div>
								</div>
							</div>
						</li>
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
				imgs:['https://tp-eimg.smzdm.com/201901/22/5c468b8ceee686581.png','https://tp-eimg.smzdm.com/201901/22/5c467905d692e3454.png','https://tp-eimg.smzdm.com/201901/22/5c468b69dae7a8874.png'],
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
				goods:[],
				loadCount:1,
				allLoaded:false,
				contentHeight:'',
				swipeHeight:''
			}
		},
		created(){
			var contentH = document.body.clientHeight;
			this.contentHeight = Number(contentH)-40-100 +'px';
			this.axios.get('/api/goods?skip=5&page=1')
			.then((res)=>{
				this.goods = res.data.data
				
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
						this.goods = this.goods.concat(res.data.data)
						this.$refs.loadmore.onTopLoaded();	
						
					}).catch((err)=>{
						console.log(err)
					})
				},1500)
			},
			loadBottom() {
				setTimeout(() => {
					this.loadCount++;
					this.axios.get('/api/goods?skip=5&page=' + this.loadCount)
					.then((res)=>{
						this.goods = this.goods.concat(res.data.data)
						this.$refs.loadmore.onBottomLoaded();
					
					}).catch((err)=>{
						console.log(err)
					})
					console.log(this.goods)
				}, 1500);
				
				
			},
			
		},
		mounted(){
			var swipeItem = document.getElementsByClassName('mint-swipe-item')[0];
			var swpieImgHeight = swipeItem.getElementsByTagName('img')[0].clientHeight;
			console.log(swpieImgHeight)
			this.swipeHeight = swpieImgHeight

		}
	}
</script>

<style scoped>
	.mint-swipe {
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
	.item-content-right .good-title {
		color: #000;
		font-size: 14px;
		font-weight: bold
	}
	.item-content-right .good-tag{
		color:grey;
		height: 15px;
		line-height: 15px;
		width: 35px;
		font-size: 6px;
		background-color: #eee;
		text-align: center;
		font-weight: bold;
		margin-top: 5px
	}
	.item-content-right .good-price {
		color:red;			
		font-size: 12px;
		margin-top: 10px
	}


</style>