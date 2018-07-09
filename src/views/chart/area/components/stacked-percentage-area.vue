<template lang="html">
    <div id="mountNode4"></div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
export default {
  // name:"基础折线图",
  data() {
    return {
      data: [{
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
        country: 'Africa',
        year: '1750',
        value: 106
      }, {
        country: 'Africa',
        year: '1800',
        value: 107
      }, {
        country: 'Africa',
        year: '1850',
        value: 111
      }, {
        country: 'Africa',
        year: '1900',
        value: 133
      }, {
        country: 'Africa',
        year: '1950',
        value: 221
      }, {
        country: 'Africa',
        year: '1999',
        value: 767
      }, {
        country: 'Africa',
        year: '2050',
        value: 1766
      }, {
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
      }]
    }
  },
  methods: {
    creatChart(data) {
      var _DataSet = DataSet,
        DataView = _DataSet.DataView;

      var dv = new DataView().source(data);
      dv.transform({
        type: 'percent',
        field: 'value',
        dimension: 'country',
        groupBy: ['year'],
        as: 'percent'
      });

      var chart = new G2.Chart({
        container: 'mountNode4',
        padding: [40, 20, 40, 40],
        forceFit: true,
        height: 400
      });
      chart.source(dv, {
        year: {
          type: 'linear',
          tickInterval: 50
        },
        'percent': {
          formatter: function formatter(value) {
            value = value || 0;
            value = value * 100;
            return parseInt(value);
          },
          alias: 'percent(%)'
        }
      });
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      });
      chart.areaStack().position('year*percent').color('country');
      chart.lineStack().position('year*percent').color('country').size(2);
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
