<template>
	<view class="container">

		<!-- 顶部搜索框 -->
		<view class="top-search">
			<TopSearch></TopSearch>
		</view>


		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="i in 5" :key="i">
				<image :src="`/static/home/swiperImg/${i}.png`"></image>
			</swiper-item>
		</swiper>


	</view>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
	import TopSearch from './components/top-search.vue';
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;

		.top-search {
			position: sticky;
			top: 0;
			z-index: 10;
		}

		.swiper {
			width: 100%;
			height: 200px;
			background-color: $tuning-main-color;

			swiper-item {
				width: 100%;
				height: 200px;

				image {
					width: 100%;
					height: 200px;
					display: block;

					border-radius: 10px;
				}
			}
		}
	}
</style>