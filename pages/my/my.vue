<template>
	<view class="container" @click="handleClick">

		<!-- 顶部展示头像和姓名区域 -->
		<view class="top-avatar">
			<image class="avatar" src="/static/message/avatar.png"></image>
			<text class="name">Tuning Luna</text>
		</view>

		<!-- 收藏，关注，足迹等 -->
		<view class="collect common-box">
			<view class="item">
				<text class="cnt">3</text>
				<text class="name">收藏的店铺</text>
			</view>
			<view class="item">
				<text class="cnt">21</text>
				<text class="name">收藏的商品</text>
			</view>
			<view class="item">
				<text class="cnt">7</text>
				<text class="name">关注的商品</text>
			</view>
			<view class="item">
				<text class="cnt">243</text>
				<text class="name">我的足迹</text>
			</view>
		</view>

		<!-- 订单部分 -->
		<view class="my-odrer common-box">
			<text class="title">我的订单</text>

			<view class="order">

				<view class="item" v-for="item in orderDate" :key="item.title">
					<image class="img" :src="item.img"></image>
					<text>{{item.title}}</text>
				</view>

			</view>

		</view>

		<!-- 底部一些功能条 -->
		<view class="func-bar common-box">

			<view class="item">
				<text>收货地址</text>
				<view class="arrow">
				</view>
			</view>

			<view class="item">
				<text>联系客服</text>
				<view class="arrow">
				</view>
			</view>

			<view class="item">
				<text>学生优惠</text>
				<view class="arrow">
				</view>
			</view>

			<view class="item">
				<text>我的评价</text>
				<view class="arrow">
				</view>
			</view>


			<view class="item">
				<text>闲置换钱</text>
				<view class="arrow">
				</view>
			</view>

			<view class="item">
				<text>退出登录</text>
				<view class="arrow">
				</view>
			</view>
		</view>

	</view>


</template>


<script setup lang="ts">
	import { useMyStore } from '../../stores/my.js'
	import { storeToRefs } from 'pinia'

	const { orderDate } = storeToRefs(useMyStore())

	function handleClick() {
		uni.showToast({
			title: '此页面目前没有任何交互，请先去体验其他页面吧~',
			icon: 'none'
		})
	}
</script>

<style lang="scss" scoped>
	.container {
		.top-avatar {
			width: 100%;
			height: 270px;
			background-color: $tuning-main-color;


			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.avatar {
				width: 120px;
				height: 120px;
				border-radius: 50%;
				border: 5px solid #ffffff;
			}


			.name {
				color: #ffffff;
				font-weight: 700;
				font-size: 16px;
			}
		}

		.collect {
			margin-left: 10px;
			margin-right: 10px;
			margin-top: -10px;
			padding: 10px 0;

			display: flex;
			align-items: center;

			.item {
				box-sizing: border-box;
				width: 25%;


				display: flex;
				flex-direction: column;
				align-items: center;

				border-right: 1px solid #000;

				&:last-child {
					border-right: none;
				}

			}
		}

		.my-odrer {
			display: flex;
			flex-direction: column;

			.title {
				font-size: 18px;
				padding: 10px 5px;

				border-bottom: 1px solid #ededed;
			}

			.order {
				padding: 10px 5px;
				display: flex;
				justify-content: space-between;


				.item {
					width: 25%;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					align-items: center;


					.img {
						width: 50px;
						height: 50px;
					}

					text {
						font-size: 14px;
					}
				}
			}
		}

		.func-bar {
			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;

				padding: 10px 5px;
				padding-right: 10px;

				border-bottom: 1px solid #ededed;

				&:last-child {
					border-bottom: none;
				}

				.arrow {
					width: 10px;
					height: 10px;
					border-top: 1px solid #000;
					border-right: 1px solid #000;


					transform: rotate(45deg)
				}
			}
		}
	}


	// 公用盒子样式
	.common-box {
		margin: 10px;
		border-radius: 15px;
		background-color: #fff;
	}
</style>