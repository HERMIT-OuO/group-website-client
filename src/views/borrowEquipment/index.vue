<template>
    <div class="borrowEquipment">
        <Row class="borrowEquipment-row" :gutter="64">
            <i-col :lg="18">
                <div class="blog-row-left-search">
                    <!-- 搜索组件 -->
                    <Input
                        class="blog-row-left-input"
                        prefix="ios-search"
                        size="large"
                        placeholder="搜索设备···"
                    />
                    <Button type="primary" size="large">搜索</Button>
                </div>
                <Row :gutter="32">
                    <i-col :lg="8">
                        <Card style="margin-bottom: 1rem;" :bordered="false">
                            <div class="borrowEquipment-card">
                                <img
                                    class="borrowEquipment-img"
                                    src="../../assets/borrow/computer.png"
                                />
                                <Divider style="margin-top: 0rem; margin-bottom: 1rem;" />
                                <div class="borrowEquipment-flex-row">
                                    <div class="borrowEquipment-title">PC 机器</div>
                                    <span>1 剩余</span>
                                </div>
                            </div>
                        </Card>
                    </i-col>
                    <i-col :lg="8">
                        <Card style="margin-bottom: 1rem;" :bordered="false">
                            <div class="borrowEquipment-card">
                                <img
                                    class="borrowEquipment-img"
                                    src="../../assets/borrow/box.png"
                                />
                                <Divider style="margin-top: 0rem; margin-bottom: 1rem;" />
                                <div class="borrowEquipment-flex-row">
                                    <div class="borrowEquipment-title">实验器材</div>
                                    <span>20 剩余</span>
                                </div>
                            </div>
                        </Card>
                    </i-col>
                    <i-col :lg="8">
                        <Card style="margin-bottom: 1rem;" :bordered="false">
                            <div class="borrowEquipment-card">
                                <img
                                    class="borrowEquipment-img"
                                    src="../../assets/borrow/book.png"
                                />
                                <Divider style="margin-top: 0rem; margin-bottom: 1rem;" />
                                <div class="borrowEquipment-flex-row">
                                    <div class="borrowEquipment-title">纸质材料</div>
                                    <span>10 剩余</span>
                                </div>
                            </div>
                        </Card>
                    </i-col>
                    <i-col :lg="8">
                        <Card style="margin-bottom: 1rem;" :bordered="false">
                            <div class="borrowEquipment-card">
                                <img
                                    class="borrowEquipment-img"
                                    src="../../assets/borrow/pen.png"
                                />
                                <Divider style="margin-top: 0rem; margin-bottom: 1rem;" />
                                <div class="borrowEquipment-flex-row">
                                    <div class="borrowEquipment-title">其他</div>
                                    <span>15 剩余</span>
                                </div>
                            </div>
                        </Card>
                    </i-col>
                </Row>
            </i-col>
            <i-col :lg="6">
                <Card style="padding: 0.5rem;" :bordered="false" dis-hover> 
                    <div class="borrowEquipment-mine-title" style="margin-bottom: 1.5rem;">
                        我借用的设备
                    </div>
                    <div class="borrowEquipment-flex-row borrowEquipment-mine-row">
                        <span>电脑</span>
                        <div>
                            <Button  size="small">归还</Button>
                        </div>
                    </div>
                    <div class="borrowEquipment-flex-row borrowEquipment-mine-row">
                        <span>电脑</span>
                        <div>
                            <Button  size="small">归还</Button>
                        </div>
                    </div>
                    <div class="borrowEquipment-flex-row borrowEquipment-mine-row">
                        <span>电脑</span>
                        <div>
                            <Button  size="small">归还</Button>
                        </div>
                    </div>
                </Card>
            </i-col>
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
.borrowEquipment-row {
    margin-top: 3rem;
}

.blog-row-left-search {
    display: flex;
    flex-direction: row;

    margin-bottom: 3rem;
}

.blog-row-left-input {
    margin-right: 1rem;
}

/deep/ .ivu-input-large {
    font-size: 14px;
}

/deep/ .ivu-btn-large {
    font-size: 14px;
}

.borrowEquipment-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.borrowEquipment-flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
}

.borrowEquipment-flex-row span {
    color: #808695;
}

.borrowEquipment-title {
    font-size: 16px;
    font-weight: bold;
    text-align: center;

    color: #464c5b;
}

.borrowEquipment-img {
    width: 200px;
}

.borrowEquipment-mine-title {
    margin-bottom: 1rem;

    font-size: 18px;
    font-weight: bold;

    color: #464c5b;
}

.borrowEquipment-mine-row {
    margin-bottom: 1rem;
}
</style>
