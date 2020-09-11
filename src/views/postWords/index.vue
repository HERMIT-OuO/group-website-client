<template>
    <div class="postblog">
        <div class="postblog-row">
            <Card style="padding-right:0; padding-left: 0;" dis-hover>
                <Input
                    class="postblog-input"
                    v-model="blog.title"
                    placeholder="请输入标题（最多20个字）"
                />
            </Card>
            <editor
                class="postblog-editor"
                v-on:editorContent="getContent"
                v-on:cancelEditor="cancelPost"
            ></editor>
        </div>
        <Modal v-model="postFlag">
            <p slot="header" style="text-align:center">
                发布文章
            </p>
            <div style="text-align:center">
                <div class="postblog-select">
                    <span>类别</span>
                    <Select
                        style="width:90%; text-align:left;"
                        v-model="blog.category"
                    >
                        <Option
                            v-for="item in categoryList"
                            :value="item"
                            :key="item"
                            >{{ item }}</Option
                        >
                    </Select>
                </div>
                <div class="postblog-select">
                    <span>标签</span>
                    <Select
                        style="width:90%; text-align:left;"
                        filterable
                        multiple
                        allow-create
                        @on-create="creatTags"
                        v-model="blog.tags"
                    >
                        <Option
                            v-for="item in tagList"
                            :value="item"
                            :key="item"
                            >{{ item }}</Option
                        >
                    </Select>
                </div>
                <div class="postblog-select-upload">
                    <Upload
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/"
                    >
                        <div style="padding: 20px 0">
                            <Icon
                                type="ios-cloud-upload"
                                size="32"
                                style="color: #3399ff"
                            ></Icon>
                            <p>点击或拖拽上传文件</p>
                        </div>
                    </Upload>
                </div>
            </div>
            <div slot="footer">
                <Button type="primary" long>发布</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import editor from "../../components/WangEditor/index";
export default {
    components: {
        editor,
    },
    data() {
        return {
            blog: {
                title: "",
                content: "",
                category: "",
                tags: " ",
            },
            postFlag: false,
            categoryList: ["A", "B", "C", "D"],
            tagList: ["A", "B", "C", "D"],
        };
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        getContent(content) {
            this.blog.content = content;
            this.postBlog();
        },
        cancelPost(flag) {
            if (flag === true) {
                // 取消发布
                this.$Modal.confirm({
                    title: "警告",
                    content: "<p>确认要取消发布吗？</p>",
                    onOk: () => {
                        this.$router.go(-1);
                    },
                });
            }
        },
        postBlog() {
            if (this.blog.title === "" || this.blog.content === "") {
                // 标题或内容为空
                this.$Message["warning"]({
                    background: true,
                    content: "标题或内容不能为空",
                });
            } else {
                if (this.blog.content.length <= 5) {
                    // 正文内容少于 5 个字
                    this.$Message["warning"]({
                        background: true,
                        content: "正文不得少于 5 个字",
                    });
                } else {
                    this.postFlag = true;
                }
            }
        },
        creatTags(val) {
            this.tagList.push(val);
        },
    },
};
</script>

<style scoped>
.postblog-row {
    margin-top: 3rem;
}

.postblog-input {
    height: 2rem;
    line-height: 2rem;
}

/deep/ .ivu-input {
    outline: none;
    border: 0;

    caret-color: #464c5b;

    font-size: 18px;
    font-weight: bold;

    color: #464c5b;
}

/deep/ .ivu-input:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 0 2px transparent;
}

.postblog-editor {
    margin-top: 1rem;
}

.postblog-select {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin-top: 1rem;
    margin-bottom: 1rem;
}

.postblog-select-Upload {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    width: 100%;
}
</style>
