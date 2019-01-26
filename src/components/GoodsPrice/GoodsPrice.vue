<template>
	<div>
		<div class="container" :style="{height:contentHeight}">
			<mt-loadmore :top-method="loadTopArea" :bottom-method="loadBottomArea" :bottom-all-loaded="loaded" ref="goodsPriceLoaded">
				
				<mt-swipe :auto="4000" :style="{height:swipeHeight}">
					<mt-swipe-item v-for="(img,index) in imgs" :key="index">
						<img :src="img">
					</mt-swipe-item>
				</mt-swipe>
				<div class="main">
					<div class="goodsPrice">
						<div class="goodsPrice-wrapper">
							<h4>白菜专区</h4>
							<div class="hr"></div>
							<div class="goodsPrice-content">
								<p>管道疏通剂</p>
								<p>温和高效5元包邮</p>
							</div>
						</div>
						<div class="goodsPrice-img">
							<img src="../../assets/images/xiaoxizhongxin.png" alt="">
						</div>
					</div>
					<div class="coupons">
						<h4>领劵中心</h4>
						<div class="hr"></div>
						<div class="coupons-content">
							<p>管道疏通剂</p>
							<p>温和高效5元包邮</p>
						</div>
					</div>
				</div>

				<div class="main-menu">
					<span @click="popWrapPrice">价格</span>
					<span>商城</span>
					<span>分类</span>
					<span>综合</span>
				</div>
			</mt-loadmore>
				<mt-popup
  					v-model="popupVisible"
  					popup-transition="popup-fade">
					<div class="pop-wrapper" ref="popWrapper">
						<span :style="{'font-size':'18px',fontWeight:'bold',marginLeft:'15px'}">价格区间&nbsp;</span><span :style="{color:'red',fontSize:'12px'}">不区分货币</span>
						<hr style="margin-top:6px;opacity:0.4">
						<mt-field label="最低价：" placeholder="请输入金额" v-model="priceLow" @input.native="onlyNumber"></mt-field>
						<mt-field label="最高价：" placeholder="请输入金额" v-model="priceHight" @input.native="onlyNumber"></mt-field>
					</div>
					<mt-button type="danger" :style="{width:'160px',position:'absolute',left:'-75px',bottom:'30px',marginLeft:'50%'}" @click="priceConfirm">确认</mt-button>	  
				</mt-popup>
		</div>
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
	export default {
		data(){
			return {
				imgs:['https://tp-eimg.smzdm.com/201901/22/5c468b8ceee686581.png',
				'https://tp-eimg.smzdm.com/201901/22/5c467905d692e3454.png',
				'https://tp-eimg.smzdm.com/201901/22/5c468b69dae7a8874.png'],
				contentHeight:'',
				swipeHeight:'',
				loadCount:1,
				loaded:false,
				popupVisible:false,
				windowHeight:'',
				windowWidth:'',
				priceLow:'',
				priceHight:''
				

			}
		},
		methods:{
			loadTopArea(){
				Indicator.open();
				setTimeout(()=>{
					Indicator.close();
					this.$refs.goodsPriceLoaded.onTopLoaded();
				},1500)
				
				
			},
			loadBottomArea(){
				setTimeout(()=>{
					this.loaded = true;
					this.$refs.goodsPriceLoaded.onBottomLoaded();
				},1500)
			},
			popWrapPrice(){
				this.popupVisible = true;
		
			},
			priceConfirm(){
				var priceLow = this.priceLow;
				var priceHight = this.priceHight;
				// 获取价格查询商品信息
				//......sendAjax........
				//doSomethings
				//......sendAjax........
				this.popupVisible = false
			},
			onlyNumber(){
				this.priceLow = this.priceLow.replace(/[^\d]/g,'');
				this.priceHight = this.priceHight.replace(/[^\d]/g,'');
			}
		},
		created(){
			
		},
		mounted(){
			var bodyHeight = document.body.clientHeight;
			this.windowHeight = document.body.clientHeight;
			this.windowWidth = document.body.clientHeight;
			this.contentHeight = Number(bodyHeight)-40 - 56 +'px';
			var swipeItem = document.getElementsByClassName('mint-swipe-item')[0];
			var swpieImgHeight = swipeItem.getElementsByTagName('img')[0].clientHeight;
			this.swipeHeight = swpieImgHeight + 'px';
		},
		watch:{
			popupVisible(nVal, oVal){
				if(nVal == false){
					var priceLow = this.priceLow;
					var priceHight = this.priceLow
				}else{
					this.priceLow = '';
					this.priceHight = '';
				}
			},
		}
	}
</script>
<style scoped>
	.container {
		width: 99%;
		margin-top: 40px;
		overflow:'scroll';
		background: #eee
	}
	.mint-swipe-items-wrap img{
		width: 100%;
	}
	.main{
		width: 100%;
		height: 100px;
		display: flex;
		margin-top: 5px;
		background: linear-gradient(rgb(255, 255, 255),rgb(250, 250, 250),rgb(250, 250, 250),rgb(230, 228, 228));
	}
	.main  .hr{
		border-top: 2px solid rgb(218, 218, 218);
		width: 30px;
		margin:10px 0 5px 0;
	}
	.goodsPrice {
		width: 50%;
		margin-top: 10px;
		padding-left: 10px;
	}
	.coupons{
		margin-top: 10px;
	}
	.goodsPrice-content :nth-child(2){
		font-size: 12px;
		color: #6d6d6d;
		margin-top: 5px
	}
	.coupons-content :nth-child(2){
		font-size: 12px;
		color: #6d6d6d;
		margin-top: 5px
	}
	.goodsPrice-content :nth-child(1){
		font-size: 14px;
	}
	.coupons-content :nth-child(1){
		font-size: 14px;
	}
	.goodsPrice-wrapper{
		float: left
	}
	.goodsPrice-img{
		float: right;
	}
	.goodsPrice-img img{
		width: 40px;
		height: 40px;
		padding: 15px
	}
	.main-menu{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 35px;
		text-align: center;
	}
	.main-menu span{
		display: inline-block;
		width: 25%;
		color: #8f8f8f;
		font-size: 14px;
		background: url(../../assets/images/xiangxiajiantou.png) no-repeat;
		background-size: 10px 10px;
		background-position: 67px 5px;
	}
	.pop-wrapper{
		margin-top: 15px;
	}
	.mint-popup{
		width: 100%;
		height: 40%;
		position: fixed;
		opacity: 1;
	}
</style>