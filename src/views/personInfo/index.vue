<template>
    <div class="personinfo">
        <Row class="personinfo-row" :gutter="64">
            <i-col :lg="18">
                <Card class="personinfo-card" :bordered="false" dis-hover>
                    <div class="personinfo-flex-row">
                        <div style="margin-right: 2rem;">
                            <Avatar
                                v-if="user.avatar === ''"
                                size="90"
                                style="background: #f56a00;"
                            >
                                {{ user.name }}
                            </Avatar>
                            <Avatar v-else size="90" :src="user.avatar" />
                        </div>
                        <div class="personinfo-flex-col">
                            <div class="personinfo-flex-row">
                                <div class="personinfo-username">
                                    {{ user.name }}
                                </div>
                                <Button @click="infoFlag = true"> 编辑 </Button>
                            </div>
                            <div
                                v-if="user.words === ''"
                                style="margin-top: 0.5rem;"
                            >
                                填写你的研究方向
                            </div>
                            <div v-else style="margin-top: 0.5rem;">
                                {{ user.words }}
                            </div>
                            <Divider
                                style="margin-top: 1rem; margin-bottom: 1rem;"
                            />
                            <div style="color: #9ea7b4;">
                                博客 0
                            </div>
                        </div>
                    </div>
                </Card>
                <Card
                    class="personinfo-card personinfo-introduction"
                    v-if="infoFlag === false"
                    :bordered="false"
                    dis-hover
                >
                    <div class="personinfo-flex-row">
                        <div class="personinfo-username">
                            个人简介（以下内容会被展示在成员页）
                        </div>
                        <Button @click="introductionFlag = true"> 编辑 </Button>
                    </div>
                    <Divider style="margin-top: 1rem; margin-bottom: 1rem;" />
                    <div
                        class="personinfo-introduction-content"
                        v-if="introductionFlag === false"
                        v-html="introductionContent"
                    ></div>
                    <editor
                        v-if="introductionFlag === true"
                        v-bind:defaultText="introductionContent"
                        @editorContent="getContent"
                        @cancelEditor="cancel"
                    ></editor>
                </Card>
                <Card
                    class="personinfo-card personinfo-introduction"
                    v-if="infoFlag === true"
                    :bordered="false"
                    dis-hover
                >
                    <Tabs value="info" :animated="false">
                        <TabPane
                            class="personinfo-changeinfo-tabpane"
                            label="个人信息"
                            name="info"
                        >
                            <div class="personinfo-changeinfo-tabpane-row">
                                <span>头像</span>
                                <div style="width: 90%;">
                                    <div
                                        class="personinfo-changeinfo-tabpane-flex"
                                    >
                                        <Avatar
                                            v-if="user.avatar === ''"
                                            size="50"
                                            style="background: #f56a00;"
                                        >
                                            {{ user.name }}
                                        </Avatar>
                                        <Avatar
                                            v-else
                                            size="50"
                                            :src="user.avatar"
                                        />
                                        <Upload
                                            action=""
                                            :show-upload-list="false"
                                            :before-upload="handleUpload"
                                            type="drag"
                                            :format="['jpg', 'jpeg', 'png']"
                                            :max-size="2000"
                                        >
                                            <Button> 上传新头像 </Button>
                                        </Upload>
                                    </div>
                                </div>
                            </div>
                            <div class="personinfo-changeinfo-tabpane-row">
                                <span>昵称</span>
                                <Input
                                    class="personinfo-changeinfo-tabpane-input"
                                    v-model="info.name"
                                    placeholder="请输入昵称"
                                />
                            </div>
                            <div class="personinfo-changeinfo-tabpane-row">
                                <span>身份</span>
                                <Select class="personinfo-changeinfo-tabpane-input" v-model="info.category">
                                    <Option v-for="item in categoryList" :value="item.value" :key="item.value">
                                        {{ item.label }}
                                    </Option>
                                </Select>
                            </div>
                            <div class="personinfo-changeinfo-tabpane-row">
                                <span>方向</span>
                                <Input
                                    class="personinfo-changeinfo-tabpane-input"
                                    v-model="info.direction"
                                    placeholder="填写你的研究方向"
                                />
                            </div>
                            <div class="personinfo-changeinfo-tabpane-row">
                                <span>GitHub</span>
                                <Input
                                    class="personinfo-changeinfo-tabpane-input"
                                    v-model="info.githubUrl"
                                    placeholder="填写你的 Github 地址"
                                />
                            </div>
                            <div style="text-align: right;">
                                <Button
                                    @click="infoFlag = false"
                                    style="margin-right: 1rem;"
                                    >取消</Button
                                >
                                <Button @click="changeInfo" type="primary"
                                    >保存</Button
                                >
                            </div>
                        </TabPane>
                        <TabPane
                            class="personinfo-changeinfo-tabpane"
                            label="账户与密码"
                            name="id"
                        >
                            <div class="personinfo-changeinfo-tabpane-row">
                                <span>手机号</span>
                                <div
                                    class="personinfo-changeinfo-tabpane-flex"
                                    style="width: 90%"
                                >
                                    <Input
                                        v-model="info.phone"
                                        :disabled="phoneFlag"
                                        placeholder="未绑定"
                                        style="margin-right:1rem;"
                                    />
                                    <div>
                                        <Button
                                            v-if="phoneFlag === true"
                                            @click="phoneFlag = false"
                                            >绑定</Button
                                        >
                                        <Button
                                            v-else
                                            type="primary"
                                            @click="changePhone"
                                            >确认</Button
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="personinfo-changeinfo-tabpane-row">
                                <span>邮箱</span>
                                <div
                                    class="personinfo-changeinfo-tabpane-flex"
                                    style="width: 90%"
                                >
                                    <Input
                                        v-model="info.email"
                                        :disabled="emailFlag"
                                        placeholder="未绑定"
                                        style="margin-right:1rem;"
                                    />
                                    <Button
                                        v-if="emailFlag === true"
                                        @click="emailFlag = false"
                                        >绑定</Button
                                    >
                                    <Button
                                        v-else
                                        type="primary"
                                        @click="changeEmail"
                                        >确认</Button
                                    >
                                </div>
                            </div>
                            <div class="personinfo-changeinfo-tabpane-row">
                                <span>登录密码</span>
                                <div
                                    class="personinfo-changeinfo-tabpane-flex"
                                    style="width: 90%"
                                >
                                    <Input
                                        v-model="info.password"
                                        :disabled="passwordFlag"
                                        placeholder="请输入新密码"
                                        type="password"
                                        password
                                        style="margin-right:1rem;"
                                    />
                                    <Button
                                        v-if="passwordFlag === true"
                                        @click="passwordFlag = false"
                                        >修改</Button
                                    >
                                    <Button
                                        v-else
                                        type="primary"
                                        @click="changePassword"
                                        >确认</Button
                                    >
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <Button @click="cancelChangeInfo">取消</Button>
                            </div>
                        </TabPane>
                    </Tabs>
                </Card>
            </i-col>

            <i-col :lg="6">
                <Card class="personinfo-card" :bordered="false" dis-hover>
                    <div class="personinfo-username">设备借用</div>
                    <div class="personinfo-borrow-text">当前暂无借用设备</div>
                </Card>
            </i-col>
        </Row>
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
            introductionFlag: false,
            infoFlag: false,
            introductionContent: "暂无内容",
            categoryList: [
                {
                    value: "1",
                    label: "博士",
                },
                {
                    value: "2",
                    label: "硕士",
                },
            ],
            user: {
                avatar: "",
                name: "Test",
                password: "",
                direction: "",
                githubUrl: "",
                category: "",
            },
            info: {
                name: "",
                words: "",
                phone: "",
                email: "",
                password: "",
            },
            phoneFlag: true,
            emailFlag: true,
            passwordFlag: true,
        };
    },
    computed: {},
    created() {},
    mounted() {
        this.info.name = this.user.name;
        this.info.words = this.user.words;
    },
    methods: {
        handleUpload(file) {
            console.log(file);
        },
        changeInfo() {
            // 修改个人信息
            this.user.name = this.info.name;
            this.user.words = this.info.words;
            this.infoFlag = false;
        },
        changePhone() {},
        changeEmail() {},
        changePassword() {},
        cancelChangeInfo() {
            // 取消更改个人信息
            this.phoneFlag = true;
            this.emailFlag = true;
            this.passwordFlag = true;
            this.infoFlag = false;
        },
        getContent(content) {
            const mycontent = content;
            const that = this;
            this.$Modal.confirm({
                title: "警告",
                content: "<p>确认要修改吗？</p>",
                onOk: () => {
                    console.log(that.introductionContent);
                    console.log(mycontent);
                    that.introductionContent = mycontent;
                    that.introductionFlag = false;
                },
            });
        },
        cancel(flag) {
            if (flag === true) {
                this.$Modal.confirm({
                    title: "警告",
                    content: "<p>确认要取消编辑吗？</p>",
                    onOk: () => {
                        this.introductionFlag = false;
                    },
                });
            }
        },
    },
};
</script>

<style scoped>
.personinfo-row {
    margin-top: 3rem;
}

.personinfo-card {
    padding: 0.5rem;
}

.personinfo-flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.personinfo-flex-col {
    display: flex;
    flex-direction: column;

    width: 100%;
}

.personinfo-username {
    font-size: 18px;
    font-weight: bold;

    color: #464c5b;
}

.personinfo-introduction {
    margin-top: 3rem;
}

.personinfo-changeinfo-tabpane {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.personinfo-changeinfo-tabpane-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.5rem;
}

.personinfo-changeinfo-tabpane-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.personinfo-changeinfo-tabpane-input {
    width: 90%;
}

/deep/ .personinfo-introduction-content h1,
h2,
h3,
h4 {
    color: #464c5b;
}

/deep/ .personinfo-introduction-content table {
    border-top: 1px solid #dcdee2;
    border-left: 1px solid #dcdee2;
}

/deep/ .personinfo-introduction-content table td,
table th {
    border-bottom: 1px solid #dcdee2;
    border-right: 1px solid #dcdee2;
    padding: 3px 5px;
}

/deep/ .personinfo-introduction-content table th {
    border-bottom: 2px solid #dcdee2;
    border-right: 1px solid #dcdee2;
    text-align: center;
}

/deep/ .personinfo-introduction-content blockquote {
    display: block;
    border-left: 8px solid #66b5f3;
    padding: 5px 10px;
    margin: 10px 0;
    line-height: 1.4;
    font-size: 100%;
    background-color: #f1f1f1;
}

/deep/ .personinfo-introduction-content code {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    background-color: #f1f1f1;
    border-radius: 3px;
    padding: 3px 5px;
    margin: 0 3px;
}

/deep/ .personinfo-introduction-content pre code {
    display: block;
}

/deep/ .personinfo-introduction-content ul,
ol {
    margin: 10px 0 10px 20px;
}

.personinfo-borrow-text {
    margin-top: 0.5rem;
}
</style>
