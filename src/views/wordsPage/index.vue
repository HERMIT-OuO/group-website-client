<template>
    <div class="blogPage">
        <Row class="blog-row" :gutter="48">
            <i-col :lg="18">
                <!-- 左侧 -->
                <Card
                    class="blog-row-left"
                    dis-hover
                    @click="messageFlag = false"
                >
                    <!-- blog 内容 -->
                    <div class="blog-row-left-title">{{ blog.title }}</div>
                    <div class="blog-row-left-row">
                        <!-- <div class="blog-row-left-author-img"><img src="../../assets/user-default.png" alt="author"></div> -->
                        <div class="blog-row-left-author">
                            {{ blog.author }} 于 {{ blog.time }}
                        </div>
                        <!-- <div class="blog-row-left-time"></div> -->
                    </div>
                    <div class="blog-row-left-content">{{ blog.content }}</div>
                </Card>
                <div class="blog-row-left-editor">
                    <!-- editor -->
                    <Card class="blog-row-left-editor-card" dis-hover>
                        <div class="blog-row-left-editor-flex">
                            <div class="blog-row-left-message-img">
                                <img
                                    src="../../assets/user-default.png"
                                    alt="头像"
                                />
                            </div>
                            <div
                                class="blog-row-left-editor-col"
                                style="width:100%"
                            >
                                <Input
                                    v-model="messageContent"
                                    type="textarea"
                                    autosize
                                    placeholder="留下你的评论"
                                    @on-focus="messageFlag = true"
                                />
                                <div>
                                    <Button
                                    v-show="messageFlag === true"
                                    @click="submitMessage"
                                    class="blog-row-left-editor-button"
                                    type="primary"
                                    >提交</Button
                                    >
                                <Button
                                    v-show="messageFlag === true"
                                    @click="messageFlag = false"
                                    class="blog-row-left-editor-button"
                                    >取消</Button
                                >
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card class="blog-row-left-message" v-for="item in 3" :key="item" dis-hover>
                    <!-- 留言 -->
                    <div
                        class="blog-row-left-message-flex-row"
                        @click="messageFlag = false; "
                    >
                        <div class="blog-row-left-message-img">
                            <img
                                src="../../assets/user-default.png"
                                alt="头像"
                            />
                        </div>
                        <div class="blog-row-left-message-flex-col">
                            <div class="blog-row-left-message-name">Admin</div>
                            <div class="blog-row-left-message-time">
                                2020-07-25
                            </div>
                            <div class="blog-row-left-message-content">
                                一个真正好的设计能够促进其他设计师完成更好的设计。对于
                                Apple
                                的设计哲学，同时存在热烈的追捧和猛烈的抨击，但作为设计师我们至少不能否认
                                Apple 产品决策的借鉴意义。
                            </div>
                            <div class="blog-row-left-message-icon">
                                <Icon
                                    size="20"
                                    type="ios-text"
                                    @click="messageFlag2 = true"
                                />
                                <span @click="messageFlag2 = true">评论</span>
                                <Icon size="20" type="ios-thumbs-up" />
                                <span>6</span>
                            </div>

                            <div class="blog-row-left-message-reply">
                                <!-- 评论 -->
                                <div class="blog-row-left-message-flex-row">
                                    <div class="blog-row-left-message-img">
                                        <img
                                            src="../../assets/user-default.png"
                                            alt="头像"
                                        />
                                    </div>
                                    <div class="blog-row-left-message-flex-col">
                                        <div class="blog-row-left-message-name">
                                            Admin
                                        </div>
                                        <div class="blog-row-left-message-time">
                                            2020-07-25
                                        </div>
                                        <div
                                            class="blog-row-left-message-content"
                                        >
                                            一个真正好的设计能够促进其他设计师完成更好的设计。对于
                                            Apple
                                            的设计哲学，同时存在热烈的追捧和猛烈的抨击，但作为设计师我们至少不能否认
                                            Apple 产品决策的借鉴意义。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Divider v-show="messageFlag2 === true" />
                    <div class="blog-row-left-editor-flex"  v-show="messageFlag2 === true">
                        
                        <div class="blog-row-left-message-img">
                            <img
                                src="../../assets/user-default.png"
                                alt="头像"
                            />
                        </div>
                        <div
                            class="blog-row-left-editor-col"
                            style="width:100%"
                        >
                            <Input
                                v-model="messageContent2"
                                type="textarea"
                                autosize
                                placeholder="留下你的评论"
                            />
                            <div>
                                <Button
                                class="blog-row-left-editor-button"
                                type="primary"
                                >提交</Button
                            >
                            <Button
                                class="blog-row-left-editor-button"
                                @click="messageFlag2 = false"
                                >取消</Button
                            >
                            </div>
                            
                        </div>
                    </div>
                </Card>
            </i-col>
            <i-col :lg="5" :offset="1">
                <!-- 作者信息 -->
                <Card class="blogpage-row-right-author" dis-hover>
                    <img
                        class="blogpage-row-right-author-img"
                        src="../../assets/user-default.png"
                        alt="author"
                    />
                    <div class="blogpage-row-right-author-name">Admin</div>
                    <div class="blogpage-row-right-author-category">硕士</div>
                    <div class="blogpage-row-right-author-direction">
                        网络安全方向
                    </div>
                    <Divider />
                    <div class="blogpage-row-right-author-github">
                        <Icon
                            class="blogpage-row-right-author-github-icon"
                            size="18"
                            type="logo-github"
                        />
                        GitHub
                    </div>
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
// import editor from '../../components/WangEditor/index';
export default {
    components: {},
    data() {
        return {
            blog: {
                id: "1",
                title: "GitHub 21TB DNA 資料存北極 資料能保存千年以上",
                content:
                    "去年 Github 發表 GitHub Archive Program 和 GitHub Arctic Code Vault 兩項保存計劃，希望保存地球不同生物的 DNA 資料。而近期 Github 把資料存放在挪威斯瓦爾巴群島的一個廢棄礦坑中。去年 Github 發表 GitHub Archive Program 和 GitHub Arctic Code Vault 兩項保存計劃，希望保存地球不同生物的 DNA 資料。而近期 Github 把資料存放在挪威斯瓦爾巴群島的一個廢棄礦坑中。",
                author: "Author",
                time: "2020-01-01",
            },
            messageFlag: false,
            messageFlag2: false,
            messageContent: "",
            minRows: 1,
            messageContent2: "",
        };
    },
    computed: {},
    created() {
        this.getBlog();
    },
    mounted() {},
    methods: {
        getBlog() {
            const that = this;
            const id = that.$route.params.id;
            console.log(id);
        },
        submitMessage() {
            const that = this;
            that.messageFlag = true;
        },
    },
};
</script>

<style scoped>
.blogPage {
    margin-top: 3rem;
}

.blog-row-left {
    padding-top: 1rem;
    padding-right: 1em;
    padding-bottom: 1rem;
    padding-left: 1rem;
}

.blog-row-left-title {
    margin-bottom: 0.5rem;

    font-size: 20px;
    font-weight: bold;
    text-align: center;

    color: #464c5b;
}

.blog-row-left-row {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}

.blog-row-left-author-img img {
    margin-right: 1rem;

    width: 38px;

    object-fit: cover;
    object-position: center;
}

.blog-row-left-author,
.blog-row-left-time {
    margin-bottom: 2rem;
}

.blog-row-left-content {
    font-size: 15px;
    line-height: calc(15px * 2);
}

.blog-row-left-editor {
    margin-top: 3rem;
}

.blog-row-left-editor-card {
    padding-right: 1rem;
    padding-left: 1rem;
}

.blog-row-left-editor-flex {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
}

.blog-row-left-editor-flex div {
    color: #9ea7b4;
}

.blog-row-left-wang {
    margin-top: 3rem;
}

/deep/ .ivu-input {
    outline: none;
    border: 0;
    resize: none;
}

/deep/ .ivu-input:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 0 2px transparent;
}

.blog-row-left-editor-col {
    display: flex;
    flex-direction: column;
    justify-content: left;
}

.blog-row-left-editor-button {
    margin-top: 1.5rem;
    margin-left: 7px;

    width: 70px;

    text-align: center;
}

.blog-row-left-message {
    /* 留言板 */
    margin-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
}

.blog-row-left-message-img img {
    margin-right: 1rem;

    border-radius: 50%;
    width: 40px;

    object-fit: cover;
    object-position: center;
}

.blog-row-left-message-flex-row {
    display: flex;
    flex-direction: row;
}

.blog-row-left-message-flex-col {
    display: flex;
    flex-direction: column;
}

.blog-row-left-message-name {
    font-weight: bold;
}

.blog-row-left-message-content {
    /* 留言内容 */
    line-height: calc(14px * 2);
}

.blog-row-left-message-icon {
    /* 评论按钮 */
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    line-height: calc(14px * 2);

    color: #9ea7b4;
}
.blog-row-left-message-icon span {
    margin-left: 0.4rem;
    margin-right: 1rem;
}

.blog-row-left-message-reply {
    /* 评论 */
    margin-top: 1rem;
}

.blogpage-row-right-author {
    text-align: center;
}

.blogpage-row-right-author-img {
    /* 头像 */
    margin-top: 1rem;
    margin-bottom: 1rem;

    border: 1px solid #dcdee2;
    border-radius: 50%;
    width: 60%;

    object-fit: cover;
    object-position: center;
}

.blogpage-row-right-author-name {
    margin-bottom: 1rem;

    font-size: 16px;
    font-weight: bold;

    color: #464c5b;
}

.blogpage-row-right-author-category,
.blogpage-row-right-author-direction,
.blogpage-row-right-author-github {
    margin-bottom: 0.5rem;
}

.blogpage-row-right-author-github {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}

/deep/ .ivu-divider {
    margin-top: 16px;
    margin-bottom: 16px;
}

.blogpage-row-right-author-github-icon {
    margin-right: 0.3rem;
}

/deep/ .blog-row-left-content h1,
h2,
h3,
h4 {
    color: #464c5b;
}

/deep/ .blog-row-left-content table {
    border-top: 1px solid #dcdee2;
    border-left: 1px solid #dcdee2;
}

/deep/ .blog-row-left-content table td,
table th {
    border-bottom: 1px solid #dcdee2;
    border-right: 1px solid #dcdee2;
    padding: 3px 5px;
}

/deep/ .blog-row-left-content table th {
    border-bottom: 2px solid #dcdee2;
    border-right: 1px solid #dcdee2;
    text-align: center;
}

/deep/ .blog-row-left-content blockquote {
    display: block;
    border-left: 8px solid #66b5f3;
    padding: 5px 10px;
    margin: 10px 0;
    line-height: 1.4;
    font-size: 100%;
    background-color: #f1f1f1;
}

/deep/ .blog-row-left-content code {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    background-color: #f1f1f1;
    border-radius: 3px;
    padding: 3px 5px;
    margin: 0 3px;
}

/deep/ .blog-row-left-content pre code {
    display: block;
}

/deep/ .blog-row-left-content ul,
ol {
    margin: 10px 0 10px 20px;
}
</style>
