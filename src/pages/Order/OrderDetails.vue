<template>
  <div class="order_head">
    <div class="head_background">
      <div class="head_box">
        <a href="/jpetstore" class="head_left_a"><img src="/jpetstore/image/header/logo.png" alt="" class="head_left_p"></a>
        <h1 class="head_h1">订单详情</h1>
        <div class="head_right">
          <router-link to="/MyOrder" class="head_right_in">返回订单列表</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="order_body">
    <div class="order_body_background">
      <!-- 订单号-->
      <div class="order_line order_line_bordtr">
        <div class="order_lien_in">
          <h3 class="order_title">订单编号</h3>
        </div>
        <div class="order_lien_in">
          <p class="order_PStime" style="font: 18px 'Microsoft YaHei'">{{ order.orderId }}</p>
        </div>
      </div>
      <!-- 下单时间-->
      <div class="order_line order_line_bordtr">
        <div class="order_lien_in">
          <h3 class="order_title">下单时间</h3>
        </div>
        <div class="order_lien_in">
          <p class="order_PStime" id="orderTime" style="font: 18px 'Microsoft YaHei'">{{ order.orderTime }}</p>
        </div>
      </div>
      <!-- 支付方式-->
      <div class="order_line order_line_bordtr">
        <div class="order_lien_in">
          <h3 class="order_title">支付方式</h3>
        </div>
        <div class="order_lien_in">
          <p class="order_PStime" id="payMethod" style="font: 18px 'Microsoft YaHei'">{{ order.orderPayment }}</p>
        </div>
      </div>
      <!-- 商家编号-->
      <div class="order_line order_line_bordtr">
        <div class="order_lien_in">
          <h3 class="order_title">商家编号</h3>
        </div>
        <div class="order_lien_in">
          <p class="order_PStime" id="supplierId" style="font: 18px 'Microsoft YaHei'">{{ order.supplierId }}</p>
        </div>
      </div>
      <!--收货地址-->
      <div class="order_line">
        <div class="order_lien_in order_in">
          <h3 class="order_title">收货地址</h3>
        </div>
        <div class="order_lien_in"></div>
      </div>
      <div class="address_box">
        <p class="receiver_name">{{ order.receiverName }}</p>
        <p class="receiver_phone">{{ order.receiverPhone }}</p>
        <p class="receiver_address">{{ order.receiverAddress }}</p>
      </div>
      <!--商品清单-->
      <div class="order_line order_line_bordtr">
        <div class="order_lien_in">
          <h3 class="order_title">宠物清单</h3>
        </div>
        <div class="order_lien_in"></div>
      </div>
      <div class="order_line order_line_bordtr">
        <p class="order_price" style="margin-top: 20px;width: 200px;padding-left: 40px">宠物</p>
        <p class="order_price" style="margin-top: 20px;width: 200px;margin-left: 100px">金额</p>
      </div>
      <div class="order_items">
        <div class="order_item" v-for="item in order.orderItemDOList" :key="item.itemId">
          <p class="item_name">{{ item.name }}</p>
          <p class="item_price">{{ item.price }}</p>
        </div>
      </div>
      <!-- 总金额-->
      <div class="order_line order_line_bordtr">
        <div class="order_lien_in">
          <p class="order_price_11"><br>应付总额:</p>
        </div>
        <div class="order_price1">
          <p class="order_price_2">
            <span id="cost" style="font-size: 35px">{{ order.orderCost }}</span>元
          </p>
        </div>
      </div>
      <!-- 返回订单列表-->
      <div class="pay">
        <a href="/MyOrder" class="pay_a" id="order_submit">返回订单列表</a>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref, onMounted} from "vue";
import axios from "axios"
import { RouterLink } from "vue-router";

export default defineComponent({
  setup(){

    const orderId = getQueryVariable('orderId');
    //存储订单详情数据
    const order = ref({});
    onMounted(()=>{
      getDetails();
    })

    const getDetails = () =>{
      axios.get(`http://localhost:8080/jpetstore/orders/${orderId}`)
          .then(res =>{
            let data = res.data;
            order.value = data;
          })
          .catch(err =>{
            console.error(err)
          })
    }

    // 获取url参数
    const getQueryVariable = (variable) => {
      const query = window.location.search.substring(1);
      const vars = query.split('&');
      for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (pair[0] === variable) {
          return pair[1];
        }
      }
      return false;
    };
    return{
      order,
      RouterLink,
    }
  }
})
</script>

<style scoped>
@import "../../assets/css/orderSubmit.css";
</style>
