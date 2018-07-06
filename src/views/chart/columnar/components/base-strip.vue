<template lang="html">
    <div id="mountNode5"></div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
// name: "基础柱状图",
export default {
  data() {
    return {
      data: [{
        country: '中国',
        population: 131744
      }, {
        country: '印度',
        population: 104970
      }, {
        country: '美国',
        population: 29034
      }, {
        country: '印尼',
        population: 23489
      }, {
        country: '巴西',
        population: 18203
      }]
    }
  },
  methods: {
    creatChart(data) {
      var ds = new DataSet();
      var dv = ds.createView().source(data);
      dv.source(data).transform({
        type: 'sort',
        callback: function callback(a, b) {
          // 排序依据，和原生js的排序callback一致
          return b.population - a.population;
        }
      });
      var chart = new G2.Chart({
        container: 'mountNode5',
        padding: [40, 40, 20, 40],
        forceFit: true,
        height: 400
      });
      chart.source(dv);
      chart.axis('country', {
        label: {
          offset: 12
        }
      });
      chart.coord().transpose();
      chart.interval().position('country*population');
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
