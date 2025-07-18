<template>
	<!-- 顶部搜索框 -->
	<view class="search-container">
		<view class="search-box">
			<uni-icons class="search-icon" type="search" size="24"></uni-icons>
			<input @input="handleInput" class="search-input" placeholder="请输入关键词" v-model="keyword" confirm-type="search" />
			<uni-icons class="close-icon" v-show="keyword.trim() !== ''" @click="keyword = ''" type="closeempty"
				size="24"></uni-icons>

		</view>
	</view>

	<!-- 搜索历史展示区域 -->
	<view class="history-container" v-if="isHistoryShow">
		<view class="history-info">
			<text>搜索历史</text>
			<uni-icons class="trash-icon" @click="history = []" type="trash" size="24"></uni-icons>
		</view>

		<view class="history-tag-container">
			<text class="tag" v-for="item in history" :key="item" @click="handleTagClick(item)">{{item}}</text>
		</view>

	</view>


	<!-- 搜索结果展示区域 -->
	<view class="search-result-container" v-else>

		<view class="item" v-for="i in searchResult" :key="i.id">

			<text class="title" @click="handleGoodClick(i.id)">
				{{i.title}}
			</text>
			<view class="arrow"></view>
		</view>

	</view>


</template>

<script setup lang="js">
	import {
		computed,
		ref
	} from 'vue'
	import {
		useGoodsStore
	} from '../../stores/goods'
	import {
		useSearchStore
	} from '../../stores/search'

	import {
		onShow
	} from '@dcloudio/uni-app'

	import {
		storeToRefs
	} from 'pinia'

	const goodsStore = useGoodsStore()

	const searchStore = useSearchStore()

	const {
		keyword,
		searchResult,
		isHistoryShow,
		history,
	} = storeToRefs(searchStore)

	let timer = null

	// 处理输入事件
	function handleInput() {
		if (timer) clearTimeout(timer)

		const keywordStr = keyword.value.trim()
		if (!keywordStr) {
			searchResult.value = []
			return
		}

		timer = setTimeout(() => {
			// 筛选标题有的都返回
			searchResult.value = goodsStore.goods.filter(i =>
				i.title.includes(keywordStr)
			)

			if (searchResult.value.length === 0) {
				uni.showToast({
					title: '请换个关键词再试试吧~',
					icon: 'none'
				})
			} else {
				updateSearchHistory(keywordStr)
			}

			timer = null
		}, 500)
	}

	// 更新搜索历史
	function updateSearchHistory(keywordStr) {
		const index = history.value.findIndex(i => i === keywordStr)
		if (index !== -1) {
			// 如果已存在，先删除旧位置的关键词
			history.value.splice(index, 1)
		}
		// 无论是否存在，都头插
		history.value.unshift(keywordStr)

	}

	// 点击某个商品跳转到对应的详情页
	function handleGoodClick(id) {
		uni.navigateTo({
			url: `/subPkg/detail/detail?id=${id}`
		})
	}

	// 处理点击了某个搜索历史
	function handleTagClick(item) {
		keyword.value = item
		handleInput()
		updateSearchHistory(item)
	}

	onShow(() => {
		keyword.value = ''
	})
</script>

<style lang="scss" scoped>
	.search-container {
		background-color: $tuning-main-color;
		padding: 0 10px;
		display: flex;
		align-items: center;

		position: sticky;
		top: 0;
		z-index: 10;

		padding: 15px 10px;

		.search-box {
			background-color: #ffffff;
			width: 100%;
			display: flex;
			align-items: center;
			border-radius: 20px;

			padding-top: 10px;
			padding-bottom: 10px;

			.search-icon {
				margin: 0 5px;
			}

			.search-input {
				width: 80%;
				font-size: 18px;
			}

		}
	}

	.history-container {

		.history-info {
			display: flex;
			justify-content: space-between;
			align-items: center;


			padding: 10px;

			border-bottom: 1px #ccc solid;
		}

		.history-tag-container {
			margin-top: 10px;
			padding-left: 10px;
			overflow: hidden;

			.tag {

				display: inline-block;
				padding: 10px;
				height: 30px;
				line-height: 30px;
				margin: 10px;
				background-color: #eee;
				text-align: center;

			}

		}


	}

	.search-result-container {
		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;

			padding: 20px 10px;
			border-bottom: 1px solid #ccc;

			.title {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;


			}

			.arrow {
				display: block;
				width: 22rpx;
				height: 22rpx;
				border-top: 2px solid #000;
				border-right: 2px solid #000;
				transform: rotate(45deg);
				margin-left: 10px;
			}

		}
	}
</style>