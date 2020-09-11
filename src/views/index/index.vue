<template>
    <div class="index">
        <div class="index-header">
            <Menu :mode="menuMode" theme="light" :active-name="getIndex">
                <div class="index-header-logo"></div>
                <div class="index-header-nav">
                    <div v-show="isPc">
                        <MenuItem name="Home" to="/home">
                            <Icon type="ios-home"></Icon>
                            首页
                        </MenuItem>
                        <Submenu name="WordsList">
                            <template slot="title">
                                <Icon type="ios-paper" />
                                栏目
                            </template>
                            <MenuItem
                                name="news"
                                :to="{
                                    name: 'WordsList',
                                    params: { kind: 'news', title: '动态' },
                                }"
                                >动态</MenuItem
                            >
                            <MenuItem
                                name="blog"
                                :to="{
                                    name: 'WordsList',
                                    params: { kind: 'blog', title: '博客' },
                                }"
                                >博客</MenuItem
                            >
                        </Submenu>
                        <MenuItem name="people" to="/peoplelist">
                            <Icon type="ios-people"></Icon>
                            小组成员
                        </MenuItem>
                        <MenuItem name="MessageBoard" to="/MessageBoard">
                            <Icon type="ios-text"></Icon>
                            留言板
                        </MenuItem>
                        <MenuItem name="Login" v-show="loginFlag === false">
                            <Icon type="md-person"></Icon>
                            登录
                        </MenuItem>
                        <MenuItem name="Login" v-show="loginFlag === true">
                            <div @click="drawerFlag = true">
                                <Icon
                                    type="md-person"
                                    style="margin-right:6px;"
                                ></Icon>
                                Admin
                            </div>
                        </MenuItem>
                    </div>
                    <Dropdown v-show="!isPc">
                        <Icon type="md-menu" />
                        <DropdownMenu slot="list">
                            <DropdownItem
                                ><Icon type="ios-home"></Icon>
                                首页</DropdownItem
                            >
                            <DropdownItem
                                ><Icon type="ios-list-box"></Icon>
                                新闻</DropdownItem
                            >
                            <DropdownItem>
                                <Icon type="ios-paper"></Icon>
                                博客</DropdownItem
                            >
                            <DropdownItem
                                ><Icon type="ios-text"></Icon>
                                留言板</DropdownItem
                            >
                            <DropdownItem divided v-show="loginFlag === false"
                                ><Icon type="md-person"></Icon>
                                登录</DropdownItem
                            >
                            <DropdownItem divided v-show="loginFlag === true">
                                <div @click="drawerFlag = true">
                                    <Icon
                                        type="md-person"
                                        style="margin-right:6px;"
                                    ></Icon>
                                    Admin
                                </div></DropdownItem
                            >
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Menu>
        </div>

        <Drawer
            :width="300"
            :closable="false"
            :mask-style="drawerStyle"
            v-model="drawerFlag"
        >
            <!-- 个人中心 -->
            <div class="index-drawer">
                <div class="index-drawer-title">个人中心</div>
                <Divider />
                <div class="index-drawer-flex-row">
                    <!-- 用户信息 -->
                    <!-- <Avatar class="blogpage-row-right-author-img" size="40">Admin</Avatar> -->
                    <img
                        class="blogpage-row-right-author-img"
                        src="../../assets/user-default.png"
                        alt="author"
                    />
                    <div class="index-drawer-flex-col">
                        <div class="blogpage-row-right-author-name">Admin</div>
                        <div class="blogpage-row-right-author-email">
                            test@test.com
                        </div>
                    </div>
                </div>
                <CellGroup @on-click="cellClick">
                    <Cell name="postWords">
                        <div class="index-drawer-cell">
                            <Icon size="22" type="md-create" />
                            <span>发布文章</span>
                        </div>
                    </Cell>
                    <Cell name="personWords">
                        <div class="index-drawer-cell">
                            <Icon size="22" type="md-list-box" />
                            <span>我的文章</span>
                        </div>
                    </Cell>
                    <Cell name="personInfo">
                        <div class="index-drawer-cell">
                            <Icon size="22" type="md-person" />
                            <span>我的信息</span>
                        </div>
                    </Cell>
                    <Cell name="groupShare">
                        <div class="index-drawer-cell">
                            <Icon size="22" type="md-share" />
                            <span>组内分享</span>
                        </div>
                    </Cell>
                    <Cell name="borrowEquipment">
                        <div class="index-drawer-cell">
                            <Icon size="22" type="md-flask" />
                            <span>设备借用</span>
                        </div>
                    </Cell>
                    <Cell name="adminSystem">
                        <div class="index-drawer-cell">
                            <Icon size="22" type="md-settings" />
                            <span>管理系统</span>
                        </div>
                    </Cell>
                    <Cell name="logOut">
                        <div class="index-drawer-cell">
                            <Icon size="22" type="md-log-out" />
                            <span>退出登录</span>
                        </div>
                    </Cell>
                </CellGroup>
            </div>
        </Drawer>

        <div class="index-content">
            <router-view />
        </div>

        <div class="index-layout-footer-center">
            Copyright &copy; 2020 IMU NetGroup
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    inject: ["reload"],
    data() {
        return {
            menuMode: "horizontal",
            loginFlag: true,
            drawerFlag: false,
            drawerStyle: {
                backgroundColor: "transparent",
            },
            isPc: true,
        };
    },
    computed: {
        getIndex() {
            if (this.$route.name === "WordsList") {
                return this.$route.params.kind;
            } else {
                return this.$route.name;
            }
        },
    },
    created() {},
    mounted() {
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
            //移动端
            //TODO
            this.isPc = false;
        }
    },
    methods: {
        isPC() {
            //是否为PC端
            var userAgentInfo = navigator.userAgent;
            var Agents = [
                "Android",
                "iPhone",
                "SymbianOS",
                "Windows Phone",
                "iPad",
                "iPod",
            ];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        },
        goToView(view) {
            // 导航栏跳转
            this.$router.push({ name: view });
        },
        logOut() {
            // 登出
            const that = this;
            that.loginFlag = false;
            that.reload();
        },
        cellClick(name) {
            switch (name) {
                case "logOut":
                    this.logOut();
                    break;
                case "postWords":
                    this.$router.push({ name: "PostWords" });
                    // this.reload();
                    break;
                case "personWords":
                    this.$router.push({ name: "PersonWords" });
                    break;
                case "personInfo":
                    this.$router.push({ name: "PersonInfo" });
                    break;
                case "borrowEquipment":
                    this.$router.push({ name: "BorrowEquipment" });
                    break;
                case "groupShare":
                    this.$router.push({
                        name: "WordsList",
                        params: { kind: "share" },
                    });
            }
        },
    },
};
</script>

<style scoped>
.index {
    display: flex;
    flex-direction: column;

    min-height: 100%;

    border-radius: 4px;

    background: #f4f4f4;
}

.index-header {
    /* flex: 0 0 auto; */

    background-color: #f5f7f9;
}
.index-header-logo {
    float: left;

    position: relative;
    top: 15px;
    left: 5rem;

    width: 100px;
    height: 30px;

    background: #5b6270;
}

@media screen and (max-width: 800px) {
    .index-header-logo {
        left: 2rem;
    }
}

.index-header-nav {
    /* margin: 0 auto;
    margin-right: 5rem; */

    position: absolute;
    right: 5rem;

    /* width: 31.875rem; */
}

/deep/ .ivu-menu-submenu-title-icon {
    margin-right: 0 !important;
}

@media screen and (max-width: 800px) {
    .index-header-nav {
        position: absolute;
        right: 2rem;
    }
}

.index-drawer {
    text-align: left;
}

.index-drawer-flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 2rem;
    padding-left: 1rem;
}

.index-drawer-flex-col {
    display: flex;
    flex-direction: column;
    align-items: left;
}

.index-drawer-title {
    margin-left: 1rem;

    font-size: 16px;
    font-weight: bold;

    color: #464c5b;
}

.blogpage-row-right-author-img {
    /* 头像 */
    margin-right: 1rem;

    border: 1px solid #dcdee2;
    border-radius: 50%;
    width: 20%;

    object-fit: cover;
    object-position: center;
}

.blogpage-row-right-author-name {
    font-size: 16px;
    font-weight: bold;

    color: #464c5b;
}

.blogpage-row-right-author-email {
    font-size: 14px;
}

.index-drawer-cell {
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;

    font-size: 14px;
}

.index-drawer-cell i {
    margin-right: 0.5rem;
}

.index-content {
    flex: 1;

    max-width: 1120px;
    width: 100%;

    margin: 0 auto;
}

@media screen and (max-width: 1119px) {
    .index-content {
        width: 90%;
    }
}

.index-content-carousel {
    margin-top: 1rem;
}

.index-content-blog {
    margin-top: 3rem;
}

.index-content-blog-title {
    margin-bottom: 1rem;

    font-size: 18px;
    font-weight: bold;
    text-align: center;

    color: #464c5b;
}

.index-content-blog-card {
    margin-bottom: 0.5rem;
}

.index-content-blog-card-div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    padding-top: 0.5rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
}

.index-content-blog-card-title {
    margin-bottom: 0.5rem;

    font-size: 16px;
    font-weight: bold;

    color: #464c5b;
}

.index-content-blog-card-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.index-content-blog-card-author {
    margin-bottom: 0.5rem;

    font-weight: bold;
    line-height: 20px;

    color: #464c5b;
}

.index-content-blog-card-time {
    color: #464c5b;
}

.index-layout-footer-center {
    /* flex: 0 0 auto; */
    margin-top: 3rem;

    height: 5rem;

    line-height: 5rem;
    text-align: center;
}
</style>
