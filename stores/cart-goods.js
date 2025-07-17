import {
	defineStore
} from 'pinia'
import {
	computed,
	ref
} from 'vue'

export const useCartGoodsStore = defineStore('cart-goods', () => {

	const cartGoods = ref([{
			id: 1,
			imgSrc: '/static/home/goodsImg/1.png',
			title: '361飞燃4|全掌碳板PB竞速跑鞋',
			price: 609,
			count: 1,
			checked: true
		},
		{
			id: 2,
			imgSrc: '/static/home/goodsImg/2.png',
			title: 'TATA他她小香风渔夫鞋女鞋春季新款复古单鞋女鞋休闲鞋子UMK01AA5',
			price: 399,
			count: 2,
			checked: true
		}
	])

	// 改变某个产品数量
	function changeCount(id, number) {
		const item = cartGoods.value.find(g => g.id === id)
		if (item) {
			item.count = number

			// 如果把某一个购物车的商品数减到了0，那么就删除这个商品
			if (number === 0) {
				cartGoods.value = cartGoods.value.filter(i => i.id !== id)
			}

			const pathData = getCurrentPages()
			if (pathData[0].$page.fullPath === '/pages/cart/cart') {
				// 修改完后同步更新badge
				uni.setTabBarBadge({
					index: 3,
					text: String(cartGoods.value.length)
				})
			}
		}

	}

	// 是否选中该商品
	function togCheck(id) {
		const item = cartGoods.value.find(i => i.id === id)
		if (item) {
			item.checked = !item.checked
		}
	}

	// 添加商品到购物车
	function addGoodToCart(item) {
		const temp = cartGoods.value.find(i => i.id === item.id)

		//如果之前没有就插入，如果有，那就把count++即可
		if (temp) {
			temp.count++;
		} else {
			cartGoods.value.push({
				id: item.id,
				imgSrc: item.imgSrc,
				title: item.title,
				count: 1,
				price: item.price,
				checked: true,
			})
		}
	}

	// 以下是：计算属性
	// 是否全选
	const isAllChecked = computed({
		get: () => {
			return cartGoods.value
				.filter(item => item.count > 0) // 只判断加入购物车的商品
				.every(item => item.checked)
		},
		set: (val) => {
			cartGoods.value.forEach(item => {
				if (item.count > 0) {
					item.checked = val
				}
			})
		}
	})

	// 选中的总价格
	const checkedMoney = computed(() => {
		return cartGoods.value.filter(item => item.count > 0)
			.filter(item => item.checked)
			.reduce((total, cur) => {
				return total + cur.count * cur.price
			}, 0)
	})

	// 选中商品的总数量
	const checkedCnt = computed(() =>
		cartGoods.value
		.filter(i => i.count > 0)
		.reduce((total, cur) => total + (cur.checked ? 1 : 0), 0)
	)


	return {
		cartGoods,
		isAllChecked,
		changeCount,
		togCheck,
		addGoodToCart,
		checkedMoney,
		checkedCnt,
	}

})