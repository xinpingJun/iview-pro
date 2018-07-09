<template lang="html">
  <Row :gutter="10">
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">基础面积图</p>
            <BaseArea></BaseArea>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">基础面积图（有负值）</p>
            <BaseAreaNegative></BaseAreaNegative>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">堆叠面积图</p>
            <StackedArea></StackedArea>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">分比堆叠面积图</p>
            <StackedPercentageArea></StackedPercentageArea>
        </Card>
      </Col>
      <Col :sm="24">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">区间面积图</p>
            <RangeArea></RangeArea>
        </Card>
      </Col>
  </Row>
</template>

<script>
import BaseArea from './components/base-area.vue'
import BaseAreaNegative from './components/base-area-negative.vue'
import RangeArea from './components/range-area.vue'
import StackedArea from './components/stacked-area.vue'
import StackedPercentageArea from './components/stacked-percentage-area.vue'
export default {
  components:{
    BaseArea,
    BaseAreaNegative,
    RangeArea,
    StackedArea,
    StackedPercentageArea,
  },

}
</script>

<style lang="scss" scope>
.m-b-10 {
    margin-bottom: 10px;
}
</style>
