import {
	defineStore
} from 'pinia'
import {
	ref
} from 'vue'

export const useCategoryStore = defineStore('category', () => {

	const categories = ref([{
			id: 1,
			name: '服装鞋帽',
			children: [{
					id: 11,
					name: '男装',
					children: [{
							id: 111,
							name: 'T恤'
						},
						{
							id: 112,
							name: '卫衣'
						},
						{
							id: 113,
							name: '外套'
						},
						{
							id: 114,
							name: '西装'
						},
						{
							id: 115,
							name: '衬衫'
						},
						{
							id: 116,
							name: '毛衣'
						},
						{
							id: 117,
							name: '裤子'
						},
						{
							id: 118,
							name: '牛仔裤'
						},
						{
							id: 119,
							name: '夹克'
						},
						{
							id: 120,
							name: '风衣'
						}
					]
				},
				{
					id: 12,
					name: '女装',
					children: [{
							id: 121,
							name: '连衣裙'
						},
						{
							id: 122,
							name: '半身裙'
						},
						{
							id: 123,
							name: '打底裤'
						},
						{
							id: 124,
							name: '针织衫'
						},
						{
							id: 125,
							name: '上衣'
						},
						{
							id: 126,
							name: '外套'
						},
						{
							id: 127,
							name: '裤子'
						},
						{
							id: 128,
							name: '牛仔裤'
						},
						{
							id: 129,
							name: '夹克'
						},
						{
							id: 130,
							name: '风衣'
						}
					]
				},
				{
					id: 13,
					name: '鞋类',
					children: [{
							id: 131,
							name: '运动鞋'
						},
						{
							id: 132,
							name: '皮鞋'
						},
						{
							id: 133,
							name: '高跟鞋'
						},
						{
							id: 134,
							name: '拖鞋'
						},
						{
							id: 135,
							name: '凉鞋'
						},
						{
							id: 136,
							name: '靴子'
						},
						{
							id: 137,
							name: '帆布鞋'
						},
						{
							id: 138,
							name: '板鞋'
						},
						{
							id: 139,
							name: '休闲鞋'
						},
						{
							id: 140,
							name: '雪地靴'
						}
					]
				},
				{
					id: 14,
					name: '内衣',
					children: [{
							id: 141,
							name: '内裤'
						},
						{
							id: 142,
							name: '文胸'
						},
						{
							id: 143,
							name: '睡衣'
						},
						{
							id: 144,
							name: '家居服'
						},
						{
							id: 145,
							name: '保暖内衣'
						},
						{
							id: 146,
							name: '背心'
						},
						{
							id: 147,
							name: '袜子'
						},
						{
							id: 148,
							name: '连裤袜'
						},
						{
							id: 149,
							name: '肚兜'
						},
						{
							id: 150,
							name: '束腰'
						}
					]
				},
				{
					id: 15,
					name: '童装',
					children: [{
							id: 151,
							name: '婴儿装'
						},
						{
							id: 152,
							name: '幼儿装'
						},
						{
							id: 153,
							name: '儿童上衣'
						},
						{
							id: 154,
							name: '儿童裤子'
						},
						{
							id: 155,
							name: '儿童连衣裙'
						},
						{
							id: 156,
							name: '儿童外套'
						},
						{
							id: 157,
							name: '儿童鞋'
						},
						{
							id: 158,
							name: '儿童帽'
						},
						{
							id: 159,
							name: '儿童内衣'
						},
						{
							id: 160,
							name: '儿童睡衣'
						}
					]
				},
				{
					id: 16,
					name: '配饰',
					children: [{
							id: 161,
							name: '帽子'
						},
						{
							id: 162,
							name: '围巾'
						},
						{
							id: 163,
							name: '手套'
						},
						{
							id: 164,
							name: '皮带'
						},
						{
							id: 165,
							name: '领带'
						},
						{
							id: 166,
							name: '领结'
						},
						{
							id: 167,
							name: '袜子'
						},
						{
							id: 168,
							name: '手帕'
						},
						{
							id: 169,
							name: '墨镜'
						},
						{
							id: 170,
							name: '包包'
						}
					]
				},
				{
					id: 17,
					name: '羽绒服',
					children: [{
							id: 171,
							name: '男士羽绒服'
						},
						{
							id: 172,
							name: '女士羽绒服'
						},
						{
							id: 173,
							name: '儿童羽绒服'
						},
						{
							id: 174,
							name: '长款羽绒服'
						},
						{
							id: 175,
							name: '短款羽绒服'
						},
						{
							id: 176,
							name: '中长款羽绒服'
						},
						{
							id: 177,
							name: '修身羽绒服'
						},
						{
							id: 178,
							name: '宽松羽绒服'
						},
						{
							id: 179,
							name: '连帽羽绒服'
						},
						{
							id: 180,
							name: '立领羽绒服'
						}
					]
				},
				{
					id: 18,
					name: '运动装',
					children: [{
							id: 181,
							name: '跑步装'
						},
						{
							id: 182,
							name: '篮球装'
						},
						{
							id: 183,
							name: '足球装'
						},
						{
							id: 184,
							name: '网球装'
						},
						{
							id: 185,
							name: '瑜伽服'
						},
						{
							id: 186,
							name: '健身服'
						},
						{
							id: 187,
							name: '骑行服'
						},
						{
							id: 188,
							name: '游泳衣'
						},
						{
							id: 189,
							name: '滑雪服'
						},
						{
							id: 190,
							name: '户外装'
						}
					]
				},
				{
					id: 19,
					name: '正装',
					children: [{
							id: 191,
							name: '男士西装'
						},
						{
							id: 192,
							name: '女士西装'
						},
						{
							id: 193,
							name: '衬衫'
						},
						{
							id: 194,
							name: '领带'
						},
						{
							id: 195,
							name: '领结'
						},
						{
							id: 196,
							name: '皮鞋'
						},
						{
							id: 197,
							name: '袜子'
						},
						{
							id: 198,
							name: '皮带'
						},
						{
							id: 199,
							name: '公文包'
						},
						{
							id: 200,
							name: '胸针'
						}
					]
				},
				{
					id: 20,
					name: '家居服',
					children: [{
							id: 201,
							name: '睡衣套装'
						},
						{
							id: 202,
							name: '睡裙'
						},
						{
							id: 203,
							name: '睡裤'
						},
						{
							id: 204,
							name: '睡袍'
						},
						{
							id: 205,
							name: '家居上衣'
						},
						{
							id: 206,
							name: '家居裤子'
						},
						{
							id: 207,
							name: '拖鞋'
						},
						{
							id: 208,
							name: '袜子'
						},
						{
							id: 209,
							name: '浴袍'
						},
						{
							id: 210,
							name: '毛巾'
						}
					]
				}
			]
		},
		{
			id: 2,
			name: '数码家电',
			children: [{
					id: 21,
					name: '手机',
					children: [{
							id: 211,
							name: '智能手机'
						},
						{
							id: 212,
							name: '老人手机'
						},
						{
							id: 213,
							name: '翻盖手机'
						},
						{
							id: 214,
							name: '5G手机'
						},
						{
							id: 215,
							name: '折叠屏手机'
						},
						{
							id: 216,
							name: '游戏手机'
						},
						{
							id: 217,
							name: '拍照手机'
						},
						{
							id: 218,
							name: '大屏手机'
						},
						{
							id: 219,
							name: '小屏手机'
						},
						{
							id: 220,
							name: '备用机'
						}
					]
				},
				{
					id: 22,
					name: '电脑',
					children: [{
							id: 221,
							name: '笔记本电脑'
						},
						{
							id: 222,
							name: '台式机'
						},
						{
							id: 223,
							name: '显示器'
						},
						{
							id: 224,
							name: '平板电脑'
						},
						{
							id: 225,
							name: '一体机'
						},
						{
							id: 226,
							name: '游戏本'
						},
						{
							id: 227,
							name: '轻薄本'
						},
						{
							id: 228,
							name: '商务本'
						},
						{
							id: 229,
							name: '工作站'
						},
						{
							id: 230,
							name: '二合一电脑'
						}
					]
				},
				{
					id: 23,
					name: '家用电器',
					children: [{
							id: 231,
							name: '洗衣机'
						},
						{
							id: 232,
							name: '冰箱'
						},
						{
							id: 233,
							name: '电视机'
						},
						{
							id: 234,
							name: '吸尘器'
						},
						{
							id: 235,
							name: '空调'
						},
						{
							id: 236,
							name: '热水器'
						},
						{
							id: 237,
							name: '微波炉'
						},
						{
							id: 238,
							name: '烤箱'
						},
						{
							id: 239,
							name: '电饭煲'
						},
						{
							id: 240,
							name: '空气净化器'
						}
					]
				},
				{
					id: 24,
					name: '厨房电器',
					children: [{
							id: 241,
							name: '电饭煲'
						},
						{
							id: 242,
							name: '电压力锅'
						},
						{
							id: 243,
							name: '电磁炉'
						},
						{
							id: 244,
							name: '电火锅'
						},
						{
							id: 245,
							name: '破壁机'
						},
						{
							id: 246,
							name: '豆浆机'
						},
						{
							id: 247,
							name: '榨汁机'
						},
						{
							id: 248,
							name: '咖啡机'
						},
						{
							id: 249,
							name: '面包机'
						},
						{
							id: 250,
							name: '面条机'
						}
					]
				},
				{
					id: 25,
					name: '个人护理',
					children: [{
							id: 251,
							name: '吹风机'
						},
						{
							id: 252,
							name: '电动牙刷'
						},
						{
							id: 253,
							name: '剃须刀'
						},
						{
							id: 254,
							name: '美容仪'
						},
						{
							id: 255,
							name: '卷发棒'
						},
						{
							id: 256,
							name: '直发器'
						},
						{
							id: 257,
							name: '脱毛仪'
						},
						{
							id: 258,
							name: '洁面仪'
						},
						{
							id: 259,
							name: '鼻毛修剪器'
						},
						{
							id: 260,
							name: '电动指甲刀'
						}
					]
				},
				{
					id: 26,
					name: '智能设备',
					children: [{
							id: 261,
							name: '智能手表'
						},
						{
							id: 262,
							name: '智能手环'
						},
						{
							id: 263,
							name: '智能音箱'
						},
						{
							id: 264,
							name: '智能门锁'
						},
						{
							id: 265,
							name: '智能摄像头'
						},
						{
							id: 266,
							name: '智能插座'
						},
						{
							id: 267,
							name: '智能灯泡'
						},
						{
							id: 268,
							name: '智能窗帘'
						},
						{
							id: 269,
							name: '智能马桶盖'
						},
						{
							id: 270,
							name: '智能扫地机器人'
						}
					]
				},
				{
					id: 27,
					name: '影音设备',
					children: [{
							id: 271,
							name: '耳机'
						},
						{
							id: 272,
							name: '音响'
						},
						{
							id: 273,
							name: '麦克风'
						},
						{
							id: 274,
							name: '投影仪'
						},
						{
							id: 275,
							name: '家庭影院'
						},
						{
							id: 276,
							name: '蓝牙音箱'
						},
						{
							id: 277,
							name: '头戴式耳机'
						},
						{
							id: 278,
							name: '入耳式耳机'
						},
						{
							id: 279,
							name: '无线耳机'
						},
						{
							id: 280,
							name: 'CD播放器'
						}
					]
				},
				{
					id: 28,
					name: '数码配件',
					children: [{
							id: 281,
							name: '手机壳'
						},
						{
							id: 282,
							name: '手机膜'
						},
						{
							id: 283,
							name: '充电器'
						},
						{
							id: 284,
							name: '移动电源'
						},
						{
							id: 285,
							name: '数据线'
						},
						{
							id: 286,
							name: '耳机'
						},
						{
							id: 287,
							name: '手机支架'
						},
						{
							id: 288,
							name: '手机镜头'
						},
						{
							id: 289,
							name: '内存卡'
						},
						{
							id: 290,
							name: '读卡器'
						}
					]
				},
				{
					id: 29,
					name: '办公设备',
					children: [{
							id: 291,
							name: '打印机'
						},
						{
							id: 292,
							name: '复印机'
						},
						{
							id: 293,
							name: '扫描仪'
						},
						{
							id: 294,
							name: '传真机'
						},
						{
							id: 295,
							name: '投影仪'
						},
						{
							id: 296,
							name: '碎纸机'
						},
						{
							id: 297,
							name: '考勤机'
						},
						{
							id: 298,
							name: '装订机'
						},
						{
							id: 299,
							name: '计算器'
						},
						{
							id: 300,
							name: '办公桌椅'
						}
					]
				},
				{
					id: 30,
					name: '摄影器材',
					children: [{
							id: 301,
							name: '相机'
						},
						{
							id: 302,
							name: '镜头'
						},
						{
							id: 303,
							name: '三脚架'
						},
						{
							id: 304,
							name: '闪光灯'
						},
						{
							id: 305,
							name: '内存卡'
						},
						{
							id: 306,
							name: '读卡器'
						},
						{
							id: 307,
							name: '相机包'
						},
						{
							id: 308,
							name: '滤镜'
						},
						{
							id: 309,
							name: '遮光罩'
						},
						{
							id: 310,
							name: '摄影灯'
						}
					]
				}
			]
		},
		{
			id: 3,
			name: '食品饮料',
			children: [{
					id: 31,
					name: '休闲零食',
					children: [{
							id: 311,
							name: '饼干糕点'
						},
						{
							id: 312,
							name: '坚果炒货'
						},
						{
							id: 313,
							name: '糖果巧克力'
						},
						{
							id: 314,
							name: '肉干肉脯'
						},
						{
							id: 315,
							name: '膨化食品'
						},
						{
							id: 316,
							name: '果脯蜜饯'
						},
						{
							id: 317,
							name: '海苔紫菜'
						},
						{
							id: 318,
							name: '豆制品'
						},
						{
							id: 319,
							name: '糕点面包'
						},
						{
							id: 320,
							name: '卤味零食'
						}
					]
				},
				{
					id: 32,
					name: '粮油调味',
					children: [{
							id: 321,
							name: '食用油'
						},
						{
							id: 322,
							name: '米面粮食'
						},
						{
							id: 323,
							name: '酱油醋'
						},
						{
							id: 324,
							name: '盐糖'
						},
						{
							id: 325,
							name: '味精鸡精'
						},
						{
							id: 326,
							name: '酱料'
						},
						{
							id: 327,
							name: '香料'
						},
						{
							id: 328,
							name: '火锅底料'
						},
						{
							id: 329,
							name: '方便面调料'
						},
						{
							id: 330,
							name: '罐头'
						}
					]
				},
				{
					id: 33,
					name: '饮料酒水',
					children: [{
							id: 331,
							name: '碳酸饮料'
						},
						{
							id: 332,
							name: '果汁饮料'
						},
						{
							id: 333,
							name: '牛奶'
						},
						{
							id: 334,
							name: '白酒'
						},
						{
							id: 335,
							name: '红酒'
						},
						{
							id: 336,
							name: '啤酒'
						},
						{
							id: 337,
							name: '茶饮料'
						},
						{
							id: 338,
							name: '咖啡饮料'
						},
						{
							id: 339,
							name: '功能饮料'
						},
						{
							id: 340,
							name: '矿泉水'
						}
					]
				},
				{
					id: 34,
					name: '冲调饮品',
					children: [{
							id: 341,
							name: '奶粉'
						},
						{
							id: 342,
							name: '咖啡'
						},
						{
							id: 343,
							name: '茶'
						},
						{
							id: 344,
							name: '麦片'
						},
						{
							id: 345,
							name: '藕粉'
						},
						{
							id: 346,
							name: '芝麻糊'
						},
						{
							id: 347,
							name: '核桃粉'
						},
						{
							id: 348,
							name: '豆奶粉'
						},
						{
							id: 349,
							name: '奶茶粉'
						},
						{
							id: 350,
							name: '果珍'
						}
					]
				},
				{
					id: 35,
					name: '主食干货',
					children: [{
							id: 351,
							name: '大米'
						},
						{
							id: 352,
							name: '面粉'
						},
						{
							id: 353,
							name: '杂粮'
						},
						{
							id: 354,
							name: '干货'
						},
						{
							id: 355,
							name: '速冻食品'
						},
						{
							id: 356,
							name: '方便面'
						},
						{
							id: 357,
							name: '挂面'
						},
						{
							id: 358,
							name: '粉丝'
						},
						{
							id: 359,
							name: '米线'
						},
						{
							id: 360,
							name: '罐头'
						}
					]
				},
				{
					id: 36,
					name: '生鲜食品',
					children: [{
							id: 361,
							name: '肉类'
						},
						{
							id: 362,
							name: '海鲜'
						},
						{
							id: 363,
							name: '蔬菜'
						},
						{
							id: 364,
							name: '水果'
						},
						{
							id: 365,
							name: '蛋类'
						},
						{
							id: 366,
							name: '奶制品'
						},
						{
							id: 367,
							name: '速冻食品'
						},
						{
							id: 368,
							name: '冷藏食品'
						},
						{
							id: 369,
							name: '新鲜烘焙'
						},
						{
							id: 370,
							name: '豆制品'
						}
					]
				},
				{
					id: 37,
					name: '保健食品',
					children: [{
							id: 371,
							name: '蛋白粉'
						},
						{
							id: 372,
							name: '维生素'
						},
						{
							id: 373,
							name: '矿物质'
						},
						{
							id: 374,
							name: '鱼油'
						},
						{
							id: 375,
							name: '益生菌'
						},
						{
							id: 376,
							name: '钙片'
						},
						{
							id: 377,
							name: '铁剂'
						},
						{
							id: 378,
							name: '蜂蜜'
						},
						{
							id: 379,
							name: '枸杞'
						},
						{
							id: 380,
							name: '阿胶'
						}
					]
				},
				{
					id: 38,
					name: '进口食品',
					children: [{
							id: 381,
							name: '进口零食'
						},
						{
							id: 382,
							name: '进口饮料'
						},
						{
							id: 383,
							name: '进口奶粉'
						},
						{
							id: 384,
							name: '进口粮油'
						},
						{
							id: 385,
							name: '进口调味品'
						},
						{
							id: 386,
							name: '进口罐头'
						},
						{
							id: 387,
							name: '进口饼干'
						},
						{
							id: 388,
							name: '进口巧克力'
						},
						{
							id: 389,
							name: '进口酒类'
						},
						{
							id: 390,
							name: '进口保健品'
						}
					]
				},
				{
					id: 39,
					name: '特色食品',
					children: [{
							id: 391,
							name: '地方特产'
						},
						{
							id: 392,
							name: '民族食品'
						},
						{
							id: 393,
							name: '有机食品'
						},
						{
							id: 394,
							name: '绿色食品'
						},
						{
							id: 395,
							name: '低糖食品'
						},
						{
							id: 396,
							name: '无麸质食品'
						},
						{
							id: 397,
							name: '素食主义食品'
						},
						{
							id: 398,
							name: '儿童食品'
						},
						{
							id: 399,
							name: '老年食品'
						},
						{
							id: 400,
							name: '减肥食品'
						}
					]
				},
				{
					id: 40,
					name: '餐饮原料',
					children: [{
							id: 401,
							name: '肉类'
						},
						{
							id: 402,
							name: '海鲜'
						},
						{
							id: 403,
							name: '蔬菜'
						},
						{
							id: 404,
							name: '水果'
						},
						{
							id: 405,
							name: '粮油'
						},
						{
							id: 406,
							name: '调味品'
						},
						{
							id: 407,
							name: '干货'
						},
						{
							id: 408,
							name: '速冻食品'
						},
						{
							id: 409,
							name: '罐头'
						},
						{
							id: 410,
							name: '饮料'
						}
					]
				}
			]
		},
		{
			id: 4,
			name: '家居百货',
			children: [{
					id: 41,
					name: '厨房用品',
					children: [{
							id: 411,
							name: '锅具'
						},
						{
							id: 412,
							name: '餐具'
						},
						{
							id: 413,
							name: '保鲜盒'
						},
						{
							id: 414,
							name: '厨房刀具'
						},
						{
							id: 415,
							name: '砧板'
						},
						{
							id: 416,
							name: '餐具收纳'
						},
						{
							id: 417,
							name: '烹饪工具'
						},
						{
							id: 418,
							name: '烘焙工具'
						},
						{
							id: 419,
							name: '厨房电器'
						},
						{
							id: 420,
							name: '厨房清洁'
						}
					]
				},
				{
					id: 42,
					name: '清洁用品',
					children: [{
							id: 421,
							name: '洗衣液'
						},
						{
							id: 422,
							name: '垃圾袋'
						},
						{
							id: 423,
							name: '拖把扫帚'
						},
						{
							id: 424,
							name: '清洁剂'
						},
						{
							id: 425,
							name: '抹布'
						},
						{
							id: 426,
							name: '刷子'
						},
						{
							id: 427,
							name: '吸尘器'
						},
						{
							id: 428,
							name: '扫地机器人'
						},
						{
							id: 429,
							name: '空气清新剂'
						},
						{
							id: 430,
							name: '除臭剂'
						}
					]
				},
				{
					id: 43,
					name: '收纳用品',
					children: [{
							id: 431,
							name: '收纳箱'
						},
						{
							id: 432,
							name: '衣架'
						},
						{
							id: 433,
							name: '收纳袋'
						},
						{
							id: 434,
							name: '抽屉分隔'
						},
						{
							id: 435,
							name: '衣柜收纳'
						},
						{
							id: 436,
							name: '鞋柜'
						},
						{
							id: 437,
							name: '书架'
						},
						{
							id: 438,
							name: '杂物架'
						},
						{
							id: 439,
							name: '挂钩'
						},
						{
							id: 440,
							name: '置物架'
						}
					]
				},
				{
					id: 44,
					name: '家居装饰',
					children: [{
							id: 441,
							name: '墙贴'
						},
						{
							id: 442,
							name: '装饰画'
						},
						{
							id: 443,
							name: '花瓶'
						},
						{
							id: 444,
							name: '仿真花'
						},
						{
							id: 445,
							name: '窗帘'
						},
						{
							id: 446,
							name: '地毯'
						},
						{
							id: 447,
							name: '桌布'
						},
						{
							id: 448,
							name: '抱枕'
						},
						{
							id: 449,
							name: '靠垫'
						},
						{
							id: 450,
							name: '装饰摆件'
						}
					]
				},
				{
					id: 45,
					name: '床上用品',
					children: [{
							id: 451,
							name: '床单'
						},
						{
							id: 452,
							name: '被套'
						},
						{
							id: 453,
							name: '枕套'
						},
						{
							id: 454,
							name: '床垫'
						},
						{
							id: 455,
							name: '枕头'
						},
						{
							id: 456,
							name: '被子'
						},
						{
							id: 457,
							name: '毛毯'
						},
						{
							id: 458,
							name: '凉席'
						},
						{
							id: 459,
							name: '蚊帐'
						},
						{
							id: 460,
							name: '床笠'
						}
					]
				},
				{
					id: 46,
					name: '卫浴用品',
					children: [{
							id: 461,
							name: '毛巾'
						},
						{
							id: 462,
							name: '浴巾'
						},
						{
							id: 463,
							name: '浴球'
						},
						{
							id: 464,
							name: '沐浴露'
						},
						{
							id: 465,
							name: '洗发水'
						},
						{
							id: 466,
							name: '护发素'
						},
						{
							id: 467,
							name: '香皂'
						},
						{
							id: 468,
							name: '肥皂盒'
						},
						{
							id: 469,
							name: '牙刷架'
						},
						{
							id: 470,
							name: '马桶刷'
						}
					]
				},
				{
					id: 47,
					name: '照明灯具',
					children: [{
							id: 471,
							name: '吊灯'
						},
						{
							id: 472,
							name: '吸顶灯'
						},
						{
							id: 473,
							name: '壁灯'
						},
						{
							id: 474,
							name: '台灯'
						},
						{
							id: 475,
							name: '落地灯'
						},
						{
							id: 476,
							name: '床头灯'
						},
						{
							id: 477,
							name: '装饰灯'
						},
						{
							id: 478,
							name: '应急灯'
						},
						{
							id: 479,
							name: '智能灯'
						},
						{
							id: 480,
							name: 'LED灯'
						}
					]
				},
				{
					id: 48,
					name: '宠物用品',
					children: [{
							id: 481,
							name: '宠物食品'
						},
						{
							id: 482,
							name: '宠物玩具'
						},
						{
							id: 483,
							name: '宠物窝'
						},
						{
							id: 484,
							name: '宠物牵引'
						},
						{
							id: 485,
							name: '宠物厕所'
						},
						{
							id: 486,
							name: '宠物浴液'
						},
						{
							id: 487,
							name: '宠物梳子'
						},
						{
							id: 488,
							name: '宠物指甲钳'
						},
						{
							id: 489,
							name: '宠物衣服'
						},
						{
							id: 490,
							name: '宠物药品'
						}
					]
				},
				{
					id: 49,
					name: '园艺用品',
					children: [{
							id: 491,
							name: '花盆'
						},
						{
							id: 492,
							name: '花土'
						},
						{
							id: 493,
							name: '花肥'
						},
						{
							id: 494,
							name: '浇水壶'
						},
						{
							id: 495,
							name: '园艺工具'
						},
						{
							id: 496,
							name: '种子'
						},
						{
							id: 497,
							name: '肥料'
						},
						{
							id: 498,
							name: '杀虫剂'
						},
						{
							id: 499,
							name: '遮阳网'
						},
						{
							id: 500,
							name: '园艺手套'
						}
					]
				},
				{
					id: 50,
					name: '安全防护',
					children: [{
							id: 501,
							name: '灭火器'
						},
						{
							id: 502,
							name: '烟雾报警器'
						},
						{
							id: 503,
							name: '防盗锁'
						},
						{
							id: 504,
							name: '防盗窗'
						},
						{
							id: 505,
							name: '监控摄像头'
						},
						{
							id: 506,
							name: '门禁系统'
						},
						{
							id: 507,
							name: '安全帽'
						},
						{
							id: 508,
							name: '防护手套'
						},
						{
							id: 509,
							name: '防护眼镜'
						},
						{
							id: 510,
							name: '急救包'
						}
					]
				}
			]
		},
		{
			id: 5,
			name: '运动户外',
			children: [{
					id: 51,
					name: '运动服饰',
					children: [{
							id: 511,
							name: '运动T恤'
						},
						{
							id: 512,
							name: '运动裤'
						},
						{
							id: 513,
							name: '运动外套'
						},
						{
							id: 514,
							name: '运动内衣'
						},
						{
							id: 515,
							name: '运动背心'
						},
						{
							id: 516,
							name: '运动袜'
						},
						{
							id: 517,
							name: '运动帽'
						},
						{
							id: 518,
							name: '运动手套'
						},
						{
							id: 519,
							name: '运动围巾'
						},
						{
							id: 520,
							name: '运动眼镜'
						}
					]
				},
				{
					id: 52,
					name: '运动装备',
					children: [{
							id: 521,
							name: '跑步鞋'
						},
						{
							id: 522,
							name: '健身器材'
						},
						{
							id: 523,
							name: '护腕护膝'
						},
						{
							id: 524,
							name: '球类'
						},
						{
							id: 525,
							name: '球拍'
						},
						{
							id: 526,
							name: '自行车'
						},
						{
							id: 527,
							name: '滑雪装备'
						},
						{
							id: 528,
							name: '游泳装备'
						},
						{
							id: 529,
							name: '登山装备'
						},
						{
							id: 530,
							name: '瑜伽装备'
						}
					]
				},
				{
					id: 53,
					name: '户外用品',
					children: [{
							id: 531,
							name: '帐篷'
						},
						{
							id: 532,
							name: '睡袋'
						},
						{
							id: 533,
							name: '登山包'
						},
						{
							id: 534,
							name: '防潮垫'
						},
						{
							id: 535,
							name: '户外炉具'
						},
						{
							id: 536,
							name: '水壶'
						},
						{
							id: 537,
							name: '手电筒'
						},
						{
							id: 538,
							name: '指南针'
						},
						{
							id: 539,
							name: '地图'
						},
						{
							id: 540,
							name: '急救包'
						}
					]
				},
				{
					id: 54,
					name: '健身器材',
					children: [{
							id: 541,
							name: '哑铃'
						},
						{
							id: 542,
							name: '杠铃'
						},
						{
							id: 543,
							name: '跑步机'
						},
						{
							id: 544,
							name: '动感单车'
						},
						{
							id: 545,
							name: '椭圆机'
						},
						{
							id: 546,
							name: '健身球'
						},
						{
							id: 547,
							name: '瑜伽垫'
						},
						{
							id: 548,
							name: '俯卧撑架'
						},
						{
							id: 549,
							name: '引体向上器'
						},
						{
							id: 550,
							name: '仰卧起坐板'
						}
					]
				},
				{
					id: 55,
					name: '球类运动',
					children: [{
							id: 551,
							name: '篮球'
						},
						{
							id: 552,
							name: '足球'
						},
						{
							id: 553,
							name: '排球'
						},
						{
							id: 554,
							name: '网球'
						},
						{
							id: 555,
							name: '羽毛球'
						},
						{
							id: 556,
							name: '乒乓球'
						},
						{
							id: 557,
							name: '高尔夫球'
						},
						{
							id: 558,
							name: '保龄球'
						},
						{
							id: 559,
							name: '台球'
						},
						{
							id: 560,
							name: '棒球'
						}
					]
				},
				{
					id: 56,
					name: '水上运动',
					children: [{
							id: 561,
							name: '游泳衣'
						},
						{
							id: 562,
							name: '游泳帽'
						},
						{
							id: 563,
							name: '泳镜'
						},
						{
							id: 564,
							name: '浮板'
						},
						{
							id: 565,
							name: '救生圈'
						},
						{
							id: 566,
							name: '潜水装备'
						},
						{
							id: 567,
							name: '冲浪板'
						},
						{
							id: 568,
							name: '皮划艇'
						},
						{
							id: 569,
							name: '帆船'
						},
						{
							id: 570,
							name: '水上摩托'
						}
					]
				},
				{
					id: 57,
					name: '冰雪运动',
					children: [{
							id: 571,
							name: '滑雪板'
						},
						{
							id: 572,
							name: '滑雪鞋'
						},
						{
							id: 573,
							name: '滑雪杖'
						},
						{
							id: 574,
							name: '滑雪服'
						},
						{
							id: 575,
							name: '滑雪帽'
						},
						{
							id: 576,
							name: '滑雪镜'
						},
						{
							id: 577,
							name: '滑雪手套'
						},
						{
							id: 578,
							name: '雪橇'
						},
						{
							id: 579,
							name: '滑冰鞋'
						},
						{
							id: 580,
							name: '冰球装备'
						}
					]
				},
				{
					id: 58,
					name: '极限运动',
					children: [{
							id: 581,
							name: '滑板'
						},
						{
							id: 582,
							name: '轮滑鞋'
						},
						{
							id: 583,
							name: '攀岩装备'
						},
						{
							id: 584,
							name: '蹦极装备'
						},
						{
							id: 585,
							name: '跳伞装备'
						},
						{
							id: 586,
							name: '滑翔伞'
						},
						{
							id: 587,
							name: '翼装飞行装备'
						},
						{
							id: 588,
							name: '潜水装备'
						},
						{
							id: 589,
							name: '冲浪板'
						},
						{
							id: 590,
							name: '赛车装备'
						}
					]
				},
				{
					id: 59,
					name: '骑行装备',
					children: [{
							id: 591,
							name: '自行车'
						},
						{
							id: 592,
							name: '电动车'
						},
						{
							id: 593,
							name: '头盔'
						},
						{
							id: 594,
							name: '手套'
						},
						{
							id: 595,
							name: '骑行服'
						},
						{
							id: 596,
							name: '护具'
						},
						{
							id: 597,
							name: '车灯'
						},
						{
							id: 598,
							name: '车锁'
						},
						{
							id: 599,
							name: '车架'
						},
						{
							id: 600,
							name: '配件'
						}
					]
				},
				{
					id: 60,
					name: '运动护具',
					children: [{
							id: 601,
							name: '护腕'
						},
						{
							id: 602,
							name: '护膝'
						},
						{
							id: 603,
							name: '护肘'
						},
						{
							id: 604,
							name: '护腰'
						},
						{
							id: 605,
							name: '护踝'
						},
						{
							id: 606,
							name: '头盔'
						},
						{
							id: 607,
							name: '面罩'
						},
						{
							id: 608,
							name: '护手'
						},
						{
							id: 609,
							name: '护腿'
						},
						{
							id: 610,
							name: '护齿'
						}
					]
				}
			]
		},
		{
			id: 6,
			name: '母婴童品',
			children: [{
					id: 61,
					name: '婴儿用品',
					children: [{
							id: 611,
							name: '纸尿裤'
						},
						{
							id: 612,
							name: '湿巾'
						},
						{
							id: 613,
							name: '婴儿车'
						},
						{
							id: 614,
							name: '婴儿床'
						},
						{
							id: 615,
							name: '安全座椅'
						},
						{
							id: 616,
							name: '奶瓶'
						},
						{
							id: 617,
							name: '奶嘴'
						},
						{
							id: 618,
							name: '婴儿食品'
						},
						{
							id: 619,
							name: '婴儿洗护'
						},
						{
							id: 620,
							name: '婴儿玩具'
						}
					]
				},
				{
					id: 62,
					name: '奶粉辅食',
					children: [{
							id: 621,
							name: '奶粉'
						},
						{
							id: 622,
							name: '米粉'
						},
						{
							id: 623,
							name: '果泥'
						},
						{
							id: 624,
							name: '肉泥'
						},
						{
							id: 625,
							name: '蔬菜泥'
						},
						{
							id: 626,
							name: '饼干'
						},
						{
							id: 627,
							name: '泡芙'
						},
						{
							id: 628,
							name: '磨牙棒'
						},
						{
							id: 629,
							name: 'DHA'
						},
						{
							id: 630,
							name: '益生菌'
						}
					]
				},
				{
					id: 63,
					name: '童装童鞋',
					children: [{
							id: 631,
							name: '儿童T恤'
						},
						{
							id: 632,
							name: '童鞋'
						},
						{
							id: 633,
							name: '亲子装'
						},
						{
							id: 634,
							name: '婴儿装'
						},
						{
							id: 635,
							name: '幼儿装'
						},
						{
							id: 636,
							name: '儿童外套'
						},
						{
							id: 637,
							name: '儿童裤子'
						},
						{
							id: 638,
							name: '儿童裙子'
						},
						{
							id: 639,
							name: '儿童内衣'
						},
						{
							id: 640,
							name: '儿童袜子'
						}
					]
				},
				{
					id: 64,
					name: '儿童玩具',
					children: [{
							id: 641,
							name: '益智玩具'
						},
						{
							id: 642,
							name: '毛绒玩具'
						},
						{
							id: 643,
							name: '电动玩具'
						},
						{
							id: 644,
							name: '积木玩具'
						},
						{
							id: 645,
							name: '遥控玩具'
						},
						{
							id: 646,
							name: '拼图玩具'
						},
						{
							id: 647,
							name: '早教玩具'
						},
						{
							id: 648,
							name: '户外玩具'
						},
						{
							id: 649,
							name: '角色扮演'
						},
						{
							id: 650,
							name: '体育玩具'
						}
					]
				},
				{
					id: 65,
					name: '婴儿寝具',
					children: [{
							id: 651,
							name: '婴儿床'
						},
						{
							id: 652,
							name: '床垫'
						},
						{
							id: 653,
							name: '床单'
						},
						{
							id: 654,
							name: '被套'
						},
						{
							id: 655,
							name: '枕头'
						},
						{
							id: 656,
							name: '被子'
						},
						{
							id: 657,
							name: '睡袋'
						},
						{
							id: 658,
							name: '蚊帐'
						},
						{
							id: 659,
							name: '床围'
						},
						{
							id: 660,
							name: '摇篮'
						}
					]
				},
				{
					id: 66,
					name: '婴儿出行',
					children: [{
							id: 661,
							name: '婴儿车'
						},
						{
							id: 662,
							name: '安全座椅'
						},
						{
							id: 663,
							name: '背带'
						},
						{
							id: 664,
							name: '提篮'
						},
						{
							id: 665,
							name: '遮阳棚'
						},
						{
							id: 666,
							name: '雨罩'
						},
						{
							id: 667,
							name: '保温壶'
						},
						{
							id: 668,
							name: '奶瓶保温袋'
						},
						{
							id: 669,
							name: '婴儿包'
						},
						{
							id: 670,
							name: '婴儿伞'
						}
					]
				},
				{
					id: 67,
					name: '婴儿喂养',
					children: [{
							id: 671,
							name: '奶瓶'
						},
						{
							id: 672,
							name: '奶嘴'
						},
						{
							id: 673,
							name: '奶瓶刷'
						},
						{
							id: 674,
							name: '奶瓶消毒器'
						},
						{
							id: 675,
							name: '温奶器'
						},
						{
							id: 676,
							name: '吸奶器'
						},
						{
							id: 677,
							name: '储奶袋'
						},
						{
							id: 678,
							name: '辅食碗'
						},
						{
							id: 679,
							name: '辅食勺'
						},
						{
							id: 680,
							name: '研磨碗'
						}
					]
				},
				{
					id: 68,
					name: '婴儿洗护',
					children: [{
							id: 681,
							name: '婴儿沐浴露'
						},
						{
							id: 682,
							name: '婴儿洗发水'
						},
						{
							id: 683,
							name: '婴儿润肤霜'
						},
						{
							id: 684,
							name: '婴儿爽身粉'
						},
						{
							id: 685,
							name: '婴儿护臀膏'
						},
						{
							id: 686,
							name: '婴儿洗衣液'
						},
						{
							id: 687,
							name: '婴儿洗衣皂'
						},
						{
							id: 688,
							name: '婴儿毛巾'
						},
						{
							id: 689,
							name: '婴儿浴巾'
						},
						{
							id: 690,
							name: '婴儿澡盆'
						}
					]
				},
				{
					id: 69,
					name: '婴儿安全',
					children: [{
							id: 691,
							name: '婴儿监控器'
						},
						{
							id: 692,
							name: '安全插座盖'
						},
						{
							id: 693,
							name: '桌角防护'
						},
						{
							id: 694,
							name: '门夹防护'
						},
						{
							id: 695,
							name: '窗户护栏'
						},
						{
							id: 696,
							name: '床栏'
						},
						{
							id: 697,
							name: '婴儿围栏'
						},
						{
							id: 698,
							name: '安全锁'
						},
						{
							id: 699,
							name: '烟雾报警器'
						},
						{
							id: 700,
							name: '急救包'
						}
					]
				},
				{
					id: 70,
					name: '早教用品',
					children: [{
							id: 701,
							name: '早教书籍'
						},
						{
							id: 702,
							name: '识字卡片'
						},
						{
							id: 703,
							name: '拼图'
						},
						{
							id: 704,
							name: '积木'
						},
						{
							id: 705,
							name: '早教机'
						},
						{
							id: 706,
							name: '点读笔'
						},
						{
							id: 707,
							name: '故事机'
						},
						{
							id: 708,
							name: '学习平板'
						},
						{
							id: 709,
							name: '绘画工具'
						},
						{
							id: 710,
							name: '科学实验套装'
						}
					]
				}
			]
		},
		{
			id: 7,
			name: '美妆个护',
			children: [{
					id: 71,
					name: '护肤',
					children: [{
							id: 711,
							name: '洁面'
						},
						{
							id: 712,
							name: '爽肤水'
						},
						{
							id: 713,
							name: '乳液'
						},
						{
							id: 714,
							name: '面霜'
						},
						{
							id: 715,
							name: '精华'
						},
						{
							id: 716,
							name: '眼霜'
						},
						{
							id: 717,
							name: '面膜'
						},
						{
							id: 718,
							name: '防晒霜'
						},
						{
							id: 719,
							name: '隔离霜'
						},
						{
							id: 720,
							name: '卸妆'
						}
					]
				},
				{
					id: 72,
					name: '彩妆',
					children: [{
							id: 721,
							name: '粉底'
						},
						{
							id: 722,
							name: '粉饼'
						},
						{
							id: 723,
							name: '散粉'
						},
						{
							id: 724,
							name: '腮红'
						},
						{
							id: 725,
							name: '眼影'
						},
						{
							id: 726,
							name: '眼线'
						},
						{
							id: 727,
							name: '睫毛膏'
						},
						{
							id: 728,
							name: '眉笔'
						},
						{
							id: 729,
							name: '口红'
						},
						{
							id: 730,
							name: '唇彩'
						}
					]
				},
				{
					id: 73,
					name: '香水',
					children: [{
							id: 731,
							name: '女士香水'
						},
						{
							id: 732,
							name: '男士香水'
						},
						{
							id: 733,
							name: '中性香水'
						},
						{
							id: 734,
							name: '淡香水'
						},
						{
							id: 735,
							name: '浓香水'
						},
						{
							id: 736,
							name: '古龙水'
						},
						{
							id: 737,
							name: '香水小样'
						},
						{
							id: 738,
							name: '香氛蜡烛'
						},
						{
							id: 739,
							name: '身体喷雾'
						},
						{
							id: 740,
							name: '香水礼盒'
						}
					]
				},
				{
					id: 74,
					name: '美发',
					children: [{
							id: 741,
							name: '洗发水'
						},
						{
							id: 742,
							name: '护发素'
						},
						{
							id: 743,
							name: '发膜'
						},
						{
							id: 744,
							name: '护发精油'
						},
						{
							id: 745,
							name: '染发剂'
						},
						{
							id: 746,
							name: '烫发剂'
						},
						{
							id: 747,
							name: '定型产品'
						},
						{
							id: 748,
							name: '吹风机'
						},
						{
							id: 749,
							name: '卷发棒'
						},
						{
							id: 750,
							name: '直发器'
						}
					]
				},
				{
					id: 75,
					name: '身体护理',
					children: [{
							id: 751,
							name: '沐浴露'
						},
						{
							id: 752,
							name: '身体乳'
						},
						{
							id: 753,
							name: '护手霜'
						},
						{
							id: 754,
							name: '润唇膏'
						},
						{
							id: 755,
							name: '磨砂膏'
						},
						{
							id: 756,
							name: '脱毛膏'
						},
						{
							id: 757,
							name: '止汗剂'
						},
						{
							id: 758,
							name: '香体露'
						},
						{
							id: 759,
							name: '足部护理'
						},
						{
							id: 760,
							name: '身体精油'
						}
					]
				},
				{
					id: 76,
					name: '美甲',
					children: [{
							id: 761,
							name: '指甲油'
						},
						{
							id: 762,
							name: '美甲工具'
						},
						{
							id: 763,
							name: '甲片'
						},
						{
							id: 764,
							name: '美甲贴'
						},
						{
							id: 765,
							name: '美甲灯'
						},
						{
							id: 766,
							name: '美甲胶'
						},
						{
							id: 767,
							name: '卸甲水'
						},
						{
							id: 768,
							name: '指甲刀'
						},
						{
							id: 769,
							name: '去死皮'
						},
						{
							id: 770,
							name: '营养油'
						}
					]
				},
				{
					id: 77,
					name: '美容工具',
					children: [{
							id: 771,
							name: '化妆棉'
						},
						{
							id: 772,
							name: '粉扑'
						},
						{
							id: 773,
							name: '化妆刷'
						},
						{
							id: 774,
							name: '美容仪'
						},
						{
							id: 775,
							name: '洁面仪'
						},
						{
							id: 776,
							name: '导入仪'
						},
						{
							id: 777,
							name: '蒸脸器'
						},
						{
							id: 778,
							name: '修眉刀'
						},
						{
							id: 779,
							name: '睫毛夹'
						},
						{
							id: 780,
							name: '卷发棒'
						}
					]
				},
				{
					id: 78,
					name: '男士护理',
					children: [{
							id: 781,
							name: '男士洁面'
						},
						{
							id: 782,
							name: '男士爽肤水'
						},
						{
							id: 783,
							name: '男士乳液'
						},
						{
							id: 784,
							name: '男士面霜'
						},
						{
							id: 785,
							name: '男士剃须'
						},
						{
							id: 786,
							name: '男士香水'
						},
						{
							id: 787,
							name: '男士洗发水'
						},
						{
							id: 788,
							name: '男士沐浴露'
						},
						{
							id: 789,
							name: '男士面膜'
						},
						{
							id: 790,
							name: '男士防晒霜'
						}
					]
				},
				{
					id: 79,
					name: '母婴护理',
					children: [{
							id: 791,
							name: '婴儿护肤品'
						},
						{
							id: 792,
							name: '婴儿沐浴露'
						},
						{
							id: 793,
							name: '婴儿洗发水'
						},
						{
							id: 794,
							name: '婴儿爽身粉'
						},
						{
							id: 795,
							name: '婴儿护臀膏'
						},
						{
							id: 796,
							name: '孕妇护肤品'
						},
						{
							id: 797,
							name: '孕妇身体护理'
						},
						{
							id: 798,
							name: '孕妇洗发水'
						},
						{
							id: 799,
							name: '孕妇沐浴露'
						},
						{
							id: 800,
							name: '防妊娠纹'
						}
					]
				},
				{
					id: 80,
					name: '美妆礼盒',
					children: [{
							id: 801,
							name: '护肤礼盒'
						},
						{
							id: 802,
							name: '彩妆礼盒'
						},
						{
							id: 803,
							name: '香水礼盒'
						},
						{
							id: 804,
							name: '洗护礼盒'
						},
						{
							id: 805,
							name: '男士礼盒'
						},
						{
							id: 806,
							name: '儿童礼盒'
						},
						{
							id: 807,
							name: '节日礼盒'
						},
						{
							id: 808,
							name: '限量礼盒'
						},
						{
							id: 809,
							name: '旅行套装'
						},
						{
							id: 810,
							name: '小样礼盒'
						}
					]
				}
			]
		}
	])


	return {
		categories
	}

})