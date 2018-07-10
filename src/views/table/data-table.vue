<template lang="html">

  <Row :gutter="10">
      <Col :sm="24" >
        <Card :bordered="false" class="m-b-10">
          <p slot="title">分页，排序，筛选，多选，自定义模版，导出</p>
          <CompositeTable></CompositeTable>
        </Card>
      </Col>

  </Row>
</template>

<script>
import CompositeTable from './commponents/composite-table.vue'
export default {
  components:{
    CompositeTable
  },
  data(){
    return {

    }
  }

}
</script>

<style lang="scss" scope>
.m-b-10{
  margin-bottom: 10px;
}
</style>
