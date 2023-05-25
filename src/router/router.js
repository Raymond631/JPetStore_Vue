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
      {
        path:'/MyOrder',
        name: "MyOrder",
        component: () =>
            import ('../pages/Order/MyOrder.vue'),
      },
      {
        path:'/OrderDetails',
        name: "OrderDetails",
        component: () =>
            import ('../pages/Order/OrderDetails.vue'),
            props:(route)=>({ orderId: route.query.orderId})
      },
      {
        path:'/OrderSubmit',
        name: "OrderSubmit",
        component: () =>
            import ('../pages/Order/OrderSubmit.vue'),
      },
      { 
        path:'/search', 
        name: "search",
        component: () =>
            import ('../pages/Pet/search.vue'),   
      },
      { 
        path:'/cart', 
        name: "cart",
        component: () =>
            import ('../pages/Cart/cart.vue'),   
      },
      { 
        path:'/selfCenter', 
        name: "selfCenter",
        component: () =>
            import ('../pages/User/selfCenter.vue'),   
      },
    ],
})
export default router;
