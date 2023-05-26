<template>
	<navigationBar></navigationBar>
	<section>
    <!-- home-container start -->
    <header class="home-container">
        <div class="container">
            <div class="swiper-wrapper" id="J_homeSwiper">
                <!--左侧导航栏-->
                <ul class="swiper-category-list" id="J_categoryList">
                    <li class="category-li">
                        <a class="title"  @click="goAnchor('#dogs')">
                            宠物狗
                            <em></em>
                        </a>
                        <div class="children">
                            <ul class="children-list myclear" id="dogSwiper">
                            </ul>
                        </div>
                    </li>
                    <li class="category-li">
                        <a class="title"  @click="goAnchor('#cats')">
                            宠物猫
                            <em></em>
                        </a>
                        <div class="children">
                            <ul class="children-list myclear" id="catSwiper">
                            </ul>
                        </div>
                    </li>
                    <li class="category-li">
                        <a class="title" @click="goAnchor('#birds')">
                            宠物鸟
                            <em></em>
                        </a>
                        <div class="children">
                            <ul class="children-list myclear" id="birdSwiper">
                            </ul>
                        </div>
                    </li>
                    <li class="category-li">
                        <a class="title" @click="goAnchor('#fish')">
                            水族宠物
                            <em></em>
                        </a>
                        <div class="children">
                            <ul class="children-list myclear" id="fishSwiper">
                            </ul>
                        </div>
                    </li>
                    <li class="category-li">
                        <a class="title" @click="goAnchor('#reptiles')">
                            两栖爬行
                            <em></em>
                        </a>
                        <div class="children">
                            <ul class="children-list myclear" id="reptileSwiper">
                            </ul>
                        </div>
                    </li>
                </ul>
                <!--轮播图-->
                <ul class="swiper-list myclear">
                    <li>
                        <a href="javascript:;">
                            <img src="https://pic.90sheji.com/design/00/60/20/09/36d0211e17c6e1152bb42ae411743545.png%21/fh/465/quality/90/unsharp/true/compress/true/canvas/1000x465a0a0/cvscolor/FFFFFFFF">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="https://img.zcool.cn/community/01e8a060a3175b11013e3b7d5f3f37.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="https://img.zcool.cn/community/01b7d25f16e36da801215aa00321ff.jpg@1280w_1l_2o_100sh.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="https://img.zcool.cn/community/01a0935efc3d70a801215aa0139294.jpg@1280w_1l_2o_100sh.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="https://img.zcool.cn/community/0173c25bc4586aa801213deaefe7dc.jpg@2o.jpg">
                        </a>
                    </li>
                </ul>
                <ul class="swiper-pagination myclear">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <!--轮播图翻页-->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="home-hero-sub myclear">
                <ul class="home-channel-list myclear">
                    <li><a href="javascript:;"><img alt="主粮" src="../../assets/image/section/m1.png">主粮</a></li>
                    <li><a href="javascript:;"><img alt="零食" src="../../assets/image/section/m2.png">零食</a></li>
                    <li><a href="javascript:;"><img alt="玩具" src="../../assets/image/section/m3.png">玩具</a></li>
                    <li><a href="javascript:;"><img alt="清洁" src="../../assets/image/section/m4.png">清洁</a></li>
                    <li><a href="javascript:;"><img alt="装扮" src="../../assets/image/section/m5.png">装扮</a></li>
                    <li><a href="javascript:;"><img alt="护理" src="../../assets/image/section/m6.png">护理</a></li>
                </ul>
                <ul class="home-promo-list myclear">
                    <li><a href=""><img
                            alt=""
                            src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00202-2862.jpg"></a>
                    </li>
                    <li><a href=""><img
                            alt=""
                            src="https://img0.baidu.com/it/u=1410510505,4239539557&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"></a>
                    </li>
                    <li><a href=""><img
                            alt=""
                            src="https://img1.baidu.com/it/u=3188500518,1904352856&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=318"></a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <!-- home-container end -->

    <!-- 主体内容的分页部分start -->

    <div class="page-main">
        <div class="container" style="font: 10px 'Microsoft YaHei'">
            <a id="dogs"></a>
            <div class="main main-iphon">
                <div class="box-hd">
                    <h2>狗狗</h2>
                    <div class="more2">
                        <a class="more-link" @click="showAll('狗狗')">查看全部<i></i></a>
                    </div>
                </div>
                <div class="box-content myclear">
                    <div class="left">
                        <ul>
                            <li class="brick-item">
                                <a href="javascript:;">
                                    <img alt=""
                                         src="https://images.pexels.com/photos/1906153/pexels-photo-1906153.jpeg?auto=compress&cs=tinysrgb&w=600">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="right" style="display: block;">
                        <ul class="myclear" id="dogList">
                            <li class="brick-item brick-item-m" v-for="dog in dogs" :key="dog.productId" @click="getPetDetails(dog)"> 
                                <div class="figure-img"><img :src="dog.productImage"></div>
                                <h3 class="title">{{dog.productNameChinese}}</h3>
                                <p class="desc">{{dog.productNameEnglish}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <a id="cats"></a>
            <div class="main main-iphon">
                <div class="box-hd">
                    <h2>猫猫</h2>
                    <div class="more2">
                        <a class="more-link" @click="showAll('猫咪')">查看全部<i></i></a>
                    </div>
                </div>
                <div class="box-content myclear">
                    <div class="left">
                        <ul>
                            <li class="brick-item"><a href="javascript:;">
                            <img
                                alt=""
                                src="https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941__340.jpg"></a></li>
                        </ul>
                    </div>
                    <div class="right" style="display: block;">
                        <ul class="myclear" id="catList">
                            <li class="brick-item brick-item-m" v-for="cat in cats" :key="cat.productId" @click="getPetDetails(cat)"> 
                                <div class="figure-img"><img :src="cat.productImage"></div>
                                <h3 class="title">{{cat.productNameChinese}}</h3>
                                <p class="desc">{{cat.productNameEnglish}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <a id="birds"></a>
            <div class="main main-iphon">
                <div class="box-hd">
                    <h2>小宠</h2>
                    <div class="more2">
                        <a class="more-link" @click="showAll('小宠')">查看全部<i></i></a>
                    </div>
                </div>
                <div class="box-content myclear">
                    <div class="left">
                        <ul>
                            <li class="brick-item"><a href="javascript:;"><img
                                    alt=""
                                    src="https://cdn.pixabay.com/photo/2014/07/26/19/29/weaver-402521__340.jpg"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="right" style="display: block;">
                        <ul class="myclear" id="birdList">
                            <li class="brick-item brick-item-m" v-for="bird in birds" :key="bird.productId" @click="getPetDetails(bird)"> 
                                <div class="figure-img"><img :src="bird.productImage"></div>
                                <h3 class="title">{{bird.productNameChinese}}</h3>
                                <p class="desc">{{bird.productNameEnglish}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <a id="fish"></a>
            <div class="main main-iphon">
                <div class="box-hd">
                    <h2>水族</h2>
                    <div class="more2">
                        <a class="more-link" @click="showAll('水族')">查看全部<i></i></a>
                    </div>
                </div>
                <div class="box-content myclear">
                    <div class="left">
                        <ul>
                            <li class="brick-item"><a href="javascript:;"><img
                                    alt=""
                                    src="https://cdn.pixabay.com/photo/2017/08/03/10/59/nature-2575575__340.jpg"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="right" style="display: block;">
                        <ul class="myclear" id="fishList">
                            <li class="brick-item brick-item-m" v-for="fish in fishes" :key="fish.productId" @click="getPetDetails(fish)"> 
                                <div class="figure-img"><img :src="fish.productImage"></div>
                                <h3 class="title">{{fish.productNameChinese}}</h3>
                                <p class="desc">{{fish.productNameEnglish}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <a id="reptiles"></a>
            <div class="main main-iphon">
                <div class="box-hd">
                    <h2>爬虫</h2>
                    <div class="more2">
                        <a class="more-link" @click="showAll('爬虫')">查看全部<i></i></a>
                    </div>
                </div>
                <div class="box-content myclear">
                    <div class="left">
                        <ul>
                            <li class="brick-item"><a href="javascript:;"><img
                                    alt=""
                                    src="https://cdn.pixabay.com/photo/2022/03/20/16/21/iguana-7081261__340.jpg"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="right" style="display: block;">
                        <ul class="myclear" id="reptileList">
                            <li class="brick-item brick-item-m" v-for="reptile in reptiles" :key="reptile.productId" @click="getPetDetails(reptile)"> 
                                <div class="figure-img"><img :src="reptile.productImage"></div>
                                <h3 class="title">{{reptile.productNameChinese}}</h3>
                                <p class="desc">{{reptile.productNameEnglish}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 主体内容的分页部分end -->
</section>
<footer>
    <!-- 固定 -->
    <div class="div_home">
        <div class="div_home" id="userButton">
            <router-link class="home2" to="/selfCenter"><span>个人中心</span></router-link>
            <router-link class="home5" to="/cart"><span>购物车</span></router-link>
            <a class="img_yincang" href="/jpetstore"><span>回到顶部</span></a>
        </div>
    </div>
</footer>
</template>

<script>
	import { defineComponent } from "vue"
	import navigationBar from '../../components/header.vue'
    import axios from "axios"
	
	export default defineComponent({
		name: "index",
		data(){
			return {
				dogs:[],
                cats:[],
                birds:[],
                fishes:[],
                reptiles:[]
			}
		},
		components: {navigationBar},
        mounted: function () {
            this.ready()
        },
		methods: {
            ready(){
                let that = this
                let config = {
                    url: "http://localhost:8080/jpetstore/pets",
                    method: "GET",
                    headers: {},
                };
                axios(config)
                .then(function (response) {
                    console.log(response)
                    that.dogs = response.data.data.dog;
                    that.dogs.forEach(function(pet) {
                        pet.productImage = `http://localhost:8080/jpetstore/image/look/${ pet.productImage}`
                    })
                    that.cats = response.data.data.cat;
                    that.cats.forEach(function(pet) {
                        pet.productImage = `http://localhost:8080/jpetstore/image/look/${ pet.productImage}`
                    })
                    that.birds = response.data.data.bird;
                    that.birds.forEach(function(pet) {
                        pet.productImage = `http://localhost:8080/jpetstore/image/look/${ pet.productImage}`
                    })
                    that.fishes = response.data.data.fish;
                    that.fishes.forEach(function(pet) {
                        pet.productImage = `http://localhost:8080/jpetstore/image/look/${ pet.productImage}`
                    })
                    that.reptiles = response.data.data.reptile;
                    that.reptiles.forEach(function(pet) {
                        pet.productImage = `http://localhost:8080/jpetstore/image/look/${ pet.productImage}`
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
            },

            showAll(category){
                let that = this;
                sessionStorage.setItem("keyword", JSON.stringify(category));
                that.$router.push('/search')
            },

            getPetDetails(pet){
                let that = this;
                sessionStorage.setItem("pet", JSON.stringify(pet.productId));
                that.$router.push('/details')
            },

            //锚点跳转
            goAnchor(selector) {/*参数selector是id选择器（#anchor14）*/
                document.querySelector(selector).scrollIntoView({
                    behavior: "smooth"
                });
            },
        },
	})
</script>

<style scoped>
	@import '../../assets/css/style.css';
</style>