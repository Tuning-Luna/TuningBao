import {
	defineStore
} from 'pinia'
import {
	ref,
	computed
} from 'vue'

export const useSearchStore = defineStore('search', () => {
	const keyword = ref('')

	const searchResult = ref([])

	// 展示历史搜索还是展示搜索结果
	const isHistoryShow = computed(() => keyword.value.trim() === '')

	const history = ref([])


	return {
		keyword,
		searchResult,
		isHistoryShow,
		history,
	}
})