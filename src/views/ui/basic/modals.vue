<template>
    <div>
        <Button @click="modal9 = true">侧边模态框</Button>

        <Modal title="Title" v-model="modal9" class="side-model">
        <p slot="header" >
            <span>通知中心</span>
        </p>
        <div style="text-align:center">
            <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
            <p>Will you delete it?</p>
        </div>
        <div slot="footer">
            <Button>取消</Button>
            <Button type="primary">确定</Button>
        </div>
        </Modal>
    </div>
</template>

<style lang="scss">
    .side-model {
        .ivu-modal {
            top: 0;
            right: 0;
            bottom: 0;
            position: fixed;
            background: #fff;
            .ivu-modal-body {
                height: calc(100vh - 112px)
            }
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                modal9: false,
                modal10: false,
            }
        }
    }
</script>