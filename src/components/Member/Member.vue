<template>
	<div>
		<div class="container" :style="{height:containerHeight,marginTop:'42px'}">
			<div v-if="login">
				<div class="header">
					<div class="user-head">
						<img src="#" alt="">
						$
					</div>
					<div class="user-msg">
						<p class="name">值友6102131231</p>
						<p>
							<span class="grade">等级3</span>
							<span class="gold">金币: 6</span>
						</p>
					</div>
				</div>

				<div class="wrapper-btn">
					<div class="wrapper-btn-left">
						<div class="wrapper-main">
							<router-link to="#" class="collect"><span>收藏</span></router-link>
							<router-link to="#" class="focus"><span>关注</span></router-link>
							<router-link to="#" class="footmark"><span>足迹</span></router-link>
						</div>
						<div class="number">
							<span>19</span>
							<span>10</span>
							<span>199</span>
						</div>
					</div>
						<div class="wrapper-btn-right sign-in" ref="signature " @click="signSuccess">
							{{signature}}
						</div>
				</div>

				<div class="wrapper-system-info">
					<router-link to="#">系统信息<img src="#" alt=""></router-link>
				</div>
			</div>
			<div v-else>
				<div class="header login" @click="signIn">
					<div class="user-head">
						<img src="#" alt="">
						$
					</div>
					<div class="user-msg">
						<p class="name">立即登录</p>
						<p :style="{color:'grey',fontSize:'14px',marginTop:'5px'}">解锁全部功能，畅享只有专属福利</p>
					</div>
				</div>
			</div>
			<mt-popup
				v-model="popupVisible"
				position="bottom"
				>
				<div>
					<div class="close" @click="closeLogin" :style="{width:'130px',height:'50px',fontSize:'30px',color:'red',fontWeight:'bold',margin:'15px'}">关闭</div>
					<div :style="{fontSize:'20px',fontWeight:'bold',margin:'15px'}">手机快捷登录</div>
					<div>
						<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone">
							<div class="getCaptcha" :style="{width:'100px',height:'30px',background:'grey',color:'#fff',fontSize:'14px',textAlign:'center',lineHeight:'30px'}">
								获取验证码
							</div>	
						</mt-field>
							<mt-field label="验证码" v-model="captcha" >
						</mt-field>
					</div>
					<div :style="{fontSize:'14px',color:'grey',marginLeft:'18px',marginTop:'10px'}">未注册手机号将自动注册</div>
					<div :style="{position:'fixed',bottom:'0px',height:'60px',width:'100%',lineHeight:'60px',textAlign:'center',color:'#fff',background:'red',fontSize:'22px'}" @click="PhoneLogin">登录</div>
				</div> 
			</mt-popup>
			<div class="wrapper-ad-info">
				<mt-swipe :auto="4000" :style="{height:'100px'}">
					<mt-swipe-item v-for="(img,index) in imgs" :key="index">
						<img :src="img">
					</mt-swipe-item>
				</mt-swipe>
			</div>
			
			<div class="wrapper-item">
				<div class="footer-top-items">
					<mt-cell title="我的消息">
						<img slot="icon" src="../../assets/images/xiaoxizhongxin.png" width="24" height="24">
						<span style="display:inline-block;width:35px;height:18px;background:red;border-radius:5px;text-align:center;line-height:18px;color:#fff">{{message}}</span>
					</mt-cell>
					<mt-cell title="我的发布">
						<span>好价、原创等</span>
						<img slot="icon" src="../../assets/images/wodedingdan.png" width="24" height="24">
					</mt-cell>
					<mt-cell title="预告提醒">
						<img slot="icon" src="../../assets/images/tishi.png" width="24" height="24">
					</mt-cell>
				</div>
				<div class="footer-bottom-items">
					<mt-cell title="Visa淘金计划">
						<img slot="icon" src="../../assets/images/gouwuche.png" width="24" height="24">
					</mt-cell>
					<mt-cell title="优惠券">
						<img slot="icon" src="../../assets/images/baozhu.png" width="24" height="24">
					</mt-cell>
					<mt-cell title="我的勋章">
						<img slot="icon" src="../../assets/images/wodedingdan.png" width="24" height="24">
					</mt-cell>
					<mt-cell title="设置">
						<img slot="icon" src="../../assets/images/shezhi.png" width="24" height="24">
					</mt-cell>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		data(){
			return {
				containerHeight:'',
				imgs:['https://tp-eimg.smzdm.com/201901/22/5c468b8ceee686581.png','https://tp-eimg.smzdm.com/201901/22/5c467905d692e3454.png','https://tp-eimg.smzdm.com/201901/22/5c468b69dae7a8874.png'],
				message:5,
				signature:'签到领奖',
				signStatus:false,
				login:false,
				popupVisible:false,
				modalWidth:'',
				modalHeight:'',
				phone:'',
				captcha:''
			}
		},
		methods:{
			signSuccess(){
				if(this.signStatus == false){
					MessageBox({
						title: '签到成功',
						message: '每日签到:+1',
						showCancelButton: true
					}).then((action)=>{
						if(action == 'confirm'){
							this.signature = '已签到'
							this.signStatus = true
						}
					});
				}else{
					return false
				}
			},
			signIn(){
				this.popupVisible = true
			},
			closeLogin(){
				this.popupVisible = false
			},
			PhoneLogin(){
				this.popupVisible = false
				this.login = true
				// this.$store.commit('show')
				// this.login = this.$store.state.login

			}
		},
		created(){
			var windowHeight = document.body.clientHeight
			this.containerHeight = windowHeight - 40 - 55 + 'px'
		}
	}
</script>
<style scope>
a{
	text-decoration: none;
	color: #000
}
.container{
	overflow: scroll;
}
.header{
	width: 99%;
	height: 100px;
	/* border: 1px solid red; */
}
.header .user-head{
	width: 70px;
	height: 70px;
	border: 2px solid red;
	border-radius: 40px;
	float: left;
	margin-top: 10px;
	margin-left: 15px;
	background-color:white;
	text-align:center;
	line-height: 70px;
	font-size: 80px;
	font-weight: bold;
	color: red;
	overflow: hidden;
}
.header .user-head img{
	display: inline-block
}
.header .user-msg{
	float: left;
	margin-top: 12px;
	margin-left: 16px;
}
.header .user-msg span{
	
}
.header .user-msg .name{
	font-size: 18px;
	font-weight: bold
}
.header .user-msg .grade{
	display: inline-block;
	font-size: 12px;
	width: 40px;
	height: 20px;
	color: white;
	text-align: center;
	background: grey;
	line-height: 20px;
	border-radius: 4px;
	margin-top: 15px;
}
.header .user-msg .gold{
	display: inline-block;
	font-size: 12px;
	width: 45px;
	height: 16px;
	text-align: center;
	line-height: 16px;
	color: grey;
	margin-left: 5px;
}
.wrapper-btn{
	height: 85px;
	width: 100%;
	margin-top: 10px;
}
.wrapper-btn-left{
	float: left;
	margin-left: 15px;
}
.wrapper-btn-left .wrapper-main{
	width: 180px;
}
.wrapper-btn-left .wrapper-main a{
	display: inline-block;
	width: 50px;
}
.wrapper-btn-left .wrapper-main a{
	display: inline-block;
	width: 50px;
	
	text-decoration: none;
	color: #000;
	/* font-weight: bold */
}
.wrapper-btn-left .number{
	width: 180px;
}
.wrapper-btn-left .number span{
	display: inline-block;
	width: 50px;
	margin-top: 5px;
	color: grey;
	font-size: 14px;
}
.wrapper-btn-right{
	float: right;
	width: 120px;
	height: 40px;
	border: 1px solid red;
	border-radius: 5px;
	text-align: center;
	line-height: 40px;
	background-color: red;
	color: #fff;
	font-weight: bold;
	margin-right: 15px;
}
.wrapper-system-info{
	width: 99%;
	height: 60px;
	border: 1px solid red;
	margin-bottom: 15px;
	border-radius: 5px;
	text-align: center;
	line-height: 60px;
	font-size: 22px;
}
.wrapper-item{
	margin-top: 15px;
}
.wrapper-item{
	margin-top: 30;
}
.wrapper-item .footer-top-items {
	margin-bottom: 15px;
}
.mint-cell-text{
	font-size: 14px;
	padding-left: 10px;
}
.mint-cell-value span{
	font-size: 14px;
}
.mint-msgbox-title{
	font-size: 18px;
	margin-bottom: 10px;
}
.mint-msgbox-message{
	color: red;
	margin-bottom: 10px;
}
.mint-popup{
	position: fixed;
	width: 100%;
	height: 100%
}
</style>
