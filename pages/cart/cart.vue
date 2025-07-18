<template>
	<view class="container">

		<!-- 展示购物车商品 -->
		<view class="cart-item" v-if="cartGoods.length > 0">
			<template v-for="good in cartGoods" :key="good.id">
				<!-- 只展示选中数量>0的 -->
				<cart-item :id="good.id" :imgSrc="good.imgSrc" :title="good.title" :price="good.price" :count="good.count"
					:checked="good.checked">
				</cart-item>
			</template>
		</view>

		<view class="empty" v-else>
			<text class="t1">购物车竟然是空的</text>
			<text class="t2">再忙，也要记得买点什么犒劳自己~</text>
			<text class="t3" @click="handleGoHome">去首页</text>
		</view>

		<!-- 展示底部结算框 -->
		<view class="checkout-bar">
			<checkout-bar></checkout-bar>
		</view>

	</view>
</template>

<script setup lang="ts">
	import cartItem from '@/components/cart-item/cart-item.vue'
	import checkoutBar from '@/components/checkout-bar/checkout-bar.vue'

	import { useCartGoodsStore } from '../../stores/cart-goods.js'
	import { storeToRefs } from 'pinia'

	const cartGoodsStore = useCartGoodsStore()

	const { cartGoods } = storeToRefs(cartGoodsStore)

	function handleGoHome() {
		uni.switchTab({
			url: '/pages/home/home'
		})
	}
</script>

<style lang="scss" scoped>
	.container {

		.cart-item {
			padding-bottom: 65px;
		}

		.empty {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.t1 {
				font-size: 22px;
				padding-top: 200px;
				padding-bottom: 20px;
			}

			.t2 {
				padding-bottom: 20px;
			}

			.t3 {
				font-size: 30px;
				font-weight: 700;
				color: $tuning-main-color;
			}
		}

		.checkout-bar {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			z-index: 10;
			background-color: #fff;
		}
	}
</style>