<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 页面公共的css */
	.container{
		width: 100%;
		height: calc(100vh - 95px);
		overflow: hidden;
		scroll-view{
				height: calc(100vh - 95px);
			}
	}
	.fixbg{
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;top: 0;
		background-image: url();
		background-size: cover;
		background-position: center 0;
		// 模糊效果
		filter: blur(10px);
		transform: scale(1.2);
	}
</style>
