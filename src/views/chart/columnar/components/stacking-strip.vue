<template lang="html">
    <div id="mountNode7"></div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
// name: "基础柱状图",
export default {
  data() {
    return {
      data: [{
        label: 'Mon.',
        series1: 2800,
        series2: 2260
      }, {
        label: 'Tues.',
        series1: 1800,
        series2: 1300
      }, {
        label: 'Wed.',
        series1: 950,
        series2: 900
      }, {
        label: 'Thur.',
        series1: 500,
        series2: 390
      }, {
        label: 'Fri.',
        series1: 170,
        series2: 100
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
        key: 'type', // key字段
        value: 'value' // value字段
      });

      var chart = new G2.Chart({
        container: 'mountNode7',
        padding: [40, 20, 20, 60],
        forceFit: true,
        height: 400
      });
      chart.source(dv);
      chart.axis('value', {
        position: 'right'
      });
      chart.axis('label', {
        label: {
          offset: 12
        }
      });
      chart.coord().transpose().scale(1, -1);
      chart.intervalStack().position('label*value').color('type').adjust([{
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
