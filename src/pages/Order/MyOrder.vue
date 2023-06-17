<template>
  <!-- 头部 -->
  <header class="site-header site-mini-header">
    <div class="container">
      <!--logo -->
      <div class="header-logo">
        <router-link to="/" class="logo ir"></router-link>
      </div>
      <!-- 标题 -->
      <div class="header-title has-more" id="J_miniHeaderTitle">
        <h2>我的订单</h2>
        <p>点击订单编号查看详情</p>
      </div>
      <div class="topbar-info" id="J_userInfo">
        <router-link to="/cart" class="link link-order">我的购物车</router-link>
      </div>
    </div>
  </header>
  <!-- 商品内容 -->
  <section class="page-main">
    <div class="container">
      <div class="cart-goods-list" id="J_cartListGoods">
        <div class="list-body myclear" v-for="order in orders" :key="order.orderId">
          <div class="col col-price" style="width: 300px">
            <router-link
                :to="`/OrderDetails?orderId=${order.orderId}`"
                class="order_PStime"
                style="font: 18px 'Microsoft YaHei'"
            >{{ order.orderId }}</router-link
            >
          </div>
          <div class="col col-name" style="padding-left: 20px; width: 300px">
            {{ order.orderTime }}
          </div>
          <div class="col col-total" style="margin-left: 80px">
            {{ order.orderCost }}
          </div>
          <div class="orderStatus">
            <div
                v-if="order.status === 2"
                class="col col-price"
                style="width: 180px"
            >
              <button @click="confirmReceipt(order.orderId)">
                {{ statusTransfer(order.status) }}
              </button>
            </div>
            <div v-else class="col col-price" style="width: 180px">
              <div v-html="statusTransfer(order.status)"></div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="xm-recommend-title"><span id="J_span">已经到底啦！</span></h2>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import { RouterLink } from 'vue-router';

export default defineComponent({
  setup() {
    const orders = ref([]);
    const fetchOrders = () => {

      axios
          .get("/api/jpetstore/orders")
          .then((res) => {
            orders.value = res.data.data;
            console.log(orders.value)
          })
          .catch((err) => {
            console.error(err);

          });
    };

    const confirmReceipt = (orderId) => {
      axios
          .put(`/api/jpetstore/orders/${orderId}`)
          .then((res) => {
            if (res.data.code === 200) {
              const order = orders.value.find((o) => o.orderId === orderId);
              if (order) {
                order.status = 2;
              }
            } else console.error(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
    };

    fetchOrders();
    const statusTransfer = (status) => {
      switch (status) {
        case 1:
          return '<span style="color: blue">未发货</span>';
        case 2:
          return '确认收货';
        case 3:
          return '<span style="color: forestgreen">未发货</span>';
        case 5:
          return '<span style="color: forestgreen">未发货</span>';
      }
    };
    return {
      orders,
      fetchOrders,
      confirmReceipt,
      RouterLink,
      statusTransfer
    };
  },
});
</script>

<style scoped>
@import "../../assets/css/shopping.css";
</style>
