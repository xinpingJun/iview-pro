<template lang="html">
    <div id="mountNode"></div>
</template>

<script>
import G2 from '@antv/g2';

// name: "基础柱状图",
export default {
  data() {
    return {
      data: [{
        year: '1951 年',
        sales: 38
      }, {
        year: '1952 年',
        sales: 52
      }, {
        year: '1956 年',
        sales: 61
      }, {
        year: '1957 年',
        sales: 145
      }, {
        year: '1958 年',
        sales: 48
      }, {
        year: '1959 年',
        sales: 38
      }, {
        year: '1960 年',
        sales: 38
      }, {
        year: '1962 年',
        sales: 38
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
      chart.scale('sales', {
        tickInterval: 20
      });
      chart.interval().position('year*sales');
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
