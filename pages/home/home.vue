<template>
	<view class="container">

		<view class="top-search">
			<TopSearch></TopSearch>
		</view>


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
	}
</style>