<template>
  <div class="order_head">
    <div class="head_background">
      <div class="head_box">
        <router-link to="/jpetstore"></router-link>
        <a class="head_left_a" href="/jpetstore">
          <img
              alt=""
              class="head_left_p"
              src="../../assets/image/login/placeholder.png"
          />
        </a>
        <h1 class="head_h1">确认订单</h1>
        <div class="head_right">
          <router-link to="/Myorder" class="head_right_in"
          >我的订单</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div class="order_body">
    <div class="order_body_background">
      <div class="order_line">
        <div class="order_lien_in order_in">
          <h3 class="order_title">收货地址</h3>
          <div class="order-address">
            <template v-if="!isEditMode">
              <p>{{ address.receiverName }}</p>
              <p>{{ address.receiverPhone }}</p>
              <p>{{ address.receiverAddress }}</p>
              <p>
                <button class="order_lien_in" @click="toggleEditMode">
                  编辑
                </button>
              </p>
            </template>
            <template v-else>
              <input
                  v-model="editedAddress.receiverName"
                  type="text"
                  placeholder="姓名"
              />
              <input
                  v-model="editedAddress.receiverPhone"
                  type="tel"
                  placeholder="联系方式"
              />
              <input
                  v-model="editedAddress.receiverAddress"
                  type="text"
                  placeholder="收货地址"
              />
              <p>
                <button class="order-btn" @click="saveAddress">保存</button>
                <button class="order-btn" @click="toggleEditMode">取消</button>
              </p>
            </template>
          </div>
        </div>

        <div class="order_line order_line_bordtr">
          <div class="order_lien_in">
            <h3 class="order_title">支付方式</h3>
          </div>
          <div class="order-payment">
            <p
                v-for="(option, index) in paymentOptions"
                :key="index"
                :class="{ active: payIndex === index }"
                @click="selectPayment(index)"
            >
              {{ option }}
            </p>
          </div>
        </div>
        <div class="order_line order_line_bordtr">
          <div class="order_lien_in">
            <h3 class="order_title">宠物清单</h3>
          </div>
          <div class="order-cart">
            <template v-for="item in cartList" :key="item.id">
              <div class="order-item">
                <p>{{ item.name }}</p>
                <p>{{ item.price }}元</p>
              </div>
            </template>
          </div>
          <div class="order_lien_in">
            <router-link to="/cart"
            ><span class="order_span_rigth" style="color: #ff6700"
            >返回购物车→</span
            ></router-link
            >
          </div>
          <div class="order_lien_in"></div>
        </div>

        <div id="order_item"></div>

        <div class="order_line order_line_bordtr">
          <div class="order_lien_in">
            <p class="order_price_11">
              <br />应付总额:<span class="order-cost">{{ cost }}</span
            >元
            </p>
          </div>
        </div>
        <div class="pay">
          <button
              class="order-btn"
              :style="{ background: btnBackground }"
              @click="placeOrder"
          >
            {{ btnText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const address = {
      receiverName: "",
      receiverPhone: "",
      receiverAddress: "",
    };
    const editedAddress = {
      receiverName: "",
      receiverPhone: "",
      receiverAddress: "",
    };

    const isEditMode = ref(false);
    const payIndex = ref(0);
    const cost = ref(0);
    const cartList = ref([]);
    const btnBackground = ref("");
    const btnText = ref("");

    onMounted(() => {
      const orders = JSON.parse(sessionStorage.getItem("orders"));
      let totalCost = 0;

      for (let i = 0; i < orders.length; i++) {
        totalCost += orders[i].total_cost;
      }

      cost.value = totalCost; // 将总费用赋值给cost变量
    });
    //保存地址
    const saveAddress = () => {
      if (
          editedAddress.receiverName &&
          editedAddress.receiverPhone &&
          editedAddress.receiverAddress
      ) {
        const data = {
          receiverName: editedAddress.receiverName,
          receiverPhone: editedAddress.receiverPhone,
          receiverAddress: editedAddress.receiverAddress,
        };
        axios
            .put("http://localhost:8080/jpetstore/user/info", data)
            .then((res) => {
              const resData = res.data;
              if (resData.code === 200) {
                address.receiverName = editedAddress.receiverName;
                address.receiverPhone = editedAddress.receiverPhone;
                address.receiverAddress = editedAddress.receiverAddress;
                toggleEditMode();
              } else {
                console.log("保存地址失败： ", resData.message);
              }
            })
            .catch((err) => {
              console.log("保存地址请求异常: ", err);
            });
      } else {
        //地址信息不完整
        console.log("地址信息不完整");
        showErrorMsg();
      }
    };

    const showErrorMsg = () => {
      btnText.value = "地址不能为空！";
      btnBackground.value = "red";

      setTimeout(() => {
        btnText.value = "结算";
        btnBackground.value = "#ff6700";
      }, 2000);
    };
    //切换编辑模式
    const toggleEditMode = () => {
      isEditMode.value = !isEditMode.value;
      if (isEditMode.value) {
        editedAddress.receiverName = address.receiverName;
        editedAddress.receiverPhone = address.receiverPhone;
        editedAddress.receiverAddress = address.receiverAddress;
      }
    };

    //支付方式
    const paymentOptions = ["微信支付", "支付宝", "货到付款"];
    const selectPayment = (index) => {
      payIndex.value = index;
    };
    const router = useRouter();
    //提交订单
    const placeOrder = () => {
      const data = {
        address: address,
        payment: paymentOptions[payIndex.value],
        cart: cartList.value,
        totalCost: cost.value,
      };
      axios
          .post("http://localhost:8080/jpetstore/order", data)
          .then((res) => {
            const resData = res.data;
            if (resData.code === 200) {
              // 处理下单成功的情况
              console.log("下单成功:", resData.message);
              router.push("/MyOrder"); // 跳转到我的订单页面
            } else {
              // 处理下单失败的情况
              console.log("下单失败:", resData.message);
            }
          })
          .catch((error) => {
            // 处理请求异常
            console.log("下单请求异常:", error);
          });
    };
    return {
      address,
      editedAddress,
      isEditMode,
      payIndex,
      cost,
      cartList,
      btnBackground,
      btnText,
      saveAddress,
      toggleEditMode,
      paymentOptions,
      selectPayment,
      placeOrder,
      router,
    };
  },
});
</script>

<style scoped>
@import "../../assets/css/orderSubmit.css";
</style>
