<template lang="html">
  <Row :gutter="10">
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">基础折线图</p>
            <BaseLine></BaseLine>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">多条折线图</p>
            <ManyLine></ManyLine>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">曲线折线图</p>
            <CurveLine></CurveLine>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">阶梯折线图</p>
            <LadderLine></LadderLine>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">多条阶梯折线图</p>
            <ManyLadderLine></ManyLadderLine>
        </Card>
      </Col>

  </Row>
</template>

<script>
import BaseLine from './components/base-line.vue'
import ManyLine from './components/many-line.vue'
import CurveLine from './components/curve-line.vue'
import LadderLine from './components/ladder-line.vue'
import ManyLadderLine from './components/many-ladder-line.vue'
export default {
  components:{
    BaseLine,
    ManyLine,
    CurveLine,
    LadderLine,
    ManyLadderLine
  },

}
</script>

<style lang="scss" scope>
.m-b-10 {
    margin-bottom: 10px;
}
</style>
