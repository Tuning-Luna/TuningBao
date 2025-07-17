<template>
	<view class="container">

		<!-- 展示购物车商品 -->
		<view class="cart-item">
			<template v-for="good in cartGoods" :key="good.id">
				<!-- 只展示选中数量>0的 -->
				<cart-item v-show="good.count >= 1" :id="good.id" :imgSrc="good.imgSrc" :title="good.title" :price="good.price"
					:count="good.count" :checked="good.checked">
				</cart-item>
			</template>

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
</script>

<style lang="scss" scoped>
	.container {
		.cart-item {}

		.checkout-bar {
			position: sticky;
			bottom: 0;
			z-index: 10;

		}
	}
</style>