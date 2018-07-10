<template>
  <div class="panel-h">
    <Radio v-model="single">Radio</Radio>
    <div class="m10"></div>
    <RadioGroup v-model="phone">
      <Radio label="1">
        <Icon type="social-apple"></Icon>
        <span>Apple</span>
      </Radio>
      <Radio label="2">
        <Icon type="social-android"></Icon>
        <span>Android</span>
      </Radio>
      <Radio label="3" disabled>
        <Icon type="social-windows"></Icon>
        <span>Windows</span>
      </Radio>
    </RadioGroup>
    <div class="m10"></div>
    <RadioGroup v-model="button1" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
    </RadioGroup>
  </div>

</template>
<script>
export default {
  data() {
    return {
      single: false,
      phone: '1',
      button1: '北京',
    }
  }
}
</script>
