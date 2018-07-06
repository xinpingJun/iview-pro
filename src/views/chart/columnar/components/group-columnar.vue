<template lang="html">
    <div id="mountNode2"></div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';

export default {
  data() {
    return {
      data: [{
        name: 'London',
        'Jan.': 18.9,
        'Feb.': 28.8,
        'Mar.': 39.3,
        'Apr.': 81.4,
        'May': 47,
        'Jun.': 20.3,
        'Jul.': 24,
        'Aug.': 35.6
      }, {
        name: 'Berlin',
        'Jan.': 12.4,
        'Feb.': 23.2,
        'Mar.': 34.5,
        'Apr.': 99.7,
        'May': 52.6,
        'Jun.': 35.5,
        'Jul.': 37.4,
        'Aug.': 42.4
      }],
    }
  },
  methods: {
    creatChart(data) {
      var ds = new DataSet();
      var dv = ds.createView().source(data);
      dv.transform({
        type: 'fold',
        fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'], // 展开字段集
        key: '月份', // key字段
        value: '月均降雨量' // value字段
      });
      console.log(dv)
      var chart = new G2.Chart({
        container: 'mountNode2',
        padding: [40, 20, 40, 40],
        forceFit: true,
        height: 400
      });
      chart.source(dv);
      chart.interval().position('月份*月均降雨量').color('name').adjust([{
        type: 'dodge',
        marginRatio: 1 / 32
      }]);
      chart.render();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.creatChart(this.data)
    })
  }
}
</script>

<style lang="css">
</style>
