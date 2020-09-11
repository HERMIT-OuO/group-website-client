<template>
    <div class="blog">
        <Row class="blog-row" :gutter="64">
            <i-col :lg="18">
                <div class="blog-row-left">
                    <div class="blog-row-left-search">
                        <!-- 搜索组件 -->
                        <Input
                            class="blog-row-left-input"
                            prefix="ios-search"
                            size="large"
                            placeholder="搜索文章···"
                        />
                        <Button type="primary" size="large">搜索</Button>
                    </div>
                    <div class="blog-row-left-list">
                        <!-- 文章 列表 -->
                        <Card class="index-content-blog-card" :bordered="false">
                            <div class="index-content-blog-card-div">
                                <div class="index-content-blog-card-left">
                                    <div class="index-content-blog-card-title">
                                        <router-link
                                            class="index-content-blog-card-title"
                                            :to="'/wordsPage/' + words.id"
                                            >{{words.title }}</router-link
                                        >
                                    </div>
                                    <div
                                        class="index-content-blog-card-content"
                                    >
                                        {{ cutContent(words.content) }}
                                    </div>
                                </div>
                                <div class="index-content-blog-card-right">
                                    <div class="index-content-blog-card-author">
                                        {{ words.author }}
                                    </div>
                                    <div class="index-content-blog-card-time">
                                        {{ words.time }}
                                    </div>
                                </div>
                            </div>
                        </Card>
                        
                        
                    </div>
                    <div class="blog-row-left-page">
                        <!-- 分页 -->
                        <Page :total="wordsNum" show-elevator />
                    </div>
                </div>
            </i-col>
            <i-col :lg="6">
                <!-- Tags -->
                <Card class="blog-row-right-tag" dis-hover>
                    <div class="blog-row-right-tag-title">
                        <Icon type="md-pricetag" />
                        标签
                    </div>
                </Card>
                <Card class="blog-row-right-tag" dis-hover>
                    <div class="blog-row-right-tag-text">tag1</div>
                    <div class="blog-row-right-tag-text">tag2</div>
                    <div class="blog-row-right-tag-text">tag3</div>
                    <div class="blog-row-right-tag-text">tag4</div>
                    <div class="blog-row-right-tag-text">tag5</div>
                    <div class="blog-row-right-tag-text">tag6</div>
                    <div class="blog-row-right-tag-text">tag7</div>
                    <div class="blog-row-right-tag-text">tag8</div>
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            wordsNum: 100,
            words: {
                id: '1',
                title: "GitHub 21TB DNA 資料存北極 資料能保存千年以上",
                content:
                    "去年 Github 發表 GitHub Archive Program 和 GitHub Arctic Code Vault 兩項保存計劃，希望保存地球不同生物的 DNA 資料。",
                author: "Author",
                time: "2020-01-01",
            },
        };
    },
    watch: {
        '$route' () {
            const kind = this.$route.params.kind;
            console.log(kind);
        }
    },
    computed: {},
    created() {},
    mounted() {
    },
    methods: {
        cutContent(text) {
            // 裁剪 blog 内容
            if (text.length >= 75) {
                return text.substr(0, 75) + "···";
            } else {
                return text;
            }
        }
    },
};
</script>


<style scoped>
.blog-row {
    margin-top: 3rem;
}

.blog-row-left-search {
    display: flex;
    flex-direction: row;
}

.blog-row-left-input {
    margin-right: 1rem;
}

/deep/ .ivu-input-large {
    font-size: 14px;
}

/deep/ .ivu-btn-large{
    font-size: 14px;
}

.blog-row-left-list {
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

.blog-row-left-page {
    margin-top: 3rem;
    text-align: center;
}

.blog-row-right-tag {
    margin-bottom: 1rem;

    text-align: center;
}

.blog-row-right-tag-title {
    font-size: 16px;
    font-weight: bold;

    color: #464c5b;
}

.blog-row-right-tag-text {
    margin-bottom: 0.5rem;
}
</style>
