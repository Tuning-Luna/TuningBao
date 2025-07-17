<template>
	<view class="container" v-if="item">

		<!-- 轮播图 -->
		<swiper class="swp" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swp-item" v-for="i in 5" :key="i">
				<image :src="item.imgSrc"></image>
			</swiper-item>
		</swiper>


		<!-- 信息展示区域 -->
		<view class="info">

			<text class="price">
				￥{{item.price}}
			</text>

			<view class="main">
				<text class="title">{{item.title}}</text>
				<view class="mark">
					<image src="/static/detail/wojiaoxing.png"></image>
					<text>收藏</text>
				</view>
			</view>
		</view>

		<!-- 图片展示区 -->
		<image class="pics" v-for="i in 10" :src="item.imgSrc"></image>

		<!-- 底部导航栏区域 -->
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>

	</view>


</template>

<script setup lang="js">
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		useCartGoodsStore
	} from '../../stores/cart-goods'
	import {
		ref
	} from 'vue';

	const goodsStore = useCartGoodsStore()

	const item = ref()

	// 导航栏左侧配置项
	const options = ref([{
			icon: 'shop',
			text: '店铺',
			infoBackgroundColor: '#007aff',
			infoColor: "#f5f5f5"
		},
		{
			icon: 'cart',
			text: '购物车',
		}
	])

	// 导航栏右侧按钮配置项

	// 导航栏配置项

	const buttonGroup = ref(
		[{
				text: '加入购物车',
				backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
				color: '#fff'
			},
			{
				text: '立即购买',
				backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
				color: '#fff'
			},
		])




	onLoad((options) => {
		if (options.id) {
			item.value = goodsStore.cartGoods.find(i => String(i.id) === String(options.id))
		}
	})

	function onClick(e) {
		console.log(e)
	}


	function buttonClick(e) {
		console.log(e)
	}
</script>


<style lang="scss" scoped>
	.container {
		background-color: #fff;

		.swp {
			width: 100%;
			height: 750rpx;


			.swp-item {
				width: 100%;
				height: 100%;

				image {
					width: 100%;
					height: 100%;
					object-fit: cover;

					border-radius: 30px;
				}
			}
		}

		.info {
			display: flex;
			flex-direction: column;
			padding: 10px;

			.price {
				font-weight: 700;
				font-size: 20px;
				color: $tuning-main-color;
				padding-bottom: 20px;
			}

			.main {
				display: flex;
				justify-content: space-between;

				.mark {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					image {
						width: 20px;
						height: 20px;
					}

					text {
						color: $tuning-main-color;
					}
				}
			}
		}

		.pics {
			width: 100%;
			height: 750rpx;
		}


		.goods-carts {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			position: fixed;
			left: 0;
			right: 0;
			/* #ifdef H5 */
			left: var(--window-left);
			right: var(--window-right);
			/* #endif */
			bottom: 0;
		}
	}
</style>