<template>
<div class="panel-h">
  <Checkbox v-model="single">Checkbox</Checkbox>
  <div class="m10"></div>
  <CheckboxGroup v-model="social">
    <Checkbox label="twitter">
      <Icon type="social-twitter"></Icon>
      <span>Twitter</span>
    </Checkbox>
    <Checkbox label="facebook">
      <Icon type="social-facebook"></Icon>
      <span>Facebook</span>
    </Checkbox>
    <Checkbox label="github">
      <Icon type="social-github"></Icon>
      <span>Github</span>
    </Checkbox>
    <Checkbox label="snapchat">
      <Icon type="social-snapchat"></Icon>
      <span>Snapchat</span>
    </Checkbox>
  </CheckboxGroup>
</div>
</template>
<script>
export default {
  data() {
    return {
      single: false,
      social: ['facebook', 'github'],
    }
  }
}
</script>
