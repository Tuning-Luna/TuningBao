// 配置并初始化网络请求函数
import {
	$http
} from '@escook/request-miniprogram'

const baseURL = 'http://localhost'
const port = 3000

$http.baseUrl = `http://localhost:${port}`

$http.beforeRequest = function(options) {
	uni.showLoading({
		title: '加载中'
	})
}

$http.afterRequest = function() {
	uni.hideLoading()
}