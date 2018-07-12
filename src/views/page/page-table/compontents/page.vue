<template>
  <div class="page">
    <div class="left">
      共 {{total}} 记录，
      <Select v-model="pageSize" style="width:90px"  size="large">
          <Option v-for="item in pageSizeList" :value="item.key" :key="item.key">{{ item.value }}</Option>
      </Select>
    </div>
    <div class="right">
      <Page :total="total" ></Page>
    </div>
  </div>
</template>
<script>
    export default {
      data(){
        return {
          total:100,
          pageSize:"10",
          pageSizeList:[
            {
              key:"10",
              value:"10 条/页"
            },
            {
              key:"20",
              value:"20 条/页"
            },
            {
              key:"30",
              value:"30 条/页"
            },
            {
              key:"40",
              value:"40 条/页"
            },
          ]
        }
      }
    }
</script>
<style lang="scss">
  .page{
    overflow: hidden;
    clear: both;
    .left{
      float: left;
    }
    .right{
      float: right;
    }
  }
</style>
