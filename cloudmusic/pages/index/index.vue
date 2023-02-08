<template>
	<view class="content">
		<navigationbar :title="title">
			<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-aixin"></use>
			</svg>
		</navigationbar>
		<span class="iconfont icon-fenxiang"></span> 
		
	</view>
</template>

<script>
	import '@/static/iconfont/iconfont.js'
	import navbar from "@/components/navigationbar/navigationbar.vue"
	export default {
		data() {
			return {
				title:'网易云音乐'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.icon {
	  width: 1em !important;
	  height: 1em !important;
	  vertical-align: -0.15em !important;
	  fill: currentColor;
	  overflow: hidden !important;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
