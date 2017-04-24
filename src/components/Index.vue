<template>
	<div class="main">
		<div class="photo">
			<img src="http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png" alt="" />
		</div>
		<div class="decri">
			<h3 v-text="iphone6s.name"></h3>
			<p v-text="iphone6s.descri">描述：3Dtouch 、1200万像素</p>
			<p>价格：<span>￥5288-6888</span></p>
			<div>
				外观：<a href="">银色</a><a href="">深灰色</a><a href="">金色</a>
			</div>
			<div>
				存储容量：<a href="">16GB</a><a href="">64GB</a><a href="">128GB</a>
			</div>
			<div class="car"><a href="">加入购物车</a></div>
		</div>
	</div>
</template>
<script>
	
</script>
<style>
	.photo,.decri{display: inline-block;vertical-align: top;}
</style>