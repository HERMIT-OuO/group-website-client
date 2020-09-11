<template>
    <div>
        <div ref="editor" class="editor">
            <p v-html="defaultText"></p>
        </div>
        <div style="text-align: right;">
            <Button class="editor-button" style="margin-right: 1rem;" @click="cancelEditor()" >取消</Button>
            <Button class="editor-button" @click="getContent()" type="primary">确认</Button>
        </div>
    </div>
</template>

<script>
import E from "wangeditor";
export default {
    name: "editor",
    props: {
        defaultText: String,
    },
    data() {
        return {
            editorContent: this.defaultText,
        };
    },
    methods: {
		getContent() {
			this.$emit('editorContent',this.editorContent);
        },
        cancelEditor() {
            this.$emit('cancelEditor', true);
        }
    },
    mounted() {
        var editor = new E(this.$refs.editor);
        editor.customConfig.onchange = (html) => {
            this.editorContent = html;
        };
		editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
		editor.customConfig.zIndex = 100; 
        editor.create();
    },
};
</script>

<style scoped>
.editor {
    border-color: #dcdee2;

    text-align: left;

    color: #464c5b;

    background-color: #fff;
}

/deep/ .w-e-toolbar {
    padding-right: 10px;
    padding-left: 10px;

    background-color: #fff !important;

    border-color: #dcdee2 !important;
}

/deep/ .w-e-text-container {
    height: 28rem !important;

    border-color: #dcdee2 !important;
}

.editor-button {
    margin-top: 1rem;
}

/deep/ .w-e-text {
    padding-right: 20px;
    padding-left: 20px;
}
</style>
