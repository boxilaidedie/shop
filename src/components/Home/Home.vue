<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(img,index) in imgs" :key="index">
		  	<img :src="img.img">
		  </mt-swipe-item>
		</mt-swipe>

		<div class="grid">
			<ul>
				<li>
					<a href="#/news/list" class="">
						<span class="cms-news"></span>
						<div class="news-text">新闻资讯</div>
					</a>
				</li>
				<li>
					<a href="#/news/list" class="">
						<span class="cms-news"></span>
						<div class="news-text">新闻资讯</div>
					</a>
				</li>
				<li>
					<a href="#/news/list" class="">
						<span class="cms-news"></span>
						<div class="news-text">新闻资讯</div>
					</a>
				</li>
				<li>
					<a href="#/news/list" class="">
						<span class="cms-news"></span>
						<div class="news-text">新闻资讯</div>
					</a>
				</li>
				<li>
					<a href="#/news/list" class="">
						<span class="cms-news"></span>
						<div class="news-text">新闻资讯</div>
					</a>
				</li>
				<li>
					<a href="#/news/list" class="">
						<span class="cms-news"></span>
						<div class="news-text">新闻资讯</div>
					</a>
				</li>

			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgs:[]
			}
		},
		methods:{

		},
		created(){
			this.axios.get('http://www.sinya.online/api/getlunbo')
			.then((res)=>{
				console.log(res.data)
				this.imgs = res.data.message

			})
			.catch((err)=>{
				console.log('swpie-error' + err)
			})
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
		text-align: center
	}
	.cms-news{
		display: inline-block;
		width: 50px;
		height: 50px;
		background-repeat: round;
		background-image: url('../../assets/images/dagu.png');
	}
	.news-text{
		font-size: 12px;
		display: inline-block;
	}

</style>