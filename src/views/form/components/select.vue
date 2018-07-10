<template>
<div class="panel-h">
  <Select v-model="model1">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
  <div class="m10">

  </div>
  <Select v-model="model1" clearable placeholder="可清空">
     <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
 </Select>
 <div class="m10">

 </div>
 <Select v-model="model10" multiple placeholder="多选">
     <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
 </Select>
</div>
</template>
<script>
export default {
  data() {
    return {
      model10: [],
      cityList: [{
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model1: ''
    }
  }
}
</script>
