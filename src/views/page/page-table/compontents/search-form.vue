
  <template lang="html">
    <Form :model="searchTableForm" label-position="right" :label-width="100">
        <Row :gutter="10">
            <Col :sm="8" >
              <FormItem label="用户姓名">
                  <Input v-model="searchTableForm.input1"></Input>
              </FormItem>
            </Col>
            <Col   :sm="8"  >
              <FormItem label="用户编号">
                <Select v-model="searchTableForm.input2" placeholder="Select your city">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
              </FormItem>
            </Col>
            <span  v-show="isShow" >
                <Col  :sm="8" >
                  <FormItem label="用户性别">
                      <Input v-model="searchTableForm.input3"></Input>
                  </FormItem>
                </Col>
                <Col  :sm="8" >
                  <FormItem label="更新时间">
                    <DatePicker  size="large" type="date" placeholder="选择时间" style="width:100%" ></DatePicker>
                  </FormItem>
                </Col>
                <Col  :sm="8" >
                  <FormItem label="规则编号">
                      <Input v-model="searchTableForm.input3"></Input>
                  </FormItem>
                </Col>
            </span>
            <Col  :sm="8" >
              <FormItem >
                <Button size="large" type="primary" > 搜索 </Button>
                <Button size="large" type="ghost"  style="margin-left: 8px"> 重置 </Button>
                <Button size="large" @click="toggle_form" class="toggle-btn" type="text"  style="margin-left: 8px">
                  <span v-show="isShow">收起 <Icon type="chevron-up"></Icon></span>
                  <span v-show="!isShow">展开 <Icon type="chevron-down"></Icon></span>
                </Button>
              </FormItem>
            </Col>
        </Row>
      </Form>
  </template>

  <script>
  export default {
    data(){
      return {
        searchTableForm: {
          input1: '',
          input2: '',
          input3: ''
        },
        isShow:false,
      }

    },
    methods:{
      toggle_form(){
        this.isShow = !this.isShow;
      }
    }
  }
  </script>

  <style lang="css">
  </style>
