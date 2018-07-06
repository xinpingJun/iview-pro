<template lang="html">
  <div id="mountNode5"></div>
</template>
<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
export default {
  // name: "多条阶梯折线图",
  data() {
    return {
      data4: [{
        month: 'Jan',
        series2: 51,
        series1: 125
      }, {
        month: 'Feb',
        series2: 91,
        series1: 132
      }, {
        month: 'Mar',
        series2: 34,
        series1: 141
      }, {
        month: 'Apr',
        series2: 47,
        series1: 158
      }, {
        month: 'May',
        series2: 63,
        series1: 133
      }, {
        month: 'June',
        series2: 58,
        series1: 143
      }, {
        month: 'July',
        series2: 56,
        series1: 176
      }, {
        month: 'Aug',
        series2: 77,
        series1: 194
      }, {
        month: 'Sep',
        series2: 99,
        series1: 115
      }, {
        month: 'Oct',
        series2: 106,
        series1: 134
      }, {
        month: 'Nov',
        series2: 88,
        series1: 110
      }, {
        month: 'Dec',
        series2: 56,
        series1: 91
      }]
    }
  },
  methods: {
    creatChart(data) {
      var ds = new DataSet();
      var dv = ds.createView().source(data);
      dv.transform({
        type: 'fold',
        fields: ['series1', 'series2'], // 展开字段集
        key: 'key', // key字段
        value: 'value' // value字段
      });
      var chart = new G2.Chart({
        container: 'mountNode5',
        padding: [40, 20, 40, 40],
        forceFit: true,
        height: 400
      });
      chart.source(dv, {
      month: {
        range: [0, 1]
      }
    });
    chart.line().position('month*value').shape('hv').color('key');
    chart.render();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.creatChart(this.data4)
    })
  }
}
</script>
<style lang="css">
</style>
