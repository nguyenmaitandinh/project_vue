import { createRouter, createWebHistory } from "vue-router";
import home from "@/components/Home.vue";
import product from "@/components/product.vue";
import about from "@/components/about.vue";
import contac from "@/components/contac.vue";
import error from "@/components/error.vue";
import shoppingcart from "@/components/shopping-cart.vue"
import login from "@/components/login.vue";
import register from "@/components/register .vue";



const routes = [
    { path: '/', component: home },
    {path:'/product',component: product},
    {path:'/about',component: about},
    { path: '/contac', component: contac },
    {path: '/:pathMatch(.*)*',component: error},
    {path:'/shopping-cart',component:shoppingcart},
    {path:'/login',component:login},
    {path:'/register',component:register},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
