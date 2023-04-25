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
                        <a class="title" href="#dogs">
                            宠物狗
                            <em></em>
                        </a>
                        <div class="children">
                            <ul class="children-list myclear" id="dogSwiper">
                            </ul>
                        </div>
                    </li>
                    <li class="category-li">
                        <a class="title" href="#cats">
                            宠物猫
                            <em></em>
                        </a>
                        <div class="children">
                            <ul class="children-list myclear" id="catSwiper">
                            </ul>
                        </div>
                    </li>
                    <li class="category-li">
                        <a class="title" href="#birds">
                            宠物鸟
                            <em></em>
                        </a>
                        <div class="children">
                            <ul class="children-list myclear" id="birdSwiper">
                            </ul>
                        </div>
                    </li>
                    <li class="category-li">
                        <a class="title" href="#fish">
                            水族宠物
                            <em></em>
                        </a>
                        <div class="children">
                            <ul class="children-list myclear" id="fishSwiper">
                            </ul>
                        </div>
                    </li>
                    <li class="category-li">
                        <a class="title" href="#reptiles">
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


            <a name="dogs"></a>
            <div class="main main-iphon">
                <div class="box-hd">
                    <h2>狗狗</h2>
                    <div class="more2">
                        <a class="more-link" href="javascript:;">查看全部<i></i></a>
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
                        </ul>
                    </div>
                </div>
            </div>

            <a name="cats"></a>
            <div class="main main-iphon">
                <div class="box-hd">
                    <h2>猫猫</h2>
                    <div class="more2">
                        <a class="more-link" href="javascript:;">查看全部<i></i></a>
                    </div>
                </div>
                <div class="box-content myclear">
                    <div class="left">
                        <ul>
                            <li class="brick-item"><a href="javascript:;"><img
                                    alt=""
                                    src="https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941__340.jpg"></a></li>
                        </ul>
                    </div>
                    <div class="right" style="display: block;">
                        <ul class="myclear" id="catList">
                        </ul>
                    </div>
                </div>
            </div>

            <a name="birds"></a>
            <div class="main main-iphon">
                <div class="box-hd">
                    <h2>小宠</h2>
                    <div class="more2">
                        <a class="more-link" href="javascript:;">查看全部<i></i></a>
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
                        </ul>
                    </div>
                </div>
            </div>

            <a name="fish"></a>
            <div class="main main-iphon">
                <div class="box-hd">
                    <h2>水族</h2>
                    <div class="more2">
                        <a class="more-link" href="javascript:;">查看全部<i></i></a>
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
                        </ul>
                    </div>
                </div>
            </div>

            <a name="reptiles"></a>
            <div class="main main-iphon">
                <div class="box-hd">
                    <h2>爬虫</h2>
                    <div class="more2">
                        <a class="more-link" href="javascript:;">查看全部<i></i></a>
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 主体内容的分页部分end -->
</section>
</template>

<script>
	import { defineComponent } from "vue"
	import navigationBar from "../../components/header.vue"
	
	export default defineComponent({
		name: "index",
		data(){
			return {
				data:''
			}
		},
		components: {navigationBar},
		methods: {
			
		},
	})
</script>