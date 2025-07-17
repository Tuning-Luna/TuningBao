<template>
	<view class="container">
		<!-- 左侧选中框区域（用于垂直居中） -->
		<view class="left">
			<view class="checkbox" :class="{ checked: checked }" @click="toggleCheck"></view>
		</view>

		<!-- 图片展示 -->
		<image :src="imgSrc" class="img" @click="handleClick"></image>

		<!-- 右侧商品信息 -->
		<view class="info">
			<view class="title">{{title}}</view>

			<view class="bottom">
				<view class="money">￥{{price}}.00</view>
				<uni-number-box :modelValue="count" @change="changeCnt" :min="1" />
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { useCartGoodsStore } from '../../stores/cart-goods.js'
	import { storeToRefs } from 'pinia'

	const cartGoodsStore = useCartGoodsStore()

	const { changeCount, togCheck } = cartGoodsStore


	const props = defineProps<{
		id : number,
		imgSrc : string,
		title : string,
		price : number,
		count : number,
		checked : boolean
	}>()

	function changeCnt(val : number) {
		changeCount(props.id, val)
	}

	function toggleCheck() {
		togCheck(props.id)
	}

	function handleClick() {
		uni.navigateTo({
			url: `/subPkg/detail/detail?id=${props.id}`
		})
	}
</script>

<style scoped lang="scss">
	.container {
		display: flex;
		padding: 20rpx;
		margin: 20rpx;
		border-radius: 16rpx;
		background-color: #ffffff;
		box-shadow: 0 4rpx 40rpx rgba(0, 0, 0, 0.05);
	}


	.left {
		display: flex;
		align-items: center;
		margin-right: 10px;

		.checkbox {
			width: 40rpx;
			height: 40rpx;
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

	.img {
		width: 120px;
		height: 120px;
		margin-right: 10px;

		border-radius: 15rpx;
		overflow: hidden;

	}

	.info {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 5px 0;

		.title {
			font-size: 16px;
			color: #333;
		}

		.bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.money {
				font-weight: bold;
				color: $tuning-main-color;
				font-size: 16px;
			}
		}
	}
</style>