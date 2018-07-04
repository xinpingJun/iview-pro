<template>
    <Card  >
        <div slot="title">24栏网格</div>
        <div class="example-demo">
        <Row >
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
        </Row>
        <br>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>
        <br>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>
        </div>
    </Card>
</template>

<script>
    export default {
    
    }
</script>
<style lang="scss" scoped>
.example-demo 
.ivu-col,
 .example-demo  {
    color: #fff;
    padding: 10px 0;
    text-align: center;
    background: rgba(0,153,229,.9);
}
</style>
