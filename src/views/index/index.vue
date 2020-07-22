<template>
    <div class="index">
        <div class="index-header">
            <Menu
                mode="horizontal"
                theme="light"
                active-name="/"
                @on-select="goToView"
            >
                <div class="index-header-logo"></div>
                <div class="index-header-nav">
                    <MenuItem name="/">
                        <Icon type="ios-home"></Icon>
                        首页
                    </MenuItem>
                    <MenuItem name="新闻">
                        <Icon type="ios-list-box"></Icon>
                        新闻
                    </MenuItem>
                    <MenuItem name="Blog">
                        <Icon type="ios-paper"></Icon>
                        博客
                    </MenuItem>
                    <MenuItem name="留言板">
                        <Icon type="ios-text"></Icon>
                        留言板
                    </MenuItem>
                    <MenuItem name="Login">
                        <Icon type="md-person"></Icon>
                        登录
                    </MenuItem>
                </div>
            </Menu>
        </div>
        <div class="index-content">
            <router-view/>
        </div>
        <div class="index-layout-footer-center">2020 &copy; IMU NetGroup</div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
        };
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        goToView(view) {
            // 导航栏跳转
            this.$router.push(view);
        }
    },
};
</script>

<style scoped>
.index {
    display: flex;
    flex-direction: column;

    min-height: 100%;

    border-radius: 4px;

    background: #f5f7f9;
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

    border-radius: 3px;
    width: 100px;
    height: 30px;

    background: #5b6270;
}

.index-header-nav {
    margin: 0 auto;
    margin-right: 5rem;

    width: 31.875rem;
}

.index-content {
    flex: 1;

    padding: 0 50px;
    padding-left: 20%;
    padding-right: 20%;
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
