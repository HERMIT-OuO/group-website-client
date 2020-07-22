<template>
    <div class="index">
        <div class="index-content-carousel">
                <!-- 轮播图 -->
                <Carousel
                    autoplay
                    :autoplay-speed="3000"
                    v-model="carIndex"
                    loop
                    dots="outside"
                >
                    <CarouselItem>
                        <div class="demo-carousel">1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">3</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">4</div>
                    </CarouselItem>
                </Carousel>
            </div>
            <div>
                <!-- 页面 -->
            </div>
            <div class="index-content-blog">
                <!-- 最新博客 -->
                <div class="index-content-blog-title">最新博客</div>
                <Card class="index-content-blog-card" :bordered="false">
                    <div class="index-content-blog-card-div">
                        <div class="index-content-blog-card-left">
                            <div class="index-content-blog-card-title">
                                <router-link
                                    class="index-content-blog-card-title"
                                    to="/"
                                    >{{ blog.title }}</router-link
                                >
                            </div>
                            <div class="index-content-blog-card-content">
                                {{ cutContent(blog.content) }}
                            </div>
                        </div>
                        <div class="index-content-blog-card-right">
                            <div class="index-content-blog-card-author">
                                {{ blog.author }}
                            </div>
                            <div class="index-content-blog-card-time">
                                {{ blog.time }}
                            </div>
                        </div>
                    </div>
                </Card>
                <Card class="index-content-blog-card" :bordered="false">
                    <div class="index-content-blog-card-div">
                        <div class="index-content-blog-card-left">
                            <div class="index-content-blog-card-title">
                                <router-link
                                    class="index-content-blog-card-title"
                                    to="/"
                                    >{{ blog.title }}</router-link
                                >
                            </div>
                            <div class="index-content-blog-card-content">
                                {{ cutContent(blog.content) }}
                            </div>
                        </div>
                        <div class="index-content-blog-card-right">
                            <div class="index-content-blog-card-author">
                                {{ blog.author }}
                            </div>
                            <div class="index-content-blog-card-time">
                                {{ blog.time }}
                            </div>
                        </div>
                    </div>
                </Card>
                <Card class="index-content-blog-card" :bordered="false">
                    <div class="index-content-blog-card-div">
                        <div class="index-content-blog-card-left">
                            <div class="index-content-blog-card-title">
                                <router-link
                                    class="index-content-blog-card-title"
                                    to="/"
                                    >{{ blog.title }}</router-link
                                >
                            </div>
                            <div class="index-content-blog-card-content">
                                {{ cutContent(blog.content) }}
                            </div>
                        </div>
                        <div class="index-content-blog-card-right">
                            <div class="index-content-blog-card-author">
                                {{ blog.author }}
                            </div>
                            <div class="index-content-blog-card-time">
                                {{ blog.time }}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            carIndex: 0,
            blog: {
                title: "GitHub 21TB DNA 資料存北極 資料能保存千年以上",
                content:
                    "去年 Github 發表 GitHub Archive Program 和 GitHub Arctic Code Vault 兩項保存計劃，希望保存地球不同生物的 DNA 資料。",
                author: "Author",
                time: "2020-01-01",
            },
        };
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        goToView(view) {
            // 导航栏跳转
            this.$router.push(view);
        },
        cutContent(text) {
            // 裁剪 blog 内容
            if (text.length >= 80) {
                return text.substr(0, 80) + "···";
            } else {
                return text;
            }
        },
    },
};
</script>

<style scoped>
.index {
    display: flex;
    flex-direction: column;

    border-radius: 4px;
    overflow: hidden;

    background: #f5f7f9;
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
</style>
