<template>
<div class="panel-h">
  <Input v-model="value" placeholder="Enter something..."></Input>
  <div class="m10"></div>
  <Input v-model="value" placeholder="可清空" clearable></Input>
  <div class="m10"></div>
  <Input v-model="value" icon="ios-clock-outline" placeholder="带图标"></Input>
  <div class="m10"></div>
  <Input v-model="value" placeholder="带按钮">
  <Button slot="append" icon="ios-search"></Button>
  </Input>
  <div class="m10"></div>
   <Input v-model="value" type="textarea"  :autosize="{minRows: 2,maxRows: 5}"  placeholder="区域框"></Input>
</div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
