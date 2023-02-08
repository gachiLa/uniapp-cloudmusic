<template>
	<view class="music-head">
		<view class="music-head-icon-content">
			<svg class="icon music-head-ico" >
			  <use xlink:href="#icon-fanhui"></use>
			</svg>
			<text>|</text>	
			<svg class="icon music-head-ico" >
			  <use xlink:href="#icon-shouye"></use>
			</svg>
		</view>
		<view class="">
			{{title}}
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"navigationbar",
		data() {
			return {
				
			};
		},
		props:['title']
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