<template lang="html">
  <Row :gutter="10">
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">基础柱状图</p>
            <BaseColumnar></BaseColumnar>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">分组柱状图</p>
            <GroupColumnar></GroupColumnar>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">堆叠柱状图</p>
            <StackingColumnar></StackingColumnar>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">百分比堆叠柱状图</p>
            <PercentageStackingColumnar></PercentageStackingColumnar>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">基础条形图</p>
            <BaseStrip></BaseStrip>
        </Card>
      </Col>

      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">分组条形图</p>
            <GroupStrip></GroupStrip>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">堆叠条形图</p>
            <StackingStrip></StackingStrip>
        </Card>
      </Col>

  </Row>
</template>

<script>
import BaseColumnar from './components/base-columnar.vue'
import GroupColumnar from './components/group-columnar.vue'
import StackingColumnar from './components/stacking-columnar.vue'
import PercentageStackingColumnar from './components/percentage-stacking-columnar.vue'

import BaseStrip from './components/base-strip.vue'
import GroupStrip from './components/group-strip.vue'
import StackingStrip from './components/stacking-strip.vue'

export default {
  components:{
    BaseColumnar,
    GroupColumnar,
    StackingColumnar,
    PercentageStackingColumnar,
    BaseStrip,
    GroupStrip,
    StackingStrip,
  },

}
</script>

<style lang="scss" scope>
.m-b-10 {
    margin-bottom: 10px;
}
</style>
