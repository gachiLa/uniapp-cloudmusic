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
</style>
