<template>
    <div>
        <mt-popup
            v-model="settingVisible"
            position="bottom">
            <div class="setting-header">
                <i class="back" @click="backMemberPage"></i>
                <span class="text">设置</span>
            </div>
            <div>
                <mt-cell title="个人资料" label="" is-link class=""></mt-cell>
                <mt-cell title="推送设置" label="" is-link></mt-cell>
                <mt-cell title="账号安全" label="" is-link></mt-cell>
                <mt-cell title="隐私设置" label="" is-link></mt-cell>
                <mt-cell title="首页内容智能排序" label="" is-link></mt-cell>
                <mt-cell title="关于什么值得买" label="" is-link></mt-cell>
            </div>
            <div class="logout" @click="logout">
                退出登录
            </div>
        </mt-popup>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
var storage = window.localStorage
export default {
    data(){
        return {
            showSetting:this.settingVisible
        }
    },
    props:['settingVisible'],
    methods:{
        logout(){
            storage.removeItem('phone')
            this.$store.commit('hide')
            this.backMemberPage()
        },
        backMemberPage(){
            this.showSetting = false
            this.$emit('sendSettingVisible',this.showSetting)
        }
    }
}
</script>
<style scope>
.clearfix{
    clear: both
}
.mint-popup{
	position: fixed;
	width: 100%;
	height: 100%
}
.setting-header {
    width: 100%;
    height: 60px;
    border-bottom: 2px solid rgb(221, 219, 219);
    line-height: 60px;
}
.setting-header .back{
    background-image: url(../../assets/images/xiangzuojiantou.png);
    display: inline-block;
    float: left;
    width: 25px;
    height: 25px;
    background-size: 100%;
    margin-top: 18px;
    margin-left: 10px;
    background-repeat: no-repeat;   
}
.setting-header .text{
    display: inline-block;
    font-size: 18px;
    height: 60px; 
    height: 65px;
    line-height: 60px;
    margin-top: 2px;
    margin-left: 5px;
    font-weight: bold
}
.logout{
    width:100%;
    height: 45px;
    border-radius: 5px;
    margin-top: 10px;
    background: rgb(252, 99, 99);
    line-height:45px;
    color: #fff;
    font-size: 18px;
    text-align: center
}
</style>
