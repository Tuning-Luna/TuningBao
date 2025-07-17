import {
	defineStore
} from 'pinia'
import {
	ref
} from 'vue'

export const useMyStore = defineStore('my', () => {
	const orderDate = ref([{
			title: '待付款',
			img: '/static/my/dingdandaifukuan.png',
		},
		{
			title: '待收货',
			img: '/static/my/huoche.png',
		},
		{
			title: '退款/退货',
			img: '/static/my/tuikuan.png',
		},
		{
			title: '全部订单',
			img: '/static/my/dingdan.png',
		},
	])

	return {
		orderDate
	}
})