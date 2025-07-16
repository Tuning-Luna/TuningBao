import {
	defineStore
} from 'pinia'
import {
	ref
} from 'vue'

export const useMessageStore = defineStore('message', () => {
	const messages = ref([{
			id: 1,
			name: 'xxx旗舰店',
			message: '您好！有什么可以帮助您的？',
			time: '10:00',
			avatar: 'https://example.com/avatar1.jpg'
		},
		{
			id: 2,
			name: '评论回复',
			message: '感谢您的反馈！',
			time: '11:00',
			avatar: 'https://example.com/avatar2.jpg'
		},
		{
			id: 3,
			name: '另一个用户',
			message: '明天见面吧。',
			time: '12:00',
			avatar: 'https://example.com/avatar3.jpg'
		},
		{
			id: 4,
			name: '商城客服',
			message: '您的订单已发货。',
			time: '13:00',
			avatar: 'https://example.com/avatar4.jpg'
		},
		{
			id: 5,
			name: '系统通知',
			message: '您有一条新的系统消息。',
			time: '13:30',
			avatar: 'https://example.com/avatar5.jpg'
		},
		{
			id: 6,
			name: '订单提醒',
			message: '订单已签收，请确认。',
			time: '14:00',
			avatar: 'https://example.com/avatar6.jpg'
		},
		{
			id: 7,
			name: '售后服务',
			message: '您的退货申请已通过。',
			time: '14:20',
			avatar: 'https://example.com/avatar7.jpg'
		},
		{
			id: 8,
			name: '优惠促销',
			message: '限时折扣，快来抢购！',
			time: '15:00',
			avatar: 'https://example.com/avatar8.jpg'
		},
		{
			id: 9,
			name: '物流助手',
			message: '快递已到达您所在城市。',
			time: '15:30',
			avatar: 'https://example.com/avatar9.jpg'
		},
		{
			id: 10,
			name: '支付提醒',
			message: '请尽快完成付款。',
			time: '16:00',
			avatar: 'https://example.com/avatar10.jpg'
		},
		{
			id: 11,
			name: '系统通知',
			message: '账号安全提醒，请修改密码。',
			time: '16:10',
			avatar: 'https://example.com/avatar11.jpg'
		},
		{
			id: 12,
			name: '会员中心',
			message: '您已成功升级为VIP会员。',
			time: '16:20',
			avatar: 'https://example.com/avatar12.jpg'
		},
		{
			id: 13,
			name: '朋友消息',
			message: '今晚有空一起吃饭吗？',
			time: '16:30',
			avatar: 'https://example.com/avatar13.jpg'
		},
		{
			id: 14,
			name: '客服小美',
			message: '请问您还有其他问题吗？',
			time: '16:40',
			avatar: 'https://example.com/avatar14.jpg'
		},
		{
			id: 15,
			name: '评论提醒',
			message: '您的评论获得了5个点赞。',
			time: '16:50',
			avatar: 'https://example.com/avatar15.jpg'
		},
		{
			id: 16,
			name: '活动通知',
			message: '您参与的活动即将开始。',
			time: '17:00',
			avatar: 'https://example.com/avatar16.jpg'
		},
		{
			id: 17,
			name: '系统推送',
			message: '欢迎使用我们的服务！',
			time: '17:10',
			avatar: 'https://example.com/avatar17.jpg'
		},
		{
			id: 18,
			name: '提醒服务',
			message: '别忘了明天的日程安排。',
			time: '17:20',
			avatar: 'https://example.com/avatar18.jpg'
		},
		{
			id: 19,
			name: '智能助手',
			message: '今天气温较低，注意保暖。',
			time: '17:30',
			avatar: 'https://example.com/avatar19.jpg'
		},
		{
			id: 20,
			name: '系统广播',
			message: '本周系统将维护，请知晓。',
			time: '17:40',
			avatar: 'https://example.com/avatar20.jpg'
		},
	])

	return {
		messages
	}
})