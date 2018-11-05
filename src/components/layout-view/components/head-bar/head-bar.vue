
<template lang="html">
  <div class="head_bar">
    <h3 class="head_bar_title">
      <i class="icon anticon icon-laptop"></i>
      <span class="head_bar_title_text">我的任务</span>
    </h3>
    <div class="head_bar_right">
      <Select v-model="model1" style="width:200px" >
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            cityList: [
                {
                    value: '1',
                    label: '按截止日期'
                },
                {
                    value: '2',
                    label: '按项目'
                },
                {
                    value: '3',
                    label: '按优先级处理'
                },
                {
                    value: '4',
                    label: '按更新时间'
                },
                {
                    value: '5',
                    label: '全部项目'
                },
            ],
            model1: '3'
        }
    }
}
</script>

<style lang="scss">
@import './head-bar.scss';
</style>
