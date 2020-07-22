import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: ()=>import("@/views/index/index"),
    children: [
      {
        path: '/',
        name: 'Home',
        component: ()=>import("@/views/home/index"),
        meta: {
          title: "首页",
        }
      },
      {
        path: 'blog',
        name: 'Blog',
        component: ()=>import("@/views/blog/index"),
        meta: {
          title: "博客",
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import("@/views/login/index"),
    meta: {
      title: "登录",
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title + ' - 内蒙古大学网络组';
  }
  next()
})

export default router
