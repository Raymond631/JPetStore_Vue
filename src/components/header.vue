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
            <div class="topbar-cart top-cart" id="J_miniCartTrigger"  v-if="user">
                <router-link to="/cart"> 
                    <em></em>
                    购物车
                </router-link>
            </div>
            <!-- 登录注册 -->
            <div class="topbar-info" id="notLogin" v-if="!user">
                <router-link to="/login">登录</router-link>
                <span class="sep">|</span>
                <router-link to="/register">注册</router-link>
            </div>
            <div class="topbar-info" id="logined"  v-if="user">
                <a @click="logout">退出登录</a>
                <span class="sep">|</span>
                <router-link to="/MyOrder">我的订单</router-link>
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
                        <a @click="goAnchor('#dogs')">狗狗</a>
                    </li>
                    <li class="nav-item">
                        <a @click="goAnchor('#cats')">猫猫</a>
                    </li>
                    <li class="nav-item">
                        <a @click="goAnchor('#birds')">小宠</a>
                    </li>
                    <li class="nav-item">
                        <a @click="goAnchor('#fish')">水族</a>
                    </li> 
                    <li class="nav-item">
                        <a @click="goAnchor('#reptiles')">爬虫</a>
                    </li>
                </ul>
            </nav>
            <!-- 搜索 -->
            <div class="myclear header-search">
                <div >
                    <input v-model="searchContent" class="search-text" id="search" name="keyword" style="border-color: #ff6700" type="text" @input="getTips"/>
                    <input class="search-btn" id="search_btn" style="border-color: #ff6700" type="submit" @click="search" value=" "/>
                </div>

                <div class="keyword-list" id="J_keywordList" style="font: 10px 'Microsoft YaHei'">
                    <ul class="result-list" id="tips">
                        <li v-for="tip in tips" :key="tip"><a @click="select(tip)">{{ tip }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
    import axios from "axios"

	export default {
		data(){
			return {
				searchContent:'',
                tips:[],
                user:false

			}
		},
        mounted: function () {
            this.ready()
        },
		methods: {
            ready(){
                if(JSON.parse(sessionStorage.getItem("user"))!=null&&JSON.parse(sessionStorage.getItem("user"))!=''){
                    this.user = true
                }
                else{
                    this.user= false;
                }
            },
            //锚点跳转
            goAnchor(selector) {/*参数selector是id选择器（#anchor14）*/
                document.querySelector(selector).scrollIntoView({
                    behavior: "smooth"
                });
            },
            getTips(){
                let that = this;
                let keyword = that.searchContent;
                if (keyword !== null && keyword !== "") {
                    let config = {
                        url: "http://localhost:8080/jpetstore/pets/searchTip?keyword=" + encodeURIComponent(keyword),
                        method: "GET",
                        headers: {},
                    };

                    axios(config)
                    .then(function (response) {
                        console.log(response)
                        that.tips=response.data.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }
                else{
                    that.tips='';
                }
            },

			search(){
                let that = this;
                let keyword = that.searchContent;
                if (keyword !== null && keyword !== "") {
                    sessionStorage.setItem("keyword", JSON.stringify(keyword));
                    that.$router.push('/search')
                } 
            },
            //这是搜索的一部分
            select(pet){
                let that = this;
                console.log(pet)
                let keyword = pet;
                if (keyword !== null && keyword !== "") {
                    sessionStorage.setItem("keyword", JSON.stringify(keyword));
                    that.$router.push('/search')
                } 
            },
            logout(){
                sessionStorage.setItem("user", JSON.stringify(null));
                this.user=false;
                this.$router.push('/')
            }
		},
	}
</script>

<style scoped>
	@import '../assets/css/style.css';
</style>
