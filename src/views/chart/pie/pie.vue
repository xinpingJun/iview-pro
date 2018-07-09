<template lang="html">
  <Row :gutter="10">
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">基础饼图</p>
            <BasePie></BasePie>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">基础饼图-内部文本</p>
            <BaseInPie></BaseInPie>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">基础环形</p>
            <BaseDonut></BaseDonut>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">单色南丁格尔玫瑰图</p>
            <nightingaleRose></nightingaleRose>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">多色南丁格尔玫瑰图</p>
            <nightingaleRoseMore></nightingaleRoseMore>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">南丁格尔玫瑰环图</p>
            <nightingaleRoseDonut></nightingaleRoseDonut>
        </Card>
      </Col>
  </Row>
</template>

<script>
import BasePie from './components/base-pie.vue'
import BaseInPie from './components/base-in-pie.vue'

import BaseDonut from './components/base-donut.vue'

import nightingaleRose from './components/nightingale-rose.vue'
import nightingaleRoseMore from './components/nightingale-rose-more.vue'
import nightingaleRoseDonut from './components/nightingale-rose-donut.vue'
export default {
  components:{
    BasePie,
    BaseInPie,
    BaseDonut,
    nightingaleRose,
    nightingaleRoseMore,
    nightingaleRoseDonut,
  },

}
</script>

<style lang="scss" scope>
.m-b-10 {
    margin-bottom: 10px;
}
</style>
