<template>
    <div class="blog">
       <Row  class="blog-row" :gutter="32">
           <Col :lg="16">
            <div class="blog-row-left">
                <div class="blog-row-left-search">
                    <!-- 搜索组件 -->
                    <Input class="blog-row-left-input" prefix="ios-search" size="large" placeholder="搜索博客···"/>
                    <Button type="primary" size="large"  >搜索</Button>
                </div>
                <div class="blog-row-left-page">
                    <!-- 分页 -->
                    <Page :total="100" show-elevator />
                </div>
            </div>
           </Col>
           <Col :lg="6" offset="2">
            <Card :bordered="false">
                123
            </Card>
           </Col>
       </Row>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style scoped>
.blog-row {
    margin-top: 2rem;
}

.blog-row-left-search {
    display: flex;
    flex-direction: row;
}

.blog-row-left-input { 
    margin-right: 1rem;
}

.blog-row-left-page {
    margin-top: 3rem;
    text-align: center;
}
</style>
