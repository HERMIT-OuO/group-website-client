<template>
    <div class="messageboard">
        <Card class="messageboard-card" :bordered="false" dis-hover>
            <Input
                style="width:40%; margin-right:20%"
                class="messageboard-card-input"
                placeholder="你的邮箱"
            />
            <Input
                style="width:40%;"
                class="messageboard-card-input"
                placeholder="你的昵称"
            />
            <Input
                class="messageboard-card-input"
                :autosize="{ minRows: 3, maxRows: 5 }"
                type="textarea"
                placeholder="你的留言"
            />
            <div class="messageboard-card-button">
                <Button type="primary">留言</Button>
            </div>
        </Card>
        <Card class="messageboard-message" :bordered="false" dis-hover>
            <div
                class="blog-row-left-message-flex-row"
            >
                <div class="blog-row-left-message-img">
                    <Avatar size="40" class="blog-row-left-message-avatar"
                        >Test</Avatar
                    >
                </div>
                <div class="blog-row-left-message-flex-col">
                    <div class="blog-row-left-message-name">Test</div>
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
                        <span @click="messageFlag2 = true">回复</span>
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
                                <div class="blog-row-left-message-content">
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
            <div
                class="blog-row-left-editor-flex"
                v-show="messageFlag2 === true"
            >
                <div class="blog-row-left-message-img">
                    <img src="../../assets/user-default.png" alt="头像" />
                </div>
                <div class="blog-row-left-editor-col" style="width:100%">
                    <Input
                        id="myinput"
                        v-model="messageContent"
                        type="textarea"
                        autosize
                        placeholder="留下你的回复"
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
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            messageFlag: true,
            messageFlag2: false,
            messageContent: "",
        };
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style scoped>
.messageboard {
    padding-top: 3rem;
}

.messageboard-card {
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
}

.messageboard-card-input {
    margin-bottom: 1rem;

    width: 100%;
}

/deep/ .ivu-input {
    outline: none;
    resize: none;
}

.messageboard-card-button {
    text-align: right;
}

.messageboard-message {
    margin-top: 3rem;
    margin-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
}

.blog-row-left-message {
    /* 留言板 */
    margin-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
}

.blog-row-left-message-avatar {
    margin-right: 1rem;

    object-fit: cover;
    object-position: center;
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

/deep/ #myinput .ivu-input {
    outline: none;
    border: 0;
    resize: none;
}

/deep/ #myinput .ivu-input:focus {
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
</style>
