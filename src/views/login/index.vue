<template>
    <div class="login">
        <div class="login-card">
            <Card :padding="0">
                <div class="login-card-flex">
                    <div class="login-card-left">
                        <img
                            class="login-card-img"
                            src="../../assets/login/control-pana.png"
                            alt="login"
                        />
                    </div>
                    <div class="login-card-right">
                        <div class="login-card-title">
                            Welcome to NetGroup
                        </div>
                        <div v-if="flag === 0">
                            <!-- 用户名登录 -->
                            <i-input
                                class="login-card-input"
                                prefix="md-person"
                                placeholder="用户名"
                                v-model="loginForm.userName"
                            />
                            <i-input
                                class="login-card-input"
                                prefix="md-lock"
                                type="password"
                                password
                                placeholder="密码"
                                v-model="loginForm.password"
                            />
                            <div class="login-card-text">
                                <a class="login-card-text-left">
                                    <span @click="changeFlag(1)"
                                        >验证码登录</span
                                    >
                                </a>
                                <!-- <a>
                                    <span
                                        class="login-card-text-right"
                                        @click="changeFlag(2)"
                                        >忘记密码？</span
                                    >
                                </a> -->
                            </div>
                            <Button
                                class="login-card-button"
                                type="primary"
                                @click="login"
                                >登录</Button
                            >
                        </div>
                        <div v-if="flag === 1">
                            <!-- 验证码登录 -->
                            <Input
                                class="login-card-input"
                                prefix="md-person"
                                placeholder="邮箱/手机号"
                                v-model="loginForm.userTemp"
                            />
                            <div class="login-card-input-div">
                                <i-input
                                    class="login-card-input login-card-input-key"
                                    prefix="md-key"
                                    placeholder="验证码"
                                    v-model="loginForm.userCode"
                                >
                                </i-input>
                                <Button
                                    type="primary"
                                    :disabled="verificationFlag"
                                    @click="changeVerificationFlag"
                                    >{{ verificationText }}</Button
                                >
                            </div>

                            <div class="login-card-text">
                                <a>
                                    <span
                                        class="login-card-text-left"
                                        @click="changeFlag(0)"
                                        >用户名登录</span
                                    ></a
                                >
                                <!-- <a>
                                    <span
                                        class="login-card-text-right"
                                        @click="changeFlag(2)"
                                        >忘记密码？</span
                                    ></a
                                > -->
                            </div>
                            <Button
                                class="login-card-button"
                                type="primary"
                                @click="login"
                                >登录</Button
                            >
                        </div>
                        <div v-if="flag === 2">
                            <!-- 找回密码 -->
                            <Input
                                class="login-card-input"
                                prefix="md-person"
                                placeholder="邮箱"
                            />
                            <Input
                                class="login-card-input"
                                prefix="md-key"
                                placeholder="验证码"
                            />
                            <div class="login-card-text">
                                <a>
                                    <span
                                        class="login-card-text-left"
                                        @click="changeFlag(0)"
                                        >用户名登录</span
                                    ></a
                                >
                                <a>
                                    <span
                                        class="login-card-text-right"
                                        @click="changeFlag(1)"
                                        >验证码登录</span
                                    ></a
                                >
                            </div>
                            <Button class="login-card-button" type="primary"
                                >登录</Button
                            >
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            // 0：用户名登录；1：验证码登录；2：找回密码
            flag: 0,
            // 验证码切换
            verificationFlag: false,
            verificationText: "发送验证码",
            verificationTime: 60,
            // form 表单
            loginForm: {
                userName: "",
                password: "",
                userEmail: "",
                userPhone: "",
                userTemp: "",
                userCode: "",
            },
        };
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        changeFlag(index) {
            this.flag = index;
        },
        changeVerificationFlag() {
            if (this.checkPE() === false) {
                this.$Message.error("请输入正确的邮箱或手机号！");
            } else {
                if (this.verificationFlag === true) return;
                this.verificationFlag = !this.verificationFlag;
                this.verificationText = this.verificationTime + "s后重新发送";
                let clock = window.setInterval(() => {
                    this.verificationTime--;
                    this.verificationText =
                        this.verificationTime + "s后重新发送";
                    if (this.verificationTime < 0) {
                        window.clearInterval(clock);
                        this.verificationText = "重新发送验证码";
                        this.verificationTime = 60;
                        this.verificationFlag = !this.verificationFlag;
                    }
                }, 1000);
            }
        },
        login() {
            if (this.flag === 0) {
                // 用户名登录
                if (
                    this.loginForm.userName === "" ||
                    this.loginForm.passoword
                ) {
                    // 若输入为空
                    this.$Message.error("请输入用户名或密码！");
                } else {
                    console.log(this.loginForm);
                }
            } else if (this.flag === 1) {
                // 验证码登录
                if(this.checkPE() !== false) {
                    if(this.loginForm.userCode !== ''){
                        console.log(this.loginForm);
                    }else {
                        this.$Message.error("请输入验证码！");
                    }
                    
                }else {
                    this.$Message.error("请输入正确的邮箱或手机号！");
                }
            } 
        },
        checkPE() {
            const PHONE = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
            const EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (PHONE.test(this.loginForm.userTemp)) {
                // 手机号
                this.loginForm.userPhone = this.loginForm.userTemp;
                return "phone";
            } else if (EMAIL.test(this.loginForm.userTemp)) {
                // 邮箱
                this.loginForm.userEmail = this.loginForm.userTemp;
                return "email";
            } else {
                // 不通过
                return false;
            }
        },
    },
};
</script>

<style scoped>
a {
    text-decoration: none;
}
.login {
    display: flex;
    flex-direction: column;
    align-items: center;


    background: #f5f7f9;
    /* background: url("../../assets/login/backgroud.jpg") fixed ;
    background-size: cover; */
}

.login-card {
    margin-top: 25vh;

    max-width: 50rem;
    width: 80%;
}

.login-card-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.login-card-left {
    background-color: #f5f7f9;
}

.login-card-right {
    display: flex;
    flex-direction: column;

    margin-top: 8rem;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;

    width: 70rem;

    text-align: center;

    background-color: #fff;
}

.login-card-title {
    margin-bottom: 1.5rem;

    font-size: 16px;
    font-weight: bold;

    color: #464c5b;
}

.login-card-img {
    width: 100%;
}

.login-card-input {
    margin-bottom: 1rem;

    width: 100%;
}

.login-card-input-div {
    display: flex;
    flex-direction: row;
}

.login-card-input-key {
    width: 70%;
}

.login-card-text-key {
    white-space: nowrap;
}

.login-card-text {
    display: flex;
    justify-content: flex-end;

    margin-bottom: 1rem;
}

.login-card-text-left {
    font-size: 12px;

    color: #9ea7b4;
}
.login-card-text-left:hover {
    color: #538ced;
}

.login-card-text-right {
    font-size: 12px;
    text-align: right;

    color: #9ea7b4;
}
.login-card-text-right:hover {
    color: #538ced;
}

.login-card-button {
    width: 100%;
}

@media only screen and (max-width: 1000px) {
    .login-card {
        max-width: 28rem;
        width: 90%;
    }

    .login-card-left {
        display: none;
    }

    .login-card-right {
        margin-top: 0;
        padding-right: 2.5rem;
        padding-left: 2.5rem;
    }
} 

@media only screen and (max-width: 768px) {
    .login-card {
        width: 80%;
    }
} 

</style>
