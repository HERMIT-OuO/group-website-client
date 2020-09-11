<template>
    <div id="app">
        <router-view v-if="isRouterAlive" />
    </div>
</template>

<script>
export default {
    name: "app",
    provide() {
        return {
            reload: this.reload,
        };
    },
    data() {
        return {
            isRouterAlive: true,
        };
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(function() {
                this.isRouterAlive = true;
            });
        },
    },
};
</script>

<style>
html,
body,
#app {
    height: 100vh;

    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.ivu-card {
    border-radius: 0px !important;
}

.ivu-btn {
    border-radius: 0px !important;
}

.ivu-input {
    border-radius: 0px !important;
}

.ivu-page-item {
    border-radius: 0px !important;
}

.ivu-modal-content {
    border-radius: 0px !important;
}

.ivu-select-selection {
    border-radius: 0px !important;
}
</style>
