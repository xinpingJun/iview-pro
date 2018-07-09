<template lang="html">
    <div id="mountNode3"></div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';

export default {
  data() {
    return {
      data: [{
        item: '事例一',
        count: 40
      }, {
        item: '事例二',
        count: 21
      }, {
        item: '事例三',
        count: 17
      }, {
        item: '事例四',
        count: 13
      }, {
        item: '事例五',
        count: 9
      }],
    }
  },
  methods: {
    creatChart(data) {
      var _DataSet = DataSet,
        DataView = _DataSet.DataView;
      var dv = new DataView();
      dv.source(data).transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
      });
      var chart = new G2.Chart({
        container: 'mountNode3',
        padding: [20, 20, 60, 20],
        forceFit: true,
        height: 400
      });
      chart.source(dv, {
        percent: {
          formatter: function formatter(val) {
            val = val * 100 + '%';
            return val;
          }
        }
      });
      chart.coord('theta', {
        radius: 0.75,
        innerRadius: 0.6
      });
      chart.tooltip({
        showTitle: false,
        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      });
      // 辅助文本
      chart.guide().html({
        position: ['50%', '50%'],
        html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
        alignX: 'middle',
        alignY: 'middle'
      });
      var interval = chart.intervalStack().position('percent').color('item').label('percent', {
        formatter: function formatter(val, item) {
          return item.point.item + ': ' + val;
        }
      }).tooltip('item*percent', function(item, percent) {
        percent = percent * 100 + '%';
        return {
          name: item,
          value: percent
        };
      }).style({
        lineWidth: 1,
        stroke: '#fff'
      });
      chart.render();
      interval.setSelected(dv.rows[0]);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.creatChart(this.data)
    })
  }
}
</script>

<style lang="scss">
</style>
