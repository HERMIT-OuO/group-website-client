<template>
    <div class="personblog">
        <Card class="personblog-card">
            <Table border :columns="columns">
                <template slot-scope="{ row }" slot="action">
                    <Button
                        type="primary"
                        size="small"
                        style="margin-right: 5px"
                        @click="alterBlog(row)"
                        >修改</Button
                    >
                    <Button type="error" size="small" @click="remove(row)"
                        >删除</Button
                    >
                </template>
            </Table>
        </Card>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            columns: [
                {
                    title: "标题",
                    key: "title",
                    align: "center"
                },
                {
                    title: "分类",
                    key: "category",
                    align: "center"
                },
                {
                    title: "标签",
                    key: "tags",
                    align: "center"
                },
                {
                    title: "操作",
                    slot: "action",
                    width: "180px",
                    align: "center"
                },
            ],
        };
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        alterBlog(index) {
            console.log(index);
        },
        delBlog(index) {
            console.log(index);
        }
    },
};
</script>

<style scoped>
.personblog-card {
    margin-top: 3rem;
    padding: 1rem;
}
</style>
