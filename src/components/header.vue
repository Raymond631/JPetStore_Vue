<template>
   <!-- 头部 -->
<header id="header">
    <!-- 顶部导航栏start -->
    <div class="site-topbar">
        <div class="container">
            <!-- 导航栏 -->
            <nav class="topbar-nav">
                <a href="/jpetstore">JPetStore</a>
                <span class="sep">|</span>
                <a href="https://www.ixiupet.com/zixun/">宠物资讯</a>
                <span class="sep">|</span>
                <a href="https://www.ixiupet.com/zhanhui/">宠物展会</a>
                <span class="sep">|</span>
                <a href="https://www.ixiupet.com/xuanpin/">选品库</a>
                <span class="sep">|</span>
                <a href="https://www.ixiupet.com/baike/">宠物百科</a>
                <span class="sep">|</span>
                <a href="https://www.ixiupet.com/tupian/">萌宠图片</a>
                <span class="sep">|</span>
                <a href="https://www.ixiupet.com/pinpai/">品牌大全</a>
                <span class="sep">|</span>
                <a href="https://www.ixiupet.com/pinzhong/">宠物品种</a>
                <span class="sep">|</span>
                <a href="#" id="J_siteDownloadApp">下载app</a>
            </nav>
            <!-- 购物车 -->
            <div class="topbar-cart top-cart" id="J_miniCartTrigger">
                <a href="/jpetstore/MyCart.html">
                    <em></em>
                    购物车
                </a>
            </div>
            <!-- 登录注册 -->
            <div class="topbar-info" id="notLogin">
                <router-link to="/login">登录</router-link>
                <span class="sep">|</span>
                <a href="/jpetstore/Register.html">注册</a>
            </div>
            <div class="topbar-info" id="logined">
                <a href="javascript:logout();">退出登录</a>
                <span class="sep">|</span>
                <a href="/jpetstore/MyOrder.html">我的订单</a>
            </div>
        </div>
    </div>
    <!-- 顶部导航栏end -->

    <!-- 头部导航栏start -->
    <div class="site-header">
        <div class="container myclear">
            <!-- logo -->
            <div class="header-logo">
                <ul class="myclear">
                    <li><a href="/jpetstore"></a></li>
                    <li></li>
                </ul>
            </div>
            <!-- 导航栏 -->
            <nav class="header-nav myclear">
                <ul id="J_childrenList">
                    <li class="nav-item">
                        <a href="/jpetstore/#dogs">狗狗</a>
                    </li>
                    <li class="nav-item">
                        <a href="/jpetstore/#cats">猫猫</a>
                    </li>
                    <li class="nav-item">
                        <a href="/jpetstore/#birds">小宠</a>
                    </li>
                    <li class="nav-item">
                        <a href="/jpetstore/#fish">水族</a>
                    </li>
                    <li class="nav-item">
                        <a href="/jpetstore/#reptiles">爬虫</a>
                    </li>
                </ul>
            </nav>
            <!-- 搜索 -->
            <div class="myclear header-search">
                <form action="/jpetstore/Search.html" autocomplete="off" method="get">
                    <input class="search-text" id="search" name="keyword" style="border-color: #ff6700" type="text"/>
                    <input class="search-btn" id="search_btn" style="border-color: #ff6700" type="submit" value=""/>
                </form>
                <div class="keyword-list" id="J_keywordList" style="font: 10px 'Microsoft YaHei'">
                    <ul class="result-list" id="tips">
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
</template>
  
<script>
    import '../utils/index.js'

	export default{
		data(){
			return {
				
			}
		},
		methods: {
			
		},
	}
</script>

<style scoped>
	@import '../assets/css/style.css';
</style>