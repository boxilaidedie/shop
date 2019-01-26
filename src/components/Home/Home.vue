<template>
	<div>
		
			<div style="width:100%;height:30px;border-top:1px solid #eeee;z-index:999;display:flex;margin-top:40px;">
				<span :style="{height:'30px',display:'inline-block',lineHeight:'30px',width:'50%',textAlign:'center',fontSize:'14px',color:RecommendColor}" class="recommend" ref="recommend" @click="changeRecommend">推荐</span>
				<span :style="{height:'30px',display:'inline-block',lineHeight:'30px',width:'50%',textAlign:'center',fontSize:'14px',color:FocusColor}" class="focus" ref="focus" @click="changeFocus">社区</span>
			</div>
			<!--注意项目中：loadmore的父元素使用fixed定位，overflow:scroll,适应mint-ui中loadmore插件 -->
			<!-- tab-container组件 -->
			<mt-tab-container v-model="active" :style="{width:'100%',position:'fixed'}" :swipeable=true>
				<mt-tab-container-item id="tab-recommend" style="width:100%">
					<div class="wrapper" :style="{overflow:'scroll',width:'100%',height:contentHeight}">
						<!-- loadmore组件 -->
						<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
							<mt-swipe :auto="4000" :style="{height:swipeHeight}">
								<mt-swipe-item v-for="(img,index) in imgs" :key="index">
									<img :src="img">
								</mt-swipe-item>
							</mt-swipe>
							<div class="grid grid-nav">
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
				</mt-tab-container-item>
			<!-- tab-container组件 -->
			<mt-tab-container-item id="tab-focus" style="width:100%">
				<div style="width:100%">
					<div class="header-item" :style="{width:'100%',height:'43px',display:'flexd'}">
						<span :style="{width:'48%',height:'30px',display:'inline-block',border:'1px solid red',lineHeight:'30px',margin:'5px auto',textAlign:'center'}">1</span>
						<span :style="{width:'48%',height:'30px',display:'inline-block',border:'1px solid red',lineHeight:'30px',margin:'5px auto',textAlign:'center'}">1</span>
					</div>
					
				</div>
				<!-- 关注组件 -->
				<div class="good-items2" :style="{overflow:'scroll',display:'fixed',width:'99%',height:contentHeight2,border:'1px solid red'}">
					<!-- loadmore组件 -->
					<!-- <mt-loadmore 
					:top-method="loadTop" 
					:bottom-method="loadBottom" 
					:bottom-all-loaded="allLoaded" ref="loadmore"
					:auto-fill="false">
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
					</mt-loadmore> -->
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
const baozhu = require('../../assets/images/baozhu.png')
const dagu = require('../../assets/images/dagu.png')
const fuzifutie = require('../../assets/images/fuzifutie.png')
const wushitou = require('../../assets/images/wushitou.png')
const zhongguofengjianzhu = require('../../assets/images/zhongguofengjianzhu.png')
const bianpao = require('../../assets/images/bianpao.png')
import { Indicator } from 'mint-ui';
	export default {
		data(){
			return {
				imgs:['https://tp-eimg.smzdm.com/201901/22/5c468b8ceee686581.png',
				'https://tp-eimg.smzdm.com/201901/22/5c467905d692e3454.png',
				'https://tp-eimg.smzdm.com/201901/22/5c468b69dae7a8874.png'
				],
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
				loadCount2:1,
				allLoaded:false,
				allLoaded2:false,
				contentHeight:'',
				contentHeight2:'',
				swipeHeight:'',
				active:'tab-recommend',
				RecommendColor:'red',
				FocusColor:'#000',
			}
		},
		created(){
			var bodyHeight = document.body.clientHeight;
			this.contentHeight = Number(bodyHeight)-40-100 +'px';
			this.contentHeight2 = Number(bodyHeight)-60-100 +'px';
			
			this.axios.get('/api/goods?skip=5&page=1')
			.then((res)=>{
				this.goods = res.data.data
			}).catch((err)=>{
				console.log(err)
			});
		},
		methods:{
			loadTop(){
				Indicator.open();
				setTimeout(() => {
					this.loadCount++;
					this.axios.get('/api/goods?skip=5&page='+this.loadCount)
					.then((res)=>{
						this.goods = this.goods.concat(res.data.data)
						Indicator.close();
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
			changeRecommend(){
				this.active = 'tab-recommend';
			},
			changeFocus(){
				this.active = 'tab-focus';
			}
		},
		watch:{
			active:function(nVal,oVal){
				if(nVal == 'tab-recommend'){
					this.RecommendColor = 'red'
					this.FocusColor = '#000'
				}
				if(nVal == 'tab-focus'){
					this.FocusColor = 'red'
					this.RecommendColor = '#000'
				}
			}
		},
		mounted(){
			var swipeItem = document.getElementsByClassName('mint-swipe-item')[0];
			var swpieImgHeight = swipeItem.getElementsByTagName('img')[0].clientHeight;
			this.swipeHeight = swpieImgHeight;
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
	.good-items2{
		width: 100%;
		margin-top: 1px;
	}
	.good-items2 ul li{
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