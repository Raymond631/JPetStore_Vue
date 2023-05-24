<template>
    <div class="wrap">
    <!-- 头部logo -->
    <header class="header-wrap">
        <div class="header-logo">
            <a href="/jpetstore/">
                <img src="../../assets/image/login/placeholder.png">
            </a>
        </div>
    </header>
    <!-- 主要内容 -->
    <section class="main-wrap">
        <div class="layout_panel">
            <div class="mian-content">
                <div class="nav_tabs" id="nav-tabs">
                    <a class="navtab-link now" href="javascript: void(0);">注册</a>
                </div>
                <div class="loginbox">
                    <div class="btn login_area">
                        <div action="/jpetstore/User/register" autocomplete="off" id="registerForm" method="post">
                            <input class="item_account" v-model="username" id="username" name="userId" placeholder="账号"
                                   type="text">
                            <div class="err_tip" id="name_repeat"></div>
                            <input class="item_account"  v-model="password" id="pwd" name="password" placeholder="密码"
                                   type="password">
                            <input class="item_account" v-model="comfirmPassword" id="password_repeat" name="password_repeat" placeholder="确认密码"
                                    type="password">
                            <input class="code_input" v-model="verificationCode" id="code" name="vCode" placeholder="验证码"
                                   type="text">
                            <a class="code_link">
                                <img :src="imgSrc" alt="验证码" class="code_img" id="verificationCode"
                                     @click="newVertification()">
                            </a>
                            <div class="err_tip" id="errer">
                                <span class="error-con" id="errorMessage"></span>
                            </div>
                            <button class="btnadpt item_account" @click="register">注册</button>
                        </div>
                        <div class="other_panel myclear">
                            <div class="links_area">
                                <router-link to="/login">已有账号？立即登录</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- 底部声明 -->
    <footer class="footer-wrap">
        <div class="myclear">
            <ul class="lang-select-list">
                <li><a class="current" href="javascript: void(0);">简体</a>|</li>
                <li><a href="javascript: void(0);">繁体</a>|</li>
                <li><a href="javascript: void(0);">English</a>|</li>
                <li><a href="javascript: void(0);">常见问题</a>|</li>
                <li><a href="javascript: void(0);">隐私政策</a></li>
            </ul>
        </div>
        <div class="footer-intro">
            中南大学版权所有
        </div>
    </footer>
</div>

    </template>
<script>
      import { defineComponent } from "vue"
      import axios from "axios"
      
      export default defineComponent({
          name: "register",
          data(){
              return {
                username:'',
                password:'',
                comfirmPassword:'',
                verificationCode:'',
                imgSrc:'',
              }
          },
          mounted: function () {
            this.newVertification()
          },
          methods: {
            newVertification(){
                let that = this;
                that.imgSrc = "http://localhost:8080/jpetstore/verificationCode?" + new Date().getMilliseconds();
            },

            register(){
                let that = this;
                let data = {
                    username: that.username,
                    password: that.password,
                    rePassword: that.comfirmPassword,
                    code: that.verificationCode
                };
                let config = {
                    url: "http://localhost:8080/jpetstore/user",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: data
                };

                axios(config)
                .then(function (response) {
                    sessionStorage.setItem("user", JSON.stringify('in'));
                    that.$router.push('/')
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
          },
      })
  </script>

  
<style scoped>
@import '../../assets/css/Login.css';

</style>