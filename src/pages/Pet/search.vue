<template>
    <navigationBar></navigationBar>
    <section class="page-main">
    <div class="container">
        <div class="cart-goods-list" id="J_cartListGoods">
            <div class="list-head myclear" data-checked="false">
                <div class="col col-price" style="margin-left: 60px">编号</div>
                <div class="col col-price" style="margin-left: 116px">图片</div>
                <div class="col col-price" style="margin-left: 68px">中文名</div>
                <div class="col col-price" style="margin-left: 150px">英文名</div>
            </div>
            <div id="wapper"></div>
        </div>
        <h2 class="xm-recommend-title"><span id="J_span">已经到底啦！</span></h2>
    </div>
</section>
 </template>
   
 <script>
     import '../utils/index.js'
	import navigationBar from '../../components/header.vue'
 
     export default{
         data(){
             return {
                 
             }
         },
		 components: {navigationBar},
         methods: {
             
         },
     }
 </script>
 
 <style scoped>
     @import '../assets/css/style.css';
 </style>