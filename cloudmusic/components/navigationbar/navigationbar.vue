<template>
	<view class="music-head">
		<view v-if="showIcon" class="music-head-icon-content">
				<text 
				class="iconfont icon-fanhui" 
				@click="handleBack"></text>
							|
				<text 
				class="iconfont icon-shouye" 
				@click="handleHome"></text>
			
		</view>
		<view>
			{{title}}
			<slot></slot>
		</view>
	</view>
</template>

<script>
	import iconfont from "@/static/iconfont/iconfont.css"
	export default {
		name:"navigationbar",
		data() {
			return {
			};
		},
		props:['title','showIcon'],
		methods:{
			handleBack(){
				uni.navigateBack()
			},
			handleHome(){
				uni.navigateTo({
					//不加后缀.vue 
					url: '/pages/index/index',
					success: res => {
						console.log(res,'111');
					},
					fail: (e) => {
						console.log(e,222);
					},
					complete: () => {}
				});
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.music-head{
		width: 100%;
		height: 75px;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		display: flex;
		justify-content: space-around;
		position: relative;
	}
	.music-head-icon-content{
		// style="background-color: aqua;"
		background-color: rgba(0,0,0,0.4);
		height: 26px;
		width: 80px;
		position: absolute;
		top: 26px;
		line-height: 26px;
		border-radius: 16px;
		left: 10px;
	}
.icon {
  width: 16px;
  height: 16px;
  vertical-align: -3px;
  fill: currentColor;
  overflow: hidden;
}

</style>