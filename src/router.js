//导入vue
import Vue from "vue"
//导入vuerouter
import VueRouter from "vue-router"
//use一下
Vue.use(VueRouter)
//导入组件
import login from "./components/login.vue"
import index from "./components/index.vue"
import users from './components/users.vue'
import roles from './components/roles.vue'
import rights from './components/rights.vue'
import goods from './components/goods.vue'
import params from './components/params.vue'
import categories from './components/categories.vue'
import orders from './components/orders.vue'
import reports from './components/reports.vue'

//路由规则
const routes = [
    {
        path:'/login',
        component:login
    },
    {
        path:'/',
        component:index,
        //整合嵌套路由
        children:[
            {
                path:'users',
                component:users
            },
            {
                path:'roles',
                component:roles
            },
            {
                path:'rights',
                component:rights
            },
            {
                path:'goods',
                component:goods
            },
            {
                path:'params',
                component:params
            },
            {
                path:'categories',
                component:categories
            },
            {
                path:'orders',
                component:orders
            },
            {
                path:'reports',
                component:reports
            },
            
        ]
    }
]
//实例化路由对象
const router = new VueRouter({
    routes
})
//暴露出去
export default router