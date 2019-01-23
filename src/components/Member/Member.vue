<template>
	<div>
		<div class="userInfo">
			<div class="user-head">
				<img src="#" alt="">
			</div>
			<div class="user-content">
				<p class="user-name">值友6102131231</p>
				<p>
					<span class="grade">等级3</span>
					<span class="gold">金币: 6</span>
				</p>
			</div>
		</div>
		<div class="userinfo-content">
			<div class="user-msg">
				<div class="collect-msg">
					<a href=""><span>收藏</span></a>
					<a href=""><span>关注</span></a>
					<a href=""><span>足迹</span></a>
				</div>
				<div class="collect-number">
					<span>19</span>
					<span>10</span>
					<span>199</span>
				</div>
			</div>
			<div class="signIn">
				签到领奖
			</div>
		</div>
		<div class="advertising">
			<a href="#">广告位</a>
			<a href="#">广告位</a>
		</div>
		<div class="info-list">
			<mt-cell title="我的消息">
  				<span>好价、原创等</span>
  				<img slot="icon" src="http://iph.href.lu/100x100" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的发布">
  				<span></span>
  				<img slot="icon" src="http://iph.href.lu/100x100" width="24" height="24">
			</mt-cell>
			<hr style="margin-top:20px;margin-bottom:20px">
			<mt-cell title="优惠券">
  				<span></span>
  				<img slot="icon" src="http://iph.href.lu/100x100" width="24" height="24">
			</mt-cell>
			<mt-cell title="设置">
  				<span></span>
  				<img slot="icon" src="http://iph.href.lu/100x100" width="24" height="24">
			</mt-cell>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{

		}
	}
</script>
<style>
	.userInfo{
		width: 99.2%;
		height: 100px;
		border: 1px solid red;
		position: fixed;
		top: 40px;
	}
	.user-head{
		width: 75px;
		height: 75px;
		border: 1px solid red;
		border-radius: 40px;
		float: left;
		margin-top: 10px;
		margin-left: 10px;
	}
	.user-head img{
		display: block;
	}
	 .user-content{
		float: left;
		margin-top: 12px;
		margin-left: 16px;
	}
	.user-content .user-name{
		font-size: 18px;
		font-weight: bold
	}
	.user-content span{
		display: inline-block;
		margin-top: 25px;
		font-size: 12px;
	}
	.user-content .grade{
		width: 40px;
		height: 20px;
		color: white;
		text-align: center;
		line-height: 20px;
		background: grey;
		border-radius: 4px
	}
	.userinfo-content{
		width: 99%;
		height: 120px;
		margin-left: 14px;
		position: fixed;
		top: 170px;
	}
	.user-msg{
		display: inline-block;
		
	}
	
	.user-msg div span{
		color: black;
		text-decoration: none;
		width: 75px;
		height: 25px;
		
		display: inline-block
	}
	.collect-msg span{
		font-size: 16px;
		font-weight: bold;
	}
	.collect-number span{
		font-size: 14px;
		color: grey;
	}
	.signIn{
		display: inline-block;
		height: 40px;
		width: 130px;
		border:1px solid red;
		position: absolute;
		right: 20px;
		line-height: 40px;
		text-align: center;
		color: white;
		font-size: 14px;
		font-weight: bold;
		border-radius: 5px;
		background: red
	}
	.advertising {
		width: 100%;
		height: 80px;
		position: fixed;
		top: 230px;
	}
	.advertising a{
		display: block;
		width: 90%;
		height: 60px;
		margin: 0 auto;
		border: 1px solid red;
		border-radius: 5px;
		margin-top: 10px;
	}
	.advertising :nth-child(2){
		height: 90px;
	}
	.info-list{
		position: fixed;
		top: 430px;
		width: 99%;
		
	}
	.mint-cell-text{
		padding-left: 10px;
		font-weight: bold
	}
	.mint-cell-value span{
		font-size: 14px;
	}
</style>
