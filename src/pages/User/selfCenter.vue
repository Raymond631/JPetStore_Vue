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
                        <a class="navtab-link now" href="javascript: void(0);">修改密码</a>
                    </div>
                    <div class="loginbox">
                        <div class="btn login_area">
                            <div>
                                <input class="item_account" id="password_old" placeholder="原密码" v-model="password_old"
                                       required="required" type="password">
                                <div class="err_tip" id="name_repeat"></div>
                                <input class="item_account" id="password_new" placeholder="新密码" v-model="password_new"
                                       required="required" type="password">
                                <input class="item_account" id="password_repeat" name="password_repeat" v-model="password_repeat"
                                       placeholder="确认密码"
                                       required="required" type="password">
                                <input class="code_input" id="code" placeholder="验证码" v-model="verificationCode"
                                       required="required"
                                       type="text">
                                <a class="code_link">
                                    <img :src="imgSrc" alt="验证码" class="code_img" id="verificationCode"
                                        @click="newVertification()">
                                </a>
                                <div class="err_tip" id="errer"></div>
                                <button class="btnadpt item_account" @click="changePassword()">保存</button>
                            </div>
                            <div class="other_panel myclear">
                                <div class="links_area">
                                    <a href="/jpetstore/">返回首页</a>
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
import {defineComponent} from "vue"
import axios from "axios"

export default defineComponent({
    name: "selfCenter",
    data() {
        return {
            password_old:'',
            password_new:'',
            password_repeat:'', 
            verificationCode:'',
            imgSrc:'',
        }
    },
    mounted: function(){
        this.newVertification()
    },
    methods: {
        newVertification() {
            let that = this;
            that.imgSrc = "/api/jpetstore/verificationCode?" + new Date().getMilliseconds();
        },
        changePassword(){
            let that = this;
            if(password_old!=''||password_new!=''||password_repeat!=''){
                let data = {
                    oldPassword: that.password_old,
                    password: that.password_new,
                    rePassword: that.password_repeat,
                    code: that.verificationCode
            };
            let config = {
                url: "/api/jpetstore/user/auth",
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    //in表示登录
                    if (response.data.code === 200) {
                        alert('修改成功')
                        that.newVertification()
                        that.verificationCode=''
                    } else {
                        alert(response.data.data);
                        that.newVertification()
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            else{
                alert('输入不能为空')
            }
        },
    },
})
</script>


<style scoped>
@import '../../assets/css/Login.css';

</style>