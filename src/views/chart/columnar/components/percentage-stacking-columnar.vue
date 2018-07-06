<template lang="html">
    <div id="mountNode4"></div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';

export default {
  data() {
    return {
      data: [{
        country: 'Europe',
        year: '1750',
        value: 163
      }, {
        country: 'Europe',
        year: '1800',
        value: 203
      }, {
        country: 'Europe',
        year: '1850',
        value: 276
      }, {
        country: 'Europe',
        year: '1900',
        value: 408
      }, {
        country: 'Europe',
        year: '1950',
        value: 547
      }, {
        country: 'Europe',
        year: '1999',
        value: 729
      }, {
        country: 'Europe',
        year: '2050',
        value: 628
      }, {
        country: 'Europe',
        year: '2100',
        value: 828
      }, {
        country: 'Asia',
        year: '1750',
        value: 502
      }, {
        country: 'Asia',
        year: '1800',
        value: 635
      }, {
        country: 'Asia',
        year: '1850',
        value: 809
      }, {
        country: 'Asia',
        year: '1900',
        value: 947
      }, {
        country: 'Asia',
        year: '1950',
        value: 1402
      }, {
        country: 'Asia',
        year: '1999',
        value: 3634
      }, {
        country: 'Asia',
        year: '2050',
        value: 5268
      }, {
        country: 'Asia',
        year: '2100',
        value: 7268
      }],
    }
  },
  methods: {
    creatChart(data) {
      var ds = new DataSet();
      var dv = ds.createView().source(data).transform({
        type: 'percent',
        field: 'value', // 统计销量
        dimension: 'country', // 每年的占比
        groupBy: ['year'], // 以不同产品类别为分组
        as: 'percent'
      });

      var chart = new G2.Chart({
        container: 'mountNode4',
        padding: [40, 20, 40, 60],
        forceFit: true,
        height: 400
      });
      chart.source(dv, {
        percent: {
          min: 0,
          formatter: function formatter(val) {
            return (val * 100).toFixed(2) + '%';
          }
        }
      });
      chart.intervalStack().position('year*percent').color('country');
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
