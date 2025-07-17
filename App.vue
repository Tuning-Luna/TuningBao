<script setup lang="ts">
	import { onShow } from '@dcloudio/uni-app'
	import { useMessageStore } from './stores/message';
	import { useCartGoodsStore } from './stores/cart-goods';

	const messageStore = useMessageStore()
	const cateStore = useCartGoodsStore()

	onShow(() => {
		// 显示信息和购物车的徽标，可通过调用uni.removeTabBarBadge方法进行消除
		uni.setTabBarBadge({
			index: 2,
			text: String(messageStore.messages.length)
		})
	})

	uni.setTabBarBadge({
		index: 3,
		text: String(cateStore.cartGoods.length)
	})
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
</style>