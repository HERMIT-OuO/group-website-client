<template>
    <div>
        <Menu mode="horizontal" theme="light" active-name="1">
            <div class="index-layout-logo"></div>
            <div class="index-layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-home"></Icon>
                    首页
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-list-box"></Icon>
                    新闻
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-paper"></Icon>
                    博客
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-text"></Icon>
                    留言板
                </MenuItem>
                <MenuItem name="5">
                    <Icon type="ios-paper"></Icon>
                    用户中心
                </MenuItem>
            </div>
        </Menu>
    </div>
</template>

<script>
export default {
    name: NMenu,
    data() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {},
};
</script>
