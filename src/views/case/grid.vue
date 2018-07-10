<template lang="html">

  <Row :gutter="10">
      <Col :sm="6" >
        <Card :bordered="false" class="m-b-10">

        </Card>
      </Col>
      <Col   :sm="6"  >
        <Card :bordered="false" class="m-b-10">

        </Card>
      </Col>
      <Col  :sm="6" >
        <Card :bordered="false" class="m-b-10">

        </Card>
      </Col>
      <Col  :sm="6" >
        <Card :bordered="false" class="m-b-10">

        </Card>
      </Col>
  </Row>
</template>

<script>
export default {
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
