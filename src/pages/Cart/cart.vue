<template>
<header class="site-header site-mini-header">
    <div class="container">
        <!--logo -->
        <div class="header-logo">
            <a class="logo ir" href="/jpetstore"></a>
        </div>
        <!-- 标题 -->
        <div class="header-title has-more" id="J_miniHeaderTitle">
            <h2>我的购物车</h2>
            <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
        </div>
        <div class="topbar-info" id="J_userInfo">
            <a class="link link-order" href="/jpetstore/MyOrder.html" rel="nofollow">我的订单</a>
        </div>
    </div>
</header>
<!-- 商品内容 -->
<section class="page-main">
    <div class="container">
        <div class="cart-goods-list" id="J_cartListGoods">
            <div class="list-head myclear" data-checked="false">
                <div class="col col-check">
                    <input type="checkbox"
                        v-model="checkAll"
                        @click="selectAll"
                    />  全选
                </div>
                <div class="col col-img">&nbsp;</div>
                <div class="col col-name">商品名称</div>
                <div class="col col-price">单价</div>
                <div class="col col-num">数量</div>
                <div class="col col-total">小计</div>
                <div class="col col-action">操作</div>
            </div>
            <div id="wapper">
                <div class="list-body myclear" data-checked = "false" v-for="cart in carts" :key="cart.productId">
                    <div class="col col-check">
                    <input type="checkbox" v-model="checked" :value="cart.cartItemId" @click="select(cart.cartItemId,cart)"/></div>
					<div class="col col-img"><a href="javascript:;"><img src="/jpetstore/image/look/{{ cart.productImage }}" alt=""></a></div>
					<div class="col col-name">{{cart.productNameChinese}}/{{cart.itemSpecification}}</div>
					<div class="col col-price">{{cart.itemPrice}}</div>
					<div class="col col-num">
                    <el-input-number v-model="cart.quantity" :min="1" @change="changeNumber(cart)" size="mx-4"  />
					</div>						
                    <div class="col col-total">{{cart.total_cost}}</div>
					<div class="col col-action" @click="deleteCart(cart)">×</div>
				</div>
            </div>
            <div class="cart-bar myclear cart-bar-fixed">
                <div class="section-left">
                    <a class="back-shopping J_goShoping" href="/">继续购物</a>
                    <span class="cart-total">
								共
								<i id="J_cartTotalNum">1</i>
								件商品，已选择
								<i id="J_selTotalNum">0</i>
								件
							</span>
                    <span class="total-price">
								合计：
                        <em id="J_cartTotalPrice">{{ totalCost }}</em>
                                元
							</span>
                    <a class="btn btn-disabled" v-if="totalCost==0">去结算</a>
                    <a class="btn" v-else @click="comfirmCart">去结算</a>
                </div>
                <div class="no-select-tip" id="J_noSelectTip" v-if="totalCost==0">
                    请勾选需要结算的商品
                    <i class="arrow arrow-a"></i>
                    <i class="arrow arrow-b"></i>
                </div>
            </div>
        </div>
        <h2 class="xm-recommend-title"><span id="J_span">已经到底啦！</span></h2>
    </div>
</section>
</template>
  
<script>
    import { defineComponent } from "vue"
    import { Decimal } from 'decimal.js'
    import axios from "axios"

    export default defineComponent({
        name: "cart",
        data(){
            return {
                carts:[],
                totalCost:0,
                checkAll:false,
                checked:[]
            }
        },
        mounted: function () {
            this.ready()
        },
        methods: {
            ready(){
                let that = this;
                let config = {
                    url: "http://localhost:8080/jpetstore/cart",
                    method: "GET",
                    headers: {},
                };
                axios(config)
                .then(function (response) {
                    that.carts = response.data.data
                    for(let i=0;i<that.carts.length;i++){
                        that.carts[i].total_cost=new Decimal(that.carts[i].itemPrice).mul(new Decimal(that.carts[i].quantity));
                        //TODO这个地方留给修改图片路径
                    }
                    console.log(that.carts)
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            //改变购买数量
            changeNumber(cart){
                cart.total_cost = new Decimal(cart.itemPrice).mul(new Decimal(cart.quantity))
            },
            //删除
            deleteCart(cart){
                let that = this
                var config = {
                    method: 'delete',
                    url: "http://localhost:8080/jpetstore/cart/" + cart.cartItemId,
                    headers: {}
                };

                axios(config)
                .then(function (response) {
                    that.carts.splice(that.carts.indexOf(cart),1);
                    if(that.checked.includes(cart.cartItemId)){
                        that.checked.splice(that.checked.indexOf(cart.cartItemId),1);
                        that.totalCost =new Decimal(that.totalCost).sub(new Decimal(cart.total_cost)) 
                    }
                })
                .catch(function (error) {
                    console.log(error);
                }); 
            },
            selectAll(){
                let that = this;
                if(that.checkAll){
                    that.checked=[];
                    that.totalCost=0;
                }
                else{
                    that.checked=[];
                    that.carts.forEach(function(cart) {
                        that.totalCost =new Decimal(that.totalCost).add(new Decimal(cart.total_cost)) 
                        that.checked.push(cart.cartItemId)
                    })
                }
                if(that.checked.length === that.carts.length) {
                    that.checkAll = true                 
                }
            }, 
            select(id,cart){
                let that  = this;
                //取消选择
                if(that.checked.includes(id)){
                    that.checked.splice(that.checked.indexOf(id),1);
                    that.totalCost =new Decimal(that.totalCost).sub(new Decimal(cart.total_cost)) 
                }
                else{
                    that.checked.push(id)
                    that.totalCost =new Decimal(that.totalCost).add(new Decimal(cart.total_cost)) 
                }
            },
            comfirmCart(){
                let that = this;
                that.checked.forEach(function(orderId) {
                    let orders = [];
                    for(let i=0;i<that.carts.length;i++){
                        if(that.carts[i].cartItemId===orderId){
                            orders.push(that.carts[i]);
                            // that.deleteCart(that.carts[i])
                        }
                    }
                sessionStorage.setItem("orders", JSON.stringify(orders));
                that.$router.push('/OrderSubmit')
                })
            }
        },
    })
</script>

  
<style scoped>
@import '../../assets/css/shopping.css';

</style>