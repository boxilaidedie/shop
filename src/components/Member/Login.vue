<template>
    <div>
       <mt-popup
				v-model="loginVisible"
				position="bottom"
				>
				<div>
					<div class="close" @click="closeLogin" :style="{width:'130px',height:'50px',fontSize:'30px',color:'red',fontWeight:'bold',margin:'15px'}">关闭</div>
					<div :style="{fontSize:'20px',fontWeight:'bold',margin:'15px'}">手机快捷登录</div>
					<div>
						<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" :state='phoneCheck' @focus.native.capture="phoneFocus">
							<div class="getCaptcha" :style="{width:'100px',height:'30px',background:'grey',color:'#fff',fontSize:'14px',textAlign:'center',lineHeight:'30px'}">
								获取验证码
							</div>	
						</mt-field >
							<mt-field label="验证码" v-model="captcha" :state='captchaCheck'>
						</mt-field>
					</div>
					<div :style="{fontSize:'14px',color:'grey',marginLeft:'18px',marginTop:'10px'}">未注册手机号将自动注册</div>
					<div @click="login" :style="{position:'fixed',bottom:'0px',height:'60px',width:'100%',lineHeight:'60px',textAlign:'center',color:'#fff',background:'red',fontSize:'22px'}">登录</div>
				</div> 
			</mt-popup>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
var storage = window.localStorage
export default {
    data(){
        return {
            showLogin:this.loginVisible,
            phone:'',
            captcha:'',
            phoneCheck:'',
            captchaCheck:''
        }
    },
    props:['loginVisible'],
    methods:{
        closeLogin(){
            this.showLogin = false
            this.$emit('sendLoginVisible', this.showLogin)
        },
        login(){
            this.loginFilter(this.phone,this.captcha)
        },
        phoneFocus(){
            this.phoneCheck = ''
            this.captchaCheck = ''
        },
        loginFilter(phone,captcha){
            if(this.phone == ''){
                this.phoneCheck = 'error'
            }
            if(this.captcha == ''){
                this.captchaCheck = 'error'
            }
            storage.setItem('phone',this.phone)
            if(storage['phone']){
                this.captcha = ''
                this.phone = ''
                this.$store.commit('show')
                this.closeLogin()
            }else{
                return 
            }
        }
    },
}
</script>
<style scope>
.mint-popup{
	position: fixed;
	width: 100%;
	height: 100%
}
</style>
