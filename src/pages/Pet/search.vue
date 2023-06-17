<template>
  <header class="site-header site-mini-header">
    <div class="container">
      <!--logo -->
      <div class="header-logo">
        <router-link to="/" class="logo ir">JPetStore</router-link>
      </div>
      <!-- 标题 -->
      <div class="header-title has-more" id="J_miniHeaderTitle">
        <h2>搜索结果</h2>
        <p>点击宠物名称查看详情</p>
      </div>
      <div class="topbar-info" id="J_userInfo">
        <router-link to="/" class="link link-order" rel="nofollow">返回首页</router-link>
      </div>
    </div>
  </header>
  <!-- 商品内容 -->
  <section class="page-main">
    <div class="container">
      <div class="cart-goods-list" id="J_cartListGoods">
        <div class="list-head myclear" data-checked="false">
          <div class="col col-price" style="margin-left: 60px">编号</div>
          <div class="col col-price" style="margin-left: 116px">图片</div>
          <div class="col col-price" style="margin-left: 68px">中文名</div>
          <div class="col col-price" style="margin-left: 150px">英文名</div>
        </div>
        <div id="wapper">
          <div class="list-body myclear" data-checked="false" v-for="pet in pets" :key="pet.productId"
               @click="getPetDetails(pet)">
            <div class="col col-name" style="padding-left: 100px;width: 250px">{{ pet.productId }}</div>
            <div class="col col-price" style="width: 200px"><img :src="pet.productImage " style="height: 80px"></div>
            <div class="col col-total">{{ pet.productNameChinese }}</div>
            <div class="col col-price" style="width: 450px">{{ pet.productNameEnglish }}</div>
          </div>
        </div>
      </div>
      <h2 class="xm-recommend-title"><span id="J_span">已经到底啦！</span></h2>
    </div>
  </section>
</template>

<script>
import {defineComponent} from "vue"
import axios from "axios"

export default defineComponent({
  name: "search",
  data() {
    return {
      pets: []
    }
  },
  mounted: function () {
    this.ready()
  },
  methods: {
    ready() {
      let that = this;
      let keyword = JSON.parse(sessionStorage.getItem("keyword"));
      console.log(keyword)
      let config = {
        url: "/api/jpetstore/pets/search?keyword=" + encodeURIComponent(keyword),
        method: "GET",
        headers: {},
      };

      axios(config)
          .then(function (response) {
            console.log(response.data)
            that.pets = response.data.data
            that.pets.forEach(function (pet) {
              pet.productImage = `/api/jpetstore/image/look/${pet.productImage}`
            })
          })
          .catch(function (error) {
            console.log(error);
          });
    },

    getPetDetails(pet) {
      let that = this;
      console.log(pet)
      sessionStorage.setItem("pet", JSON.stringify(pet.productId));
      that.$router.push('/details')
    }
  }
})
</script>

<style scoped>
@import '../../assets/css/shopping.css';
</style>