<template lang="html">
  <div id="mountNode4"></div>
</template>
<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
export default {
  // name: "阶梯折线图",
  data() {
    return {
      data4: [{
        month: 'Jan',
        value: 51
      }, {
        month: 'Feb',
        value: 91
      }, {
        month: 'Mar',
        value: 34
      }, {
        month: 'Apr',
        value: 47
      }, {
        month: 'May',
        value: 63
      }, {
        month: 'June',
        value: 58
      }, {
        month: 'July',
        value: 56
      }, {
        month: 'Aug',
        value: 77
      }, {
        month: 'Sep',
        value: 99
      }, {
        month: 'Oct',
        value: 106
      }, {
        month: 'Nov',
        value: 88
      }, {
        month: 'Dec',
        value: 56
      }]
    }
  },
  methods: {
    creatChart(data) {
      var chart = new G2.Chart({
        container: 'mountNode4',
        padding: [40, 20, 40, 40],
        forceFit: true,
        height: 400
      });
      chart.source(data, {
        month: {
          range: [0, 1]
        }
      });
      chart.line().position('month*value').shape('hv');
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
