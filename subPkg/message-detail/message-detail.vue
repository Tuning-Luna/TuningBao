<template>
	<view class="chat-container">
		<!-- 消息列表 -->
		<scroll-view class="chat-list" scroll-y :scroll-into-view="scrollTo" scroll-with-animation>
			<view v-for="(msg, index) in messages" :key="index" :id="'msg' + index" class="message-item"
				:class="{ me: msg.from === 'me' }">
				<image class="avatar" src="/static/message/avatar.png" />
				<view class="bubble" :class="{ me: msg.from === 'me' }">
					{{ msg.content }}
				</view>
			</view>
		</scroll-view>

		<!-- 底部输入栏 -->
		<view class="input-bar">
			<image src="/static/message-detail/yuyin.png" class="icon"></image>
			<input class="input" v-model="inputText" confirm-type="send" @confirm="sendMessage" placeholder="请输入内容..." />
			<image src="/static/message-detail/smail.png" class="icon"></image>
			<image src="/static/message-detail/plus.png" class="icon"></image>
		</view>

	</view>
</template>

<script setup>
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		ref,
		nextTick
	} from 'vue'
	import {
		useMessageStore
	} from '../../stores/message'

	const messageStore = useMessageStore()

	const messages = ref([{
			from: 'customer',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illum explicabo voluptate veniam cum, quisquam doloremque architecto sunt fugiat, quibusdam mollitia perferendis. Maxime minima ipsum dolor voluptate impedit in nisi'
		},
		{
			from: 'me',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illum explicabo voluptate veniam cum, quisquam doloremque architecto sunt fugiat, quibusdam mollitia perferendis. Maxime minima ipsum dolor voluptate impedit in nisi'
		},
		{
			from: 'customer',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illum explicabo voluptate veniam cum, quisquam doloremque architecto sunt fugiat, quibusdam mollitia perferendis. Maxime minima ipsum dolor voluptate impedit in nisi'
		},
		{
			from: 'me',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illum explicabo voluptate veniam cum, quisquam doloremque architecto sunt fugiat, quibusdam mollitia perferendis. Maxime minima ipsum dolor voluptate impedit in nisi'
		},
		{
			from: 'customer',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illum explicabo voluptate veniam cum, quisquam doloremque architecto sunt fugiat, quibusdam mollitia perferendis. Maxime minima ipsum dolor voluptate impedit in nisi'
		},
		{
			from: 'me',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illum explicabo voluptate veniam cum, quisquam doloremque architecto sunt fugiat, quibusdam mollitia perferendis. Maxime minima ipsum dolor voluptate impedit in nisi'
		},
	])

	const inputText = ref('')

	const curMessage = ref()

	// 自动滚动到最新的一条的位置
	const scrollTo = ref('msg' + (messages.value.length - 1))

	function sendMessage() {
		if (!inputText.value.trim()) return

		messages.value.push({
			from: 'me',
			content: inputText.value.trim()
		})
		inputText.value = ''

		// 发送新的消息后滑动到底部
		nextTick(() => {
			scrollTo.value = 'msg' + (messages.value.length - 1)
		})
	}

	onLoad((opts) => {
		if (opts.id) {
			const item = messageStore.messages.find(i => String(i.id) === String(opts.id))

			if (item) {
				curMessage.value = item
				uni.setNavigationBarTitle({
					title: item.name
				})
			}
		}
	})
</script>

<style lang="scss" scoped>
	.chat-container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #f5f5f5;

		.chat-list {
			flex: 1;
			overflow: scroll;

			.message-item {
				display: flex;
				align-items: flex-start;
				margin-bottom: 20rpx;
				padding: 0 20rpx;

				.avatar {
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
				}

				.bubble {
					max-width: 60%;
					padding: 16rpx 20rpx;
					margin-left: 20rpx;
					background-color: #eeeeee;
					border-radius: 16rpx;
					font-size: 28rpx;
					line-height: 1.4;
				}

				&.me {
					flex-direction: row-reverse;

					.bubble {
						margin-left: 0;
						margin-right: 20rpx;
						background-color: $tuning-main-color;
						color: #ffffff;
					}
				}
			}

		}


		.input-bar {
			display: flex;
			align-items: center;
			padding: 16rpx 20rpx;
			background-color: #ffffff;
			border-top: 1px solid #e5e5e5;

			.icon {
				font-size: 36rpx;
				padding: 0 16rpx;

				width: 30px;
				height: 30px;
			}

			.input {
				flex: 1;
				height: 68rpx;
				line-height: 68rpx;
				padding: 0 20rpx;
				background-color: #f0f0f0;
				border-radius: 34rpx;
				font-size: 28rpx;
			}
		}


	}
</style>