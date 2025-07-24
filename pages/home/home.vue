<template>
	<view class="container">

		<!-- 顶部搜索框 -->
		<view class="top-search">
			<top-search></top-search>
		</view>

		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="i in 5" :key="i">
				<image :src="`/static/home/swiperImg/${i}.png`" @click="handleSwpClick(i)"></image>
			</swiper-item>
		</swiper>


		<!-- 分类展示区域 -->
		<view class="cate">
			<view class="cate-item" @click="handleCateClick">
				<image class="img" src="/static/home/cateImg/sport.png"></image>
				<view class="label">运动户外</view>
			</view>

			<view class="cate-item" @click="handleCateClick">
				<image class="img" src="/static/home/cateImg/food.png"></image>
				<view class="label">食品生鲜</view>
			</view>

			<view class="cate-item" @click="handleCateClick">
				<image class="img" src="/static/home/cateImg/day.png"></image>
				<view class="label">日用百货</view>
			</view>

			<view class="cate-item" @click="handleCateClick">
				<image class="img" src="/static/home/cateImg/dress.png"></image>
				<view class="label">服装时尚</view>
			</view>

		</view>

		<!-- 商品展示区域 -->
		<view class="waterfall">
			<good-card v-for="good in goodsStore.goods" :key="good.id" :imgSrc="good.imgSrc" :title="good.title"
				:price="good.price" :sales="good.sales" :id="good.id"></good-card>
		</view>


	</view>
</template>

<script setup lang="js">
	import {
		onMounted
	} from 'vue'
	import topSearch from '@/components/top-search/top-search.vue'
	import goodCard from '@/components/good-card/good-card.vue'
	import {
		useGoodsStore
	} from '../../stores/goods.js'
	import {
		onShow
	} from '@dcloudio/uni-app'
	import {
		updateCartBadge
	} from '@/utils/setCartBadge'

	import {
		useCartGoodsStore
	} from '../../stores/cart-goods.js'

	import {
		storeToRefs
	} from 'pinia'

	const cartGoodsStore = useCartGoodsStore()

	const {
		cartGoods
	} = storeToRefs(cartGoodsStore)


	const goodsStore = useGoodsStore()

	function handleSwpClick(i) {
		uni.navigateTo({
			url: `/subPkg/detail/detail?id=${i}`
		})
	}

	function handleCateClick() {
		uni.switchTab({
			url: '/pages/category/category'
		})
	}

	onShow(() => {
		updateCartBadge()
	})
</script>

<style lang="scss" scoped>
	.container {

		.top-search {
			position: sticky;
			top: 0;
			z-index: 10;
		}

		.swiper {
			width: 100%;
			height: 200px;
			background-color: $tuning-main-color;

			swiper-item {
				width: 100%;
				height: 200px;

				image {
					width: 100%;
					height: 200px;
					display: block;

					border-radius: 10px;
				}
			}
		}

		.cate {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 10px 0;

			.cate-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 25%;

				.img {
					width: 50px;
					height: 50px;
					margin-bottom: 6px;
				}

				.label {
					font-size: 14px;
					color: #333;
				}
			}
		}

		.waterfall {
			width: 100%;
			margin-top: 20px;
			display: flex;
			flex-wrap: wrap;
			gap: 12px;
			justify-content: center;
		}
	}
</style>