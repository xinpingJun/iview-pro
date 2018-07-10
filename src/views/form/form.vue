<template lang="html">

  <Row :gutter="10">
      <Col :sm="6" >
        <Card :bordered="false" class="m-b-10">
            <p slot="title">Inputs</p>
            <Inputs></Inputs>
        </Card>
      </Col>
      <Col   :sm="6"  >
        <Card :bordered="false" class="m-b-10">
          <p slot="title">Radios</p>
          <Radios></Radios>
        </Card>
      </Col>
      <Col  :sm="6" >
        <Card :bordered="false" class="m-b-10">
          <p slot="title">Switchs（无法显示）</p>
          <Switchs></Switchs>
        </Card>
      </Col>
      <Col  :sm="6" >
        <Card :bordered="false" class="m-b-10">
          <p slot="title">Checkboxs</p>
          <Checkboxs></Checkboxs>
        </Card>
      </Col>
      <Col  :sm="6" >
        <Card :bordered="false" class="m-b-10">
          <p slot="title">Selects</p>
          <Selects></Selects>
        </Card>
      </Col>

  </Row>
</template>

<script>
import Inputs from './components/input.vue'
import Radios from './components/radio.vue'
import Checkboxs from './components/checkbox.vue'
import Switchs from './components/switch.vue'
import Selects from './components/select.vue'
export default {
  components: {
    Inputs,
    Radios,
    Checkboxs,
    Switchs,
    Selects
  },
  data() {
    return {

    }
  }

}
</script>

<style lang="scss" >
.m-b-10 {
    margin-bottom: 10px;
}
.panel-h{
  height: 250px;
}
</style>
