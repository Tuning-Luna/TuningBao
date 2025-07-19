// 这个辅助函数用于设置购物车的徽标
import {
	useCartGoodsStore
} from '@/stores/cart-goods'

export function updateCartBadge() {
	const store = useCartGoodsStore()

	const cartLength = store.cartGoods.length

	// 更新 tabBar 徽标
	uni.setTabBarBadge({
		index: 3,
		text: String(cartLength)
	})
}