<template lang="html">
  <div class="layout_simple">
      <div class="layout_simple_aside">
          <SiderBar></SiderBar>
      </div>
      <div class="layout_simple_mian">
        <!-- <HeadBar></HeadBar> -->
        <!-- <router-view></router-view> -->
        <Drag></Drag>
      </div>
  </div>
</template>

<script>
import HeadBar from './components/head-bar';
import SiderBar from './components/sider-bar';
import Drag from '../drag'
export default {
  components: {
    HeadBar,
    SiderBar,
    Drag
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
@import './layout-view.scss';
</style>
