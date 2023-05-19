import { createRouter, createWebHashHistory } from "vue-router";
  

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
      {
        path:'/', 
        name: "index",
        component: () =>
            import ('../pages/Pet/index.vue'),   
      },
      { 
        path:'/login',
        name: "login",
        component: () =>
            import ('../pages/User/login.vue'),
      },
      { 
        path:'/register',
        name: "register",
        component: () =>
            import ('../pages/User/register.vue'),
      },
      { 
        path:'/selfCenter',
        name: "selfCenter",
        component: () =>
            import ('../pages/User/selfCenter.vue'),
      }, 
      { 
        path:'/details', 
        name: "details",
        component: () =>
            import ('../pages/Pet/details.vue'),   
      },
    ],
})
export default router;