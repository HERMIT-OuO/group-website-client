import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Index",
        redirect: "/home",
        component: () => import("@/views/index/index"),
        children: [
            {
                path: "/home",
                name: "Home",
                component: () => import("@/views/home/index"),
                meta: {
                    title: "首页",
                },
            },
            {
                path: "/peoplelist",
                name: "PeopleList",
                component: () => import("@/views/peopleList/index"),
                meta: {
                    title: "小组成员",
                },
            },
            {
                path: "wordsList/:kind",
                name: "WordsList",
                component: () => import("@/views/wordsList/index"),
            },
            {
                path: "wordspage/:id",
                name: "WordsPage",
                component: () => import("@/views/wordsPage/index"),
                meta: {
                    title: "文章",
                },
            },
            {
                path: "messageboard",
                name: "MessageBoard",
                component: () => import("@/views/messageboard/index"),
                meta: {
                    title: "留言板",
                },
            },
            {
                path: "postWords",
                name: "PostWords",
                component: () => import("@/views/postWords/index"),
                meta: {
                    title: "发布文章",
                },
            },
            {
                path: "personwords",
                name: "PersonWords",
                component: () => import("@/views/personWords/index"),
                meta: {
                    title: "我的文章",
                },
            },
            {
                path: "personinfo",
                name: "PersonInfo",
                component: () => import("@/views/personInfo/index"),
                meta: {
                    title: "我的信息",
                },
            },
            {
                path: "borrowequipment",
                name: "BorrowEquipment",
                component: () => import("@/views/borrowEquipment/index"),
                meta: {
                    title: "设备借用",
                },
            },
            {
                path: "personpage",
                name: "PersonPage",
                component: () => import("@/views/personPage/index"),
                meta: {
                    title: "成员信息",
                },
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/index"),
        meta: {
            title: "登录",
        },
    },
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title + " - 内蒙古大学网络组";
    } else if (to.params.kind) {
        document.title = to.params.title + " - 内蒙古大学网络组";
    } else {
		document.title = "内蒙古大学网络组";
	}
    next();
});

export default router;
