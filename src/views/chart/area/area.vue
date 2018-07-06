<template lang="html">
  <Row :gutter="10">
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">基础面积图</p>
            <BaseLine></BaseLine>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">基础面积图（有负值）</p>
            <ManyLine></ManyLine>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">堆叠面积图</p>
            <CurveLine></CurveLine>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">分比堆叠面积图</p>
            <LadderLine></LadderLine>
        </Card>
      </Col>
      <Col :sm="12">
        <Card :bordered="false" class="m-b-10">
            <p slot="title">区间面积图</p>
            <ManyLadderLine></ManyLadderLine>
        </Card>
      </Col>
  </Row>
</template>

<script>

export default {
  components:{

  },

}
</script>

<style lang="scss" scope>
.m-b-10 {
    margin-bottom: 10px;
}
</style>
