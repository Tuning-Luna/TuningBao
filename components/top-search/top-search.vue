<template>
	<view>
		<!-- 签到红包部分和右侧外卖部分 -->
		<view class="action-bar">
			<!-- 左侧签到页面 -->
			<view class="item" @click="handleSignIn">
				<image class="img" src="/static/home/action/redpack.png"></image>
				<text class="label">签到</text>
			</view>

			<!-- 右侧外卖页面 -->
			<view class="item" @click="handleTakeOut">
				<image class="img" src="/static/home/action/shangou.png"></image>
				<text class="label">外卖</text>
			</view>

		</view>

		<!-- 搜索框 -->
		<view class="search-outer" @click="handleClick">
			<view class="search">
				<uni-icons class="search-icon" type="search" size="20"></uni-icons>
				<text class="search-text">搜索商品</text>
			</view>

		</view>

	</view>
</template>

<script setup lang="ts">
	function handleClick() {
		uni.navigateTo({
			url: '/subPkg/search/search'
		})
	}

	function handleSignIn() {
		uni.navigateTo({
			url: '/subPkg/sign-in/sign-in',
		})
	}

	function handleTakeOut() {
		uni.navigateTo({
			url: '/subPkg/take-out/take-out'
		})
	}
</script>

<style lang="scss" scoped>
	.action-bar {
		padding: 10px;

		display: flex;
		justify-content: space-between;


		background-color: $tuning-main-color;

		.item {
			width: 60px;
			height: 20px;
			background-color: #fff;

			border-radius: 10px;

			display: flex;
			align-items: center;


			.img {
				height: 20px;
				width: 20px;
				border-radius: 10px;
			}

			.label {
				padding-left: 5px;
				font-size: 12px;
			}
		}
	}

	.search-outer {
		background-color: $tuning-main-color;
		padding: 10px;
		padding-top: 0;

		.search {
			height: 40px;
			background-color: #fff;
			border-radius: 20px;

			display: flex;
			align-items: center;
			justify-content: center;


			.search-icon {
				width: 20px;
				height: 20px;
			}

			.search-text {
				padding-left: 10px;
				font-size: 14px;
				color: #888;
			}
		}

	}
</style>