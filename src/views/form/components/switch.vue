<template>
<div class="panel-h">
    <Switch v-model="switch1" @on-change="change"></Switch>
  <!-- <Switch>
    <span slot="open">开</span>
    <span slot="close">关</span>
  </Switch>
  <Switch>
    <Icon type="android-done" slot="open"></Icon>
    <Icon type="android-close" slot="close"></Icon>
  </Switch>
  <br><br>
  <Switch size="large">
    <span slot="open">开启</span>
    <span slot="close">关闭</span>
  </Switch>
  <Switch size="large">
    <span slot="open">ON</span>
    <span slot="close">OFF</span>
  </Switch> -->
</div>
</template>
<script>
export default {
  data() {
    return {
      switch1: false
    }
  },
  methods: {
    change(status) {
      this.$Message.info('开关状态：' + status);
    }
  }
}
</script>
