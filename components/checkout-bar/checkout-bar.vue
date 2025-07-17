<template>
	<view class="container">
		<!-- 左侧全选 -->
		<view class="select-all">
			<view class="checkbox" :class="{ checked: isAllChecked }" @click="toggleCheck"></view>
			<text class="label">全选</text>
		</view>

		<!-- 中间合计价格 -->
		<view class="total-price">
			合计：<text class="money">￥{{checkedMoney}}.00</text>
		</view>

		<!-- 结算按钮 -->
		<view class="checkout-btn">
			结算（{{checkedCnt}}）
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useCartGoodsStore } from '../../stores/cart-goods.js'
	import { storeToRefs } from 'pinia'

	const cartGoodsStore = useCartGoodsStore()

	const { isAllChecked, checkedMoney, checkedCnt } = storeToRefs(cartGoodsStore)


	function toggleCheck() {
		isAllChecked.value = !isAllChecked.value
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		height: 60px;
		background-color: #fff;

		display: flex;
		justify-content: space-between;
		align-items: center;

		.select-all {
			display: flex;
			align-items: center;
			margin-left: 10px;


			.checkbox {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				border: 2rpx solid $tuning-main-color;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 20rpx;
				box-sizing: border-box;

				&.checked {
					background-color: $tuning-main-color;
					position: relative;

					&::after {
						content: '';
						width: 14rpx;
						height: 24rpx;
						border: 4rpx solid #fff;
						border-top: 0;
						border-left: 0;
						transform: rotate(45deg);
						position: relative;
						top: -3px;
					}
				}
			}

		}

		.total-price {
			.money {
				color: $tuning-main-color;
			}
		}

		.checkout-btn {
			background-color: $tuning-main-color;
			color: #ffffff;
			height: 100%;
			text-align: center;
			line-height: 60px;
			padding-left: 10px;
		}
	}
</style>