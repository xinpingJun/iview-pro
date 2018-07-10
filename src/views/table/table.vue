<template lang="html">

  <Row :gutter="10">
      <Col :sm="12" >
        <Card :bordered="false" class="m-b-10">
          <p slot="title">常规</p>
          <BasicTable></BasicTable>
        </Card>
      </Col>
      <Col   :sm="12"  >
        <Card :bordered="false" class="m-b-10">
            <p slot="title">斑马纹</p>
            <StripeTable></StripeTable>
        </Card>
      </Col>
      <Col   :sm="24"  >
        <Card :bordered="false" class="m-b-10">
            <p slot="title">带边框</p>
            <BorderTable></BorderTable>
        </Card>
      </Col>
      <Col   :sm="24"  >
        <Card :bordered="false" class="m-b-10">
            <p slot="title">固定列</p>
            <ColumnsFixed></ColumnsFixed>
        </Card>
      </Col>
  </Row>
</template>

<script>
import BasicTable from './commponents/basic-table.vue'
import StripeTable from './commponents/stripe-table.vue'
import BorderTable from './commponents/border-table.vue'
import ColumnsFixed from './commponents/columns-fixed.vue'
export default {
  components:{
    BasicTable,
    StripeTable,
    BorderTable,
    ColumnsFixed
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
