<template lang="html">
  <Row :gutter="10">
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">散点图</p>
            <BaseScatter></BaseScatter>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">多色散点图</p>
            <ManyColorScatter></ManyColorScatter>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">气泡图</p>
            <BubbleScatter></BubbleScatter>
        </Card>
      </Col>

  </Row>
</template>

<script>
import BaseScatter from './components/base-scatter.vue'
import BubbleScatter from './components/bubble-scatter.vue'
import ManyColorScatter from './components/many-color-scatter.vue'
export default {
  components:{
BaseScatter,
BubbleScatter,
ManyColorScatter
  },

}
</script>

<style lang="scss" scope>
.m-b-10 {
    margin-bottom: 10px;
}
</style>
