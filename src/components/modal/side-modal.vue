<template>
            <Modal
            v-model="modal"
            class="side-model"
            :mask-closable="false"
            @on-cancel="cancel"
            >
                <p slot="header" >
                  {{title}}
                </p>
                <slot></slot>
                <div slot="footer">
                    <Button @click="cancel">取消</Button>
                    <Button @click="determine" type="primary">确定</Button>
                </div>
            </Modal>
</template>
<script>
export default {
    props:{
        modal:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:"侧边对话框标题"
        }
    },
    methods:{
        cancel(){
             this.$emit('on-cancel',false)
        },
        determine(){
             this.$emit('on-determine',false)
        },

    }
}
</script>

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
