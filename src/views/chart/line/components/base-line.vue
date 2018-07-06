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
        value: 3
      }, {
        year: '1992',
        value: 4
      }, {
        year: '1993',
        value: 3.5
      }, {
        year: '1994',
        value: 5
      }, {
        year: '1995',
        value: 4.9
      }, {
        year: '1996',
        value: 6
      }, {
        year: '1997',
        value: 7
      }, {
        year: '1998',
        value: 9
      }, {
        year: '1999',
        value: 13
      }],
    }
  },
  methods:{
    creatChart(data) {
      const chart = new G2.Chart({
        container: 'mountNode',
        padding: [40, 20, 40, 40],
        forceFit: true,
        height: 400
      });
      chart.source(data);
      chart.scale('value', {
        min: 0
      });
      chart.scale('year', {
        range: [0, 1]
      });
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      });
      chart.line().position('year*value');
      chart.point().position('year*value').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      });
      chart.render();
    }
  },
  mounted(){
    this.$nextTick( () =>{
      this.creatChart(this.data)
    })
  }
}
</script>

<style lang="css">
</style>
