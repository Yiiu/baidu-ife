import vue from "vue";
import Router from "vue-router";
import data from './data';             // app

import App from './components/app';             // app
import List from './components/list';               // 列表页
import Home from './components/home';      // 主页
import No from './components/404';          // 404界面
import New from './components/new';          // 404界面


vue.use(Router);
// 创建新实例
const router = new Router(); 
router.map({
    "/" : {
        name:"Home",
        component : Home
    },
    "/404": {
        name: "404",
        component: No
    },
    "/list" : {
        name: "list",
        component : List
    },
    "/new" : {
        name: "new",
        component : New
    }
})
router.redirect({
    "*" : "/404"
})
router.start(App, '#app');    