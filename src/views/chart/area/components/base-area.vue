<template lang="html">
    <div id="mountNode"></div>
</template>

<script>
import G2 from '@antv/g2';

export default {
  // name:"基础折线图",
  data() {
    return {
      data: [{
        year: '1991',
        value: 15468
      }, {
        year: '1992',
        value: 16100
      }, {
        year: '1993',
        value: 15900
      }, {
        year: '1994',
        value: 17409
      }, {
        year: '1995',
        value: 17000
      }, {
        year: '1996',
        value: 31056
      }, {
        year: '1997',
        value: 31982
      }, {
        year: '1998',
        value: 32040
      }, {
        year: '1999',
        value: 33233
      }],
    }
  },
  methods: {
    creatChart(data) {
      var chart = new G2.Chart({
        container: 'mountNode',
        padding: [40, 20, 40, 40],
        forceFit: true,
        height: 400
      });
      chart.source(data);
      chart.scale({
        value: {
          min: 10000
        },
        year: {
          range: [0, 1]
        }
      });
      chart.axis('value', {
        label: {
          formatter: function formatter(val) {
            return (val / 10000).toFixed(1) + 'k';
          }
        }
      });
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      });
      chart.area().position('year*value');
      chart.line().position('year*value').size(2);
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
