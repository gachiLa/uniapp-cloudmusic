<template>
	<view class="content">
		<navigationbar :title="title" showIcon="false">
		</navigationbar>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="index-serch">
					<text class="iconfont icon-sousuo
					"></text>
					<input type="text" placeholder="serch">
				</view>
				<view class="index-list">
					<view class="index-list-item">
						<view class="index-list-img">
							<image src="../../static/logo.png">
							</image>
							<text>new song</text>
						</view>
						<view class="index-list-text">
							<view class="">
								1.no thing
							</view>
							<view class="">
								1.no thing
							</view>
							<view class="">
								1.no thing
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<span class="iconfont icon-fenxiang"></span> 
		
	</view>
</template>

<script>
	import navigationbar from "@/components/navigationbar/navigationbar.vue"
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

<style scoped lang="scss">
	.index-serch{
		display: flex;
		align-items: center;
		height: 160rpx;
		margin: 20rpx 10rpx 10rpx 10rpx;
		border-radius: 50rpx;
		text{
			font-size: 26rpx;
			margin-right: 26rpx;
			margin-left: 28rpx;
		}
		input{
			flex: 1;
			font-size: 26rpx;
		}
	}
	.index-list{
		margin: 0 30rpx;
		.index-list-item{
			display: flex;
			margin-bottom: 34rpx;
		}
		.index-list-img{
			width: 212rpx;
			height: 212rpx;
			margin-right: 22rpx;
			border-radius: 30rpx;
			overflow: hidden;
			position: relative;
			image{
				width: 100%;
				height: 100%;
			}
			text{
				position: absolute;
				left: 12rpx;
				bottom: 16rpx;
				color: white;
				font-size: 20rpx;
			}
		}
		.index-list-text{
			font-size: 24rpx;
			line-height: 66rpx;
		}
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
