import {
	defineStore
} from 'pinia';
import {
	computed,
	ref
} from 'vue';

export const useCartGoodsStore = defineStore('cart-goods', () => {

	const cartGoods = ref([{
			id: 1,
			imgSrc: '/static/home/goodsImg/1.png',
			title: '361飞燃4|全掌碳板PB竞速跑鞋',
			price: 609,
			count: 1,
			checked: false
		},
		{
			id: 2,
			imgSrc: '/static/home/goodsImg/2.png',
			title: 'TATA他她小香风渔夫鞋女鞋春季新款复古单鞋女鞋休闲鞋子UMK01AA5',
			price: 399,
			count: 2,
			checked: false
		},
		{
			id: 3,
			imgSrc: '/static/home/goodsImg/3.png',
			title: '明基28英寸编程护眼显示器RD280U',
			price: 1899,
			count: 2,
			checked: false
		},
		{
			id: 4,
			imgSrc: '/static/home/goodsImg/4.png',
			title: '361飞燃3ET|跑步鞋减震回弹运动',
			price: 499,
			count: 0,
			checked: false
		},
		{
			id: 5,
			imgSrc: '/static/home/goodsImg/5.png',
			title: '皇冠丹麦曲奇饼干罐装儿童节礼品',
			price: 59,
			count: 3,
			checked: false
		},
		{
			id: 6,
			imgSrc: '/static/home/goodsImg/6.png',
			title: 'Fate/Apocrypha 阿斯托尔福 GK潮玩手办生日礼物动漫模型桌面摆件',
			price: 329,
			count: 0,
			checked: false
		},
		{
			id: 7,
			imgSrc: '/static/home/goodsImg/7.png',
			title: '台福荔枝风味水果饮料日期新鲜',
			price: 6,
			count: 2,
			checked: false
		},
		{
			id: 8,
			imgSrc: '/static/home/goodsImg/8.png',
			title: 'gokiga宽松休闲长裤简约',
			price: 149,
			count: 5,
			checked: false
		},
		{
			id: 9,
			imgSrc: '/static/home/goodsImg/9.png',
			title: 'Nuooo 纯欲风辣妹修身无袖上衣女',
			price: 119,
			count: 1,
			checked: false
		},
		{
			id: 10,
			imgSrc: '/static/home/goodsImg/10.png',
			title: '赤兔8pro中考新款7pro跑步鞋碳板',
			price: 689,
			count: 0,
			checked: false
		}
	])


	// 改变某个产品数量
	function changeCount(id, number) {
		const item = cartGoods.value.find(g => g.id === id)
		if (item) {
			item.count = number
		}
	}

	// 是否选中该商品
	function togCheck(id) {
		const item = cartGoods.value.find(i => i.id === id)
		if (item) {
			item.checked = !item.checked
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
		checkedMoney,
		checkedCnt
	}

})