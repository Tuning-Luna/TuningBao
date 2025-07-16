<template>
	<view class="container">
		<!-- 顶部搜索框 -->
		<view class="top-search">
			<top-search></top-search>
		</view>


		<!-- 分类区域 -->
		<view class="cate">
			<!-- 左边一级分类 -->
			<scroll-view scroll-y class="lv1">
				<view class="lv1-item" v-for="(item,index) in categoryStore.categories" :class="{'active':activeIndex=== index}"
					:key="item.id" @click="handleChange(index)">{{ item.name }}</view>
			</scroll-view>

			<!-- 右边二三级分类 -->
			<scroll-view scroll-y class="lv23" :scroll-top="scrollTop">

				<view class="lv2-item" v-for="i in categoryStore.categories[activeIndex].children" :key="i.id">

					<text class="lv2-title">/{{i.name}}/</text>

					<!-- 三级展示区域 -->
					<view class="lv3">
						<text class="lv3-title" v-for="j in i.children" :key="j.id">{{j.name}}</text>
					</view>

				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { useCategoryStore } from '../../stores/category.js'

	const categoryStore = useCategoryStore()
	const activeIndex = ref(0)
	const scrollTop = ref(0)

	function handleChange(index : number) {
		activeIndex.value = index
		// 切换一级分类置顶，随机给一个0-1像素实现回滚到顶
		scrollTop.value = Math.random()
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;


		.top-search {
			position: sticky;
			top: 0;
			z-index: 10;
		}


		.cate {
			display: flex;
			flex: 1;
			height: 0;



			.lv1 {
				width: 100px;

				.lv1-item {
					background-color: #c4c4c4;
					height: 50px;
					text-align: center;
					line-height: 50px;
					font-size: 14px;

					&.active {
						background-color: #f5f5f5;
						font-weight: 700;
						color: $tuning-main-color;
						position: relative;

						&::before {
							position: absolute;
							left: 0;
							top: 50%;
							transform: translateY(-50%);
							content: '';
							display: block;
							height: 25px;
							width: 5px;
							background-color: $tuning-main-color;

						}
					}
				}

			}

			.lv23 {
				flex: 1;
				margin-left: 10px;

				.lv2-item {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;

					margin-top: 20px;


					.lv2-title {
						font-weight: 700;
						color: $tuning-main-color;
						text-align: center;
					}

					.lv3 {
						display: flex;
						flex-wrap: wrap;
						gap: 10px;

						.lv3-title {
							width: 30%;
							height: 90px;
							line-height: 90px;
							text-align: center;

							border-radius: 16rpx;
							box-shadow: 0 8rpx 16rpx rgba(0, 0, 0, 0.1);

							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;


						}
					}

				}

			}
		}

	}
</style>