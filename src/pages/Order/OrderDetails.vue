<template>
  <div class="order_head">
    <div class="head_background">
      <div class="head_box">
        <a href="/jpetstore" class="head_left_a"><img src="../../assets/image/login/placeholder.png" alt="" class="head_left_p"></a>
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
          <p class="order_PStime" style="font: 18px 'Microsoft YaHei'">{{ orderId }}</p>
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
      <div class="address_box" style="margin-left: -700px">
        <p class="order_box_p"><label for="receiver_name">姓名</label><input style="text-align: center" type="text" id="receiver_name" name="receiver_name" v-model="order.receiverName" :disabled="true"></p>
        <p class="order_box_p"><label for="receiver_tel">联系方式</label><input style="text-align: center" type="tel" id="receiver_tel" name="receiver_tel" v-model="order.receiverPhone" :disabled="true"></p>
        <p class="order_box_p"><label for="receiver_adr">收货地址</label><input style="text-align: center" type="text" id="receiver_adr" name="receiver_adr" v-model="order.receiverAddress" :disabled="true"></p>
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
        <div class="order_line order_line_bordtr" v-for="item in order.orderItemDOList" :key="item.itemId">
          <div class="order_lien_in">
            <img class="order_price_tv" style="height: 40px" :src="item.itemImage" alt="">
            <p class="order_price" style="margin-top: 20px;width: 300px">{{item.productNameChinese}}/{{ item.itemSpecification }}</p>
          </div>
          <div class="order_lien_in">
            <p class="order_price_1" style="margin-top: 20px">{{item.itemPrice}} x {{item.itemQuantity}}</p>
          </div>
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
        <router-link to="/MyOrder" class="pay_a" id="order_submit">返回订单列表</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref, onMounted} from "vue";
import axios from "axios"
import { RouterLink } from "vue-router";

export default defineComponent({
  props: ['orderId'],
  setup(props){
    const orderId = ref(props.orderId);
    const order = ref({});

    //存储订单详情数据
    onMounted(()=>{
      getDetails();
    })

    const getDetails = () =>{
      axios.get(`http://localhost:8080/jpetstore/orders/${orderId.value}`)
          .then(res =>{
            order.value = res.data.data;
            for(let i=0; i< order.value.orderItemDOList.length;i++){
             order.value.orderItemDOList[i].itemImage = `http://localhost:8080/jpetstore/image/look/${ order.value.orderItemDOList[i].itemImage}`
            }
           
          })
          .catch(err =>{
            console.error(err)
          })
    }


    return{
      order,
      RouterLink
    }
  }
})
</script>

<style scoped>
@import "../../assets/css/orderSubmit.css";
</style>
