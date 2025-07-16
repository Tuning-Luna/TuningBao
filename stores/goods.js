import {
	defineStore
} from 'pinia';
import {
	ref
} from 'vue';


export const useGoodsStore = defineStore('goods', () => {
	const goods = ref([{
			id: 1,
			imgSrc: '/static/home/goodsImg/1.png',
			title: '361飞燃4|全掌碳板PB竞速跑鞋',
			price: 609,
			sales: 1000,
		},
		{
			id: 2,
			imgSrc: '/static/home/goodsImg/2.png',
			title: 'TATA他她小香风渔夫鞋女鞋春季新款复古单鞋女鞋休闲鞋子UMK01AA5',
			price: 399,
			sales: 2850,
		},
		{
			id: 3,
			imgSrc: '/static/home/goodsImg/3.png',
			title: '明基28英寸编程护眼显示器RD280U',
			price: 1899,
			sales: 450,
		},
		{
			id: 4,
			imgSrc: '/static/home/goodsImg/4.png',
			title: '361飞燃3ET|跑步鞋减震回弹运动',
			price: 499,
			sales: 1500,
		},
		{
			id: 5,
			imgSrc: '/static/home/goodsImg/5.png',
			title: '皇冠丹麦曲奇饼干罐装儿童节礼品',
			price: 59,
			sales: 7200,
		},
		{
			id: 6,
			imgSrc: '/static/home/goodsImg/6.png',
			title: 'Fate/Apocrypha 阿斯托尔福 GK潮玩手办生日礼物动漫模型桌面摆件',
			price: 329,
			sales: 980,
		},
		{
			id: 7,
			imgSrc: '/static/home/goodsImg/7.png',
			title: '台福荔枝风味水果饮料日期新鲜',
			price: 6,
			sales: 11200,
		},
		{
			id: 8,
			imgSrc: '/static/home/goodsImg/8.png',
			title: 'gokiga宽松休闲长裤简约',
			price: 149,
			sales: 3200,
		},
		{
			id: 9,
			imgSrc: '/static/home/goodsImg/9.png',
			title: 'Nuooo 纯欲风辣妹修身无袖上衣女',
			price: 119,
			sales: 5600,
		},
		{
			id: 10,
			imgSrc: '/static/home/goodsImg/10.png',
			title: '赤兔8pro中考新款7pro跑步鞋碳板',
			price: 689,
			sales: 890,
		}
	])

	return {
		goods
	}
});