<template>
	<view class="good" @click="handleClick">

		<image class="img" :src="imgSrc" mode="widthFix"></image>

		<view class="info">
			<text class="title">{{title}}</text>

			<view class="bottom-info">
				<text class="price">￥{{price}}</text>
				<text class="ppl-buy">{{sales}}+人购买</text>
			</view>

		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		id : number,
		imgSrc : string,
		title : string,
		price : number,
		sales : number
	}>()

	function handleClick() {
		uni.navigateTo({
			url: `/subPkg/detail/detail?id=${props.id}`
		})
	}
</script>

<style lang="scss" scoped>
	.good {
		border-radius: 15px;
		overflow: hidden;

		width: 340rpx;
		background-color: #fff;

		display: flex;
		flex-direction: column;

		.img {
			width: 100%;
			border-radius: 15px;
			overflow: hidden;
		}


		.info {
			padding: 10px 5px;

			.title {}

			.bottom-info {
				margin-top: 15px;
				display: flex;
				align-items: center;

				.price {
					font-weight: 700;
					color: $tuning-main-color;
					font-size: 20px;
				}

				.ppl-buy {
					margin-left: 5px;
					color: gray;
					font-size: 13px;
				}

			}
		}
	}
</style>