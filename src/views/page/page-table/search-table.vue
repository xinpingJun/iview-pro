<template lang="html">
  <Card :bordered="false">
      <div class="table-page">
          <div class="table-search">
              <SearchForm></SearchForm>
          </div>
          <div class="table-centent">
            <div class="table-btns">
              <div class="left">
                <Button  class="add-btn" type="primary" > <i class="icon anticon icon-pluscircleo"></i> 新增 </Button>
              </div>
              <div class="right">
                <ButtonGroup  >
                    <Button type="ghost"> <i class="icon anticon icon-sync"></i></Button>
                </ButtonGroup>
              </div>
            </div>
            <div class="table">
              <TableTem></TableTem>
            </div>
            <div class="table-page">
                <Pagetem></Pagetem>
            </div>
          </div>
      </div>
  </Card>
</template>

<script>
import SearchForm from './compontents/search-form.vue'
import TableTem from './compontents/table.vue'
import Pagetem from './compontents/page.vue'
export default {
  components: {
    SearchForm,
    TableTem,
    Pagetem
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.add-btn{
  font-size: 14px;
  i{
    font-size: 14px;
    vertical-align: middle;
  }
}
</style>
