<template>
	<view class="message-list">
		<view class="header">
			<text class="header-title">消息</text>
			<view class="header-icons">
				<image src="/static/message/icon/search.png" class="icon-placeholder"></image>
				<image src="/static/message/icon/avatar.png" class="icon-placeholder"></image>
				<image src="/static/message/icon/plus.png" class="icon-placeholder"></image>
			</view>
		</view>


		<!-- 聊天 -->
		<view v-for="item in messages" :key="item.id" class="message-item">
			<!-- <image :src="item.avatar" class="avatar" />  -->
			<image src="/static/message/avatar.png" class="avatar" />
			<view class="item-content">
				<text class="item-name">{{ item.name }}</text>
				<text class="item-message">{{ item.message }}</text>
			</view>
			<text class="item-time">{{ item.time }}</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	import { useMessageStore } from '../../stores/message'
	import { storeToRefs } from 'pinia'

	const messageStore = useMessageStore()

	const { messages } = storeToRefs(messageStore)
</script>

<style lang="scss" scoped>
	.message-list {
		flex: 1;
		background-color: #f5f5f5;

		.header {
			position: sticky;
			top: 0;
			z-index: 10;

			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px;
			background-color: $tuning-main-color;
			color: white;

			.header-title {
				font-size: 18px;
				font-weight: bold;
			}

			.header-icons {
				display: flex;
				gap: 10px;


				.icon-placeholder {
					width: 20px;
					height: 20px;
				}
			}


		}

		.message-item {
			display: flex;
			align-items: center;
			padding: 10px;
			background-color: white;
			margin-bottom: 5px;
			border-radius: 15px;
			box-shadow: 0 8rpx 16rpx rgba(0, 0, 0, 0.1);

			.avatar {
				width: 40px;
				height: 40px;
				border-radius: 15px;
				margin-right: 10px;
				display: block;

				position: relative;

				&::after {
					position: absolute;
					content: '';
					width: 10px;
					height: 10px;
					top: 3px;
					right: 3px;
					background-color: #ff0000;
					border-radius: 50%;
				}
			}

			.item-content {
				flex: 1;

				display: flex;
				flex-direction: column;

				.item-name {
					font-weight: bold;
					margin-bottom: 5px;
				}

				.item-message {
					color: #666;
					font-size: 14px;
				}
			}

			.item-time {
				color: #999;
				font-size: 12px;
				margin-left: 10px;
			}
		}
	}
</style>