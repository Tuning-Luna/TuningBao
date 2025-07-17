<template>
	<view class="container">

		<!-- 展示购物车商品 -->
		<view class="cart-item">
			<template v-for="good in cartGoods" :key="good.id">
				<!-- 只展示选中数量>0的 -->
				<cart-item :id="good.id" :imgSrc="good.imgSrc" :title="good.title" :price="good.price" :count="good.count"
					:checked="good.checked">
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

		.cart-item {
			padding-bottom: 65px;
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