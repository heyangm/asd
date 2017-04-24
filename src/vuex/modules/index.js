import {
	CHANGE_STYLE,
	CHANGE_PRICE
} from '../mutation-types'

const state ={
	iphone6s:{
		name : '苹果、iphone6s',
		descri : '3Dtouch  1200万像素',
		price : '￥ 5288-6888',
		style : {
      '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
      '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
      '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
      '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
    	},
    	storage:{
    		'16GB' : 5228,
    		'64GB' : 6088,
    		'128GB' :6888
    	}
	}
}
export default {
	state
}
