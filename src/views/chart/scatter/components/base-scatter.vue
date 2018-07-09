<template lang="html">
    <div id="mountNode"></div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';

export default {
  data() {
    return {
      data:[  {
          "gender": "male",
          "height": 174,
          "weight": 88.6
        },
        {
          "gender": "male",
          "height": 175.3,
          "weight": 84.1
        },
        {
          "gender": "male",
          "height": 185.4,
          "weight": 66.8
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 75.5
        },
        {
          "gender": "male",
          "height": 180.3,
          "weight": 93.2
        },
        {
          "gender": "male",
          "height": 180.3,
          "weight": 82.7
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 58
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 79.5
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 78.6
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 71.8
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 116.4
        },
        {
          "gender": "male",
          "height": 163.8,
          "weight": 72.2
        },
        {
          "gender": "male",
          "height": 188,
          "weight": 83.6
        },
        {
          "gender": "male",
          "height": 198.1,
          "weight": 85.5
        },
        {
          "gender": "male",
          "height": 175.3,
          "weight": 90.9
        },
        {
          "gender": "male",
          "height": 166.4,
          "weight": 85.9
        },
        {
          "gender": "male",
          "height": 190.5,
          "weight": 89.1
        },
        {
          "gender": "male",
          "height": 166.4,
          "weight": 75
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 77.7
        },
        {
          "gender": "male",
          "height": 179.7,
          "weight": 86.4
        },
        {
          "gender": "male",
          "height": 172.7,
          "weight": 90.9
        },
        {
          "gender": "male",
          "height": 190.5,
          "weight": 73.6
        },
        {
          "gender": "male",
          "height": 185.4,
          "weight": 76.4
        },
        {
          "gender": "male",
          "height": 168.9,
          "weight": 69.1
        },
        {
          "gender": "male",
          "height": 167.6,
          "weight": 84.5
        },
        {
          "gender": "male",
          "height": 175.3,
          "weight": 64.5
        },
        {
          "gender": "male",
          "height": 170.2,
          "weight": 69.1
        },
        {
          "gender": "male",
          "height": 190.5,
          "weight": 108.6
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 86.4
        },
        {
          "gender": "male",
          "height": 190.5,
          "weight": 80.9
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 87.7
        },
        {
          "gender": "male",
          "height": 184.2,
          "weight": 94.5
        },
        {
          "gender": "male",
          "height": 176.5,
          "weight": 80.2
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 72
        },
        {
          "gender": "male",
          "height": 180.3,
          "weight": 71.4
        },
        {
          "gender": "male",
          "height": 171.4,
          "weight": 72.7
        },
        {
          "gender": "male",
          "height": 172.7,
          "weight": 84.1
        },
        {
          "gender": "male",
          "height": 172.7,
          "weight": 76.8
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 63.6
        },
        {
          "gender": "male",
          "height": 177.8,
          "weight": 80.9
        },
        {
          "gender": "male",
          "height": 182.9,
          "weight": 80.9
        },
        {
          "gender": "male",
          "height": 170.2,
          "weight": 85.5
        },
        {
          "gender": "male",
          "height": 167.6,
          "weight": 68.6
        },
        {
          "gender": "male",
          "height": 175.3,
          "weight": 67.7
        },
        {
          "gender": "male",
          "height": 165.1,
          "weight": 66.4
        },
        {
          "gender": "male",
          "height": 185.4,
          "weight": 102.3
        },]
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
       chart.tooltip({
         showTitle: false,
         crosshairs: {
           type: 'cross'
         },
         itemTpl: '<li data-index={index} style="margin-bottom:4px;">' + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' + '{name}<br/>' + '{value}' + '</li>'
       });
       chart.point().position('height*weight').size(4).shape('circle').opacity(0.65).tooltip('gender*height*weight', function(gender, height, weight) {
         return {
           name: gender,
           value: height + '(cm), ' + weight + '(kg)'
         };
       });
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

<style lang="scss">
</style>
