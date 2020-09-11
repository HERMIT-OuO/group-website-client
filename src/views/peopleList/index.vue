<template>
    <div class="peoplelist">
        <div class="peoplelist-title">导师</div>
        <div class="peoplelist-row" style="justify-content: center;">
            <Card class="peoplelist-card-teacher" :bordered="false">
                <div class="peoplelist-card-teacher-flex-row">
                    <Avatar
                        class="peoplelist-card-teacher-avatar"
                        size="130"
                        src="https://images.unsplash.com/photo-1597450122094-c9ed4649c16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
                    ></Avatar>
                    <div class="peoplelist-card-teacher-flex-col">
                        <div class="peoplelist-card-teacher-name">Test</div>
                        <div class="peoplelist-card-teacher-category">教授</div>
                        <div class="peoplelist-card-teacher-direction">
                            移动与无线网络、网络测量与建模、网络安全
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        <div class="peoplelist-title">学生</div>
        <div class="peoplelist-row">
            <Card
                v-for="(item, index) in users"
                :key="index"
                class="peoplelist-card"
                style="margin-bottom: 3rem;"
                :bordered="false"
                @click="goToPersonPage(1)"
            >
                <div @click="goToPersonPage(1)">
                    <Avatar
                        v-if="item.avator === ''"
                        class="peoplelist-card-avatar"
                        size="130"
                        >{{ item.name }}</Avatar
                    >
                    <Avatar
                        v-else
                        class="peoplelist-card-avatar"
                        size="130"
                        :src="item.avator"
                    />
                </div>
                <div class="peoplelist-card-name">{{ item.name }}</div>
                <div class="peoplelist-card-category">{{ item.category }}</div>
                <div class="peoplelist-card-direction">
                    {{ cutDirection(item.direction) }}
                </div>
                <Divider style="margin-top: 1rem; margin-bottom: 1rem;" />
                <div>
                    <a :href="item.githubUrl">
                        <Icon size="18" type="logo-github" /> GitHub
                    </a>
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
            users: [
                {
                    name: "Test",
                    category: "博士生",
                    direction:
                        "网络安全网络安全网络安全网络安全网络安全网络安全网络安全网络安全",
                    avator:
                        "https://cdn.pixabay.com/photo/2020/04/28/12/55/iceland-5104382_960_720.jpg",
                    githubUrl: "",
                },
                {
                    name: "Test",
                    category: "博士生",
                    direction: "网络安全",
                    avator:
                        "https://images.unsplash.com/photo-1597513901462-48cb0a4055f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    githubUrl: "",
                },
                {
                    name: "Test",
                    category: "研究生",
                    direction: "网络安全",
                    avator:
                        "https://images.unsplash.com/photo-1597339801934-bfb6a88b0010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
                    githubUrl: "",
                },
                {
                    name: "Test",
                    category: "研究生",
                    direction: "网络安全",
                    avator:
                        "https://images.unsplash.com/photo-1597326445154-fcac6ca0ac26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    githubUrl: "",
                },
                {
                    name: "Test",
                    category: "研究生",
                    direction: "网络安全",
                    avator:
                        "https://images.unsplash.com/photo-1597310319606-1b9ade99a38b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                    githubUrl: "",
                },
            ],
        };
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        cutDirection(text) {
            if (text.length >= 12) {
                return text.substr(0, 12) + "···";
            } else {
                return text;
            }
        },
        goToPersonPage(id) {
            console.log(id);
            this.$router.push({ name: "PersonPage" });
        },
    },
};
</script>

<style scoped>
a {
    color: #808695;
}

a:hover {
    color: #2d8cf0;
}

.peoplelist-title {
    margin-top: 3rem;
    margin-bottom: 1.5rem;

    font-size: 18px;
    font-weight: bold;
    text-align: center;

    color: #464c5b;

    text-align: center;
}

.peoplelist-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.peoplelist-card {
    width: 240px;

    text-align: center;
}

.peoplelist-card-teacher {
    width: 100%;

    padding-right: 2rem;
    padding-left: 2rem;

    text-align: left;
}

.peoplelist-card-teacher-flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 1rem;
    margin-bottom: 1rem;
}

.peoplelist-card-teacher-flex-col {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 1.5rem;
}

.peoplelist-card-teacher-name {
    margin-bottom: 1rem;

    font-size: 16px;
    font-weight: bold;

    color: #464c5b;
}

.peoplelist-card-teacher-category {
    margin-bottom: 0.5rem;
}

.peoplelist-card-avatar {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
}

.peoplelist-card-name {
    margin-bottom: 1.5rem;

    font-size: 16px;
    font-weight: bold;

    color: #464c5b;
}

.peoplelist-card-category,
.peoplelist-card-direction {
    margin-bottom: 0.5rem;
}
</style>
