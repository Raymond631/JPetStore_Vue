<template>
	<navigationBar></navigationBar>
    <!--详情-->
<section>
    <div class="de_container w">
        <div class="product_intro clearfix">

            <div class="entry_tit">
                <dl class="entry_tit_pet">
                    <dt>基本信息栏</dt>
                    <dd>
                        <span>中文名：</span>
                        <em id="product_name_Chinese">{{ productNameChinese }}</em>
                    </dd>
                    <dd>
                        <span>英文名：</span>
                        <em id="product_name_English">{{ productNameEnglish }}}</em>
                    </dd>
                    <dd>
                        <span>性　格：</span>
                        <em id="product_character">{{ productCharacter }}}</em>
                    </dd>
                    <dd>
                        <span>祖　籍：</span>
                        <em id="product_ancestry">{{ productAncestry }}</em>
                    </dd>
                    <dd>
                        <span>易患病：</span>
                        <em id="product_disease">{{  productDisease}}</em>
                    </dd>
                    <dd>
                        <span>寿　命：</span>
                        <em id="product_life">{{ productLife }}</em>
                    </dd>
                </dl>
                <div class="entry_tit_rig">
                    <img id="petImage" alt="暂无图片" src="/jpetstore/image/img.png"/>
                </div>
                <div style="font: 16px/20px 'Microsoft YaHei'">
                    <span>简  介：</span>
                    <em id="product_introduce">{{ productIntroduce }}</em>
                </div>
            </div>
            <div style="float: left;width: 450px;margin-top: 29px;margin-bottom: 20px">
                <dl class="choose_color">
                    <dt style="font: 20px 'Microsoft YaHei';margin-bottom: 20px">选择子项</dt>
                    <dd id="pet_list" >
                        <a class="list_item" v-for="(pet,index) in petItemList" :key="index" :class="index==current ? 'current' : '  ' " @click="chooseItem(index,pet)" >{{ pet.itemSpecification }}</a><br>
                    </dd>
                </dl>
            </div>
            <div class="itemInfo_wrap fr" style="margin-top: 45px">
                <div class="sku_name" id="pet_name"></div>
                <div class="summary">
                    <dl class="summary_price">
                        <dt style="font: 20px 'Microsoft YaHei'">价格</dt>
                        <dd>
                            <i class="price" id="pet_price">{{ totalPrice }}</i>
                        </dd>
                    </dl>
                    <div class="choose_btns">
                        <div class="choose_amount">
                            <el-input-number v-model="number" :min="1" :max="max_Number" @change="changeNumber" size="mx-4" style="margin-top: 5px;" />
                            <!-- <input id="item_num" type="text" value="1">
                            <a class="add" href="javascript:num_up();">+</a>
                            <a class="reduce" href="javascript:num_down();">-</a> -->
                        </div>
                        <a class="addcar" @click="addToCart" id="addToCart">加入购物车</a>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- 页脚 -->
<footer>
    <!-- 固定 -->
    <div class="div_home">
        <div class="div_home" id="userButton">
            <a class="home2" href="/jpetstore/SelfCenter.html"><span>个人中心</span></a>
            <a class="home5" href="/jpetstore/MyCart.html"><span>购物车</span></a>
        </div>
        <a class="img_yincang" href="#top"><span>回到顶部</span></a>
    </div>
</footer>
</template>

<script>
	import { defineComponent } from "vue"
	import navigationBar from '../../components/header.vue'
    import { Decimal } from 'decimal.js'
    import axios from "axios"
	
	export default defineComponent({
		name: "details",
		data(){
			return {
                //作为选择依据
                current: 0,
                //购买数量
                number: 1,
                max_Number: 16,
				productId:0,
                itemId:0,
                category:'',
                productNameChinese:'',
                productNameEnglish:'',
                productCharacter:'',
                productAncestry:'',
                productDisease:'',
                productLife:'',
                productIntroduce:'',
                productImage:'',
                price:0,
                totalPrice:8807.95,
                name:'',
                petItemList:[]
			}
		},
		components: {navigationBar},
        mounted: function () {
            this.ready()
        },
		methods: {
            ready(){
                let that = this;
                let productId = JSON.parse(sessionStorage.getItem("pet"));
                var config = {
                    method: 'get',
                    url: "http://localhost:8080/jpetstore/pets/" + productId,
                    headers: {}
                };

                axios(config)
                .then(function (response) {
                    console.log(response.data.data)
                    that.productId = response.data.data.productId;
                    that.category = response.data.data.category; 
                    that.productAncestry = response.data.data.productAncestry;
                    that.productCharacter = response.data.data.productCharacter;
                    that.productNameChinese = response.data.data.productNameChinese;
                    that.productNameEnglish = response.data.data.productNameEnglish;
                    that.productLife = response.data.data.productLife;
                    that.productCharacter = response.data.data.productCharacter;
                    that.productImage = response.data.data.productImage;
                    that.productIntroduce = response.data.data.productIntroduce;
                    that.petItemList = response.data.data.petItemList;
                    that.price = response.data.data.petItemList[0].itemPrice;
                    that.totalPrice = response.data.data.petItemList[0].itemPrice;
                    that.itemId = response.data.data.petItemList[0].itemId;
                    that.name = response.data.data.petItemList[0].itemSpecification;
                    that.max_Number = response.data.data.petItemList[0].itemStock;
                })
                .catch(function (error) {
                    console.log(error);
                });

            
            },
            //选择小类
            chooseItem(index,pet){
                let that = this;
                that.current = index;
                that.max_Number = pet.itemStock;
                that.number = 1;
                that.name = pet.itemSpecification;
                that.price = pet.itemPrice;
                that.totalPrice = pet.itemPrice;
                that.itemId = pet.itemId
            },
            //改变购买数量
            changeNumber(){
                let that = this;
                that.totalPrice = new Decimal(that.number).mul(new Decimal(that.price))
            },
            //加入购物车
            addToCart(){
                let that = this;
                let data = {
                    productId:that.productId,
                    itemId: that.itemId,
                    quantity: that.number
                };
                var config = {
                    method: 'post',
                    url: "http://localhost:8080/jpetstore/cart",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: data
                };

                axios(config)
                .then(function (response) {
                    alert("加入购物车成功")
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
		},
	})
</script>

<style scoped>
	@import '../../assets/css/style.css';
	@import '../../assets/css/base.css';
	@import '../../assets/css/common.css';
	@import '../../assets/css/detail.css';
</style>