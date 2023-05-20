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
                    <a class="navtab-link now" href="javascript: void(0);">登录</a>
                </div>
                <div class="loginbox">
                    <div class="btn login_area">
                        <div autocomplete="off" method="post">
                            <input class="item_account" id="username" v-model="username" name="userId" placeholder="账号"
                                   type="text">
                            <input class="item_account" id="pwd" v-model="password" name="password" placeholder="密码"
                                   type="password">
                            <input class="code_input" id="code" v-model="verificationCode" name="vCode" placeholder="验证码"
                                   type="text">
                            <a class="code_link">
                                <img alt="验证码" class="code_img" id="verificationCode"
                                     onclick="newVerification()" src="{{ imgSrc }}">
                            </a>
                            <div class="err_tip" id="errer">
                                <span class="error-con" id="errorMessage"></span>
                            </div>
                            <button class="btnadpt item_account" onclick="login()">登录</button>
                        </div>
                        <div class="other_panel myclear">
                            <div class="links_area">
                                <router-link to="/register">没有账号？立即注册</router-link>
                            </div>
                            <div class="other_login_type">
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
          name: "login",
          data(){
              return {
                username:'',
                password:'',
                verificationCode:'',
                imgSrc:''
              }
          },
          methods: {
            newVerification(){
                let that = this;
                that.imgSrc = "http://localhost:8080/jpetstore/verificationCode?" + new Date().getMilliseconds();
            },

            login(){
                let that = this;
                let verificationCodeID = getCookie('CaptchaCode');
                RemoveCookie('CaptchaCode');
                let data = {
                    username: that.username,
                    password: that.password,
                    id: verificationCodeID,
                    code: that.verificationCode
                };
                let config = {
                    url: "http://localhost:8080/jpetstore/token",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: data
                };

                axios(config)
                .then(function (response) {
                    that.$router.push('/')
                })
                .catch(function (error) {
                    console.log(error);
                });
            },

            getCookie(cname) {
                let name = cname + "=";
                let ca = document.cookie.split(";");
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i].trim();
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
            },

            RemoveCookie(cookieName) {
                let cookies = document.cookie.split(";");
                for (let i = 0; i < cookies.length; i++) {
                    if (cookies[i].indexOf(" ") == 0) {
                        cookies[i] = cookies[i].substring(1);
                    }
                    if (cookies[i].indexOf(cookieName) == 0) {
                        let exp = new Date();
                        exp.setTime(exp.getTime() - 60 * 1000);
                        document.cookie = cookies[i] + ";expires=" + exp.toUTCString();
                        break;
                    }
                }
            }
          },
      })
  </script>

  
<style scoped>
@import '../../assets/css/Login.css';

</style>