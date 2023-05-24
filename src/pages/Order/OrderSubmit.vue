<template>
  <div class="order_head">
    <div class="head_background">
      <div class="head_box">
        <a class="head_left_a" href="/jpetstore">
          <img
              alt=""
              class="head_left_p"
              src="../../assets/image/login/placeholder.png"
          />
        </a>
        <h1 class="head_h1">确认订单</h1>
        <div class="head_right">
          <router-link to="/MyOrder" class="head_right_in">我的订单</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="order_body">
    <div class="order_body_background">
      <div class="order_line">
        <div class="order_lien_in order_in">
          <h3 class="order_title">收货地址</h3>
        </div>
        <div class="order_lien_in">
          <a
              class="order_lien_in"
              href="javascript:void(0)"
              @click="toggleEditMode"
          >
            <span v-if="!isEditMode">编辑地址</span>
            <span v-else>取消编辑</span>
          </a>
        </div>
        <div class="order_lien_in"></div>
      </div>
      <div class="order_box" id="adr_list">
        <a class="order_box_in" id="address_box" v-if="!isEditMode">
          <p class="order_box_p"><label for="receiver_name">姓名</label><input style="text-align: center" type="text" id="receiver_name" name="receiver_name" v-model="address.receiverName" :disabled="!isEditMode"></p>
          <p class="order_box_p"><label for="receiver_tel">联系方式</label><input style="text-align: center" type="tel" id="receiver_tel" name="receiver_tel" v-model="address.receiverPhone" :disabled="!isEditMode"></p>
          <p class="order_box_p"><label for="receiver_adr">收货地址</label><input style="text-align: center" type="text" id="receiver_adr" name="receiver_adr" v-model="address.receiverAddress" :disabled="!isEditMode"></p>

        </a>
      </div>

      <div class="order_line order_line_bordtr">
        <div class="order_lien_in">
          <h3 class="order_title">支付方式</h3>
        </div>
        <p
            class="order_PStime"
            v-for="(option, index) in paymentOptions"
            :key="index"
            :class="{ selected: index === payIndex }"
            @click="selectPayment(index)"
        >
          {{ option }}
        </p>
        <div class="order_lien_in"></div>
      </div>
      <div class="order_line order_line_bordtr">
        <div class="order_lien_in">
          <h3 class="order_title">宠物清单</h3>
        </div>
        <div class="order_lien_in">
          <a href="/cart">
            <span class="order_span_rigth" style="color: #ff6700"
            >返回购物车→</span
            >
          </a>
        </div>
        <div class="order_lien_in"></div>
      </div>

      <div id="order_item"></div>

      <div class="order_line order_line_bordtr">
        <div class="order_lien_in">
          <p class="order_price_11"><br />应付总额:</p>
        </div>
        <div class="order_price1">
          <p class="order_price_2">
            <span id="cost" style="font-size: 35px">{{ cost }}</span
            >元
          </p>
        </div>
      </div>
      <div class="pay">
        <a
            class="pay_a"
            href="javascript:void(0);"
            id="order_submit"
            @click="placeOrder"
        >
          结算
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { RouterLink,useRouter  } from "vue-router";

export default defineComponent({
  setup() {
    const address = ref({
      receiverName: "",
      receiverPhone: "",
      receiverAddress: "",
    });

    const editedAddress = ref({
      receiverName: "",
      receiverPhone: "",
      receiverAddress: "",
    });

    const isEditMode = ref(false);
    const payIndex = ref(0);
    const cost = ref(0);
    const cartList = ref([]);
    const btnBackground = ref("");
    const btnText = ref("");

    const router = useRouter();

    onMounted(() => {
      getAddress();

      const orders = JSON.parse(sessionStorage.getItem("orders"));
      let totalCost = 0;

      for (let i = 0; i < orders.length; i++) {
        totalCost += orders[i].total_cost;
      }

      cost.value = totalCost;
    });

    const getAddress = () => {
      axios
          .get("http://localhost:8080/jpetstore/user/info")
          .then((res) => {
            const resData = res.data;
            console.log(resData.data)
            if (resData.code === 200) {
              address.value = resData.data;
            } else {
              console.log("获取地址失败:", resData.message);
            }
          })
          .catch((error) => {
            console.log("获取地址请求异常:", error);
          });
    };

    const saveAddress = () => {
      if (
          editedAddress.value.receiverName &&
          editedAddress.value.receiverPhone &&
          editedAddress.value.receiverAddress
      ) {
        const data = {
          receiverName: editedAddress.value.receiverName,
          receiverPhone: editedAddress.value.receiverPhone,
          receiverAddress: editedAddress.value.receiverAddress,
        };
        axios
            .put("http://localhost:8080/jpetstore/user/info", data)
            .then((res) => {
              const resData = res.data;
              if (resData.code === 200) {
                address.value.receiverName = editedAddress.value.receiverName;
                address.value.receiverPhone = editedAddress.value.receiverPhone;
                address.value.receiverAddress =
                    editedAddress.value.receiverAddress;
                toggleEditMode();
              } else {
                console.log("保存地址失败:", resData.message);
              }
            })
            .catch((error) => {
              console.log("保存地址请求异常:", error);
            });
      } else {
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

    const toggleEditMode = () => {
      isEditMode.value = !isEditMode.value;
      if (isEditMode.value) {
        editedAddress.value.receiverName = address.value.receiverName;
        editedAddress.value.receiverPhone = address.value.receiverPhone;
        editedAddress.value.receiverAddress = address.value.receiverAddress;
      } else {
        editedAddress.value.receiverName = "";
        editedAddress.value.receiverPhone = "";
        editedAddress.value.receiverAddress = "";
      }
    };

    const paymentOptions = ["微信支付", "支付宝", "货到付款"];

    const selectPayment = (index) => {
      payIndex.value = index;
    };

    const placeOrder = () => {
      const data = {
        address: address.value,
        payment: paymentOptions[payIndex.value],
        cart: cartList.value,
        totalCost: cost.value,
      };
      axios
          .post("http://localhost:8080/jpetstore/order", data)
          .then((res) => {
            const resData = res.data;
            if (resData.code === 200) {
              console.log("下单成功:", resData.message);
              router.push("/MyOrder");
            } else {
              console.log("下单失败:", resData.message);
            }
          })
          .catch((error) => {
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
      RouterLink,
    };
  },
});
</script>


<style scoped>
@import "../../assets/css/orderSubmit.css";
</style>
