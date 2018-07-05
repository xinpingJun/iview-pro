<template>
        <Card :bordered="false">
            <p slot="title">对话框</p>
            <div class="buttons">
              <Button @click="modal1 = true">顶部</Button>
              <Button @click="modal2 = true">居中</Button>
              <Button @click="modal3 = true">底部</Button>
              <Button @click="modal4 = true">侧边栏</Button>
              <Button @click="modal5 = true">大小</Button>
            </div>

            <SideModal
                :modal="modal4"
                @on-cancel="onCancel"
                @on-determine = 'onCetermine'>
                <div style="text-align:center">
                    <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
                    <p>Will you delete it?</p>
                </div>
            </SideModal>

        </Card>
</template>


<script>
    import SideModal from '@/components/modal/side-modal.vue'
    export default {
        components:{
            SideModal
        },
        data() {
            return {
                modal1: false,
                modal2: false,
                modal3: false,
                modal4: false,
                modal5: false,
            }
        },
        methods:{
            onCancel(val){
                this.modal4 = val
            },
            onCetermine(val){
                this.modal4 = val
            }
        }
    }
</script>
<style lang="scss">
    .buttons{
      button{
        margin: 0 10px;
      }
    }
</style>
