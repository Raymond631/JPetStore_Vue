import { createRouter, createWebHashHistory } from "vue-router";
  

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
      { 
        //path属性是url的地址
        path:'/', 
        //component属性就是显示的组件名称
        name: "index",
        component: () =>
            import ('./pages/Pet/index.vue'),   
      },
      { 
        //path属性是url的地址
        path:'/login',
        //component属性就是显示的组件名称
        name: "login",
        component: () =>
            import ('./pages/User/login.vue'),
      } 
    ],
})
export default router;