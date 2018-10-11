<template lang="html">
  <Card :bordered="false">
      <div class="form-page">
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <FormItem label="姓名" prop="name" >
                  <Input   v-model="formValidate.name" placeholder="请输入姓名"></Input>
              </FormItem>
              <FormItem label="邮箱" prop="mail">
                  <Input v-model="formValidate.mail" placeholder="填写你的邮箱"></Input>
              </FormItem>
              <FormItem label="城市" prop="city">
                  <Select v-model="formValidate.city" placeholder="选择你的城市">
                      <Option value="beijing">New York</Option>
                      <Option value="shanghai">London</Option>
                      <Option value="shenzhen">Sydney</Option>
                  </Select>
              </FormItem>
              <FormItem label="日期">
                  <Row>
                      <Col span="11">
                          <FormItem prop="date" >
                              <DatePicker style="width:100%" type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
                          </FormItem>
                      </Col>
                      <Col span="2" style="text-align: center">-</Col>
                      <Col span="11">
                          <FormItem prop="time" >
                              <TimePicker style="width:100%" type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
                          </FormItem>
                      </Col>
                  </Row>
              </FormItem>
              <FormItem label="性别" prop="gender">
                  <RadioGroup v-model="formValidate.gender">
                      <Radio label="male">女</Radio>
                      <Radio label="female">男</Radio>
                  </RadioGroup>
              </FormItem>
              <FormItem label="爱好" prop="interest">
                  <CheckboxGroup v-model="formValidate.interest">
                      <Checkbox label="吃饭"></Checkbox>
                      <Checkbox label="睡觉"></Checkbox>
                      <Checkbox label="跑步"></Checkbox>
                      <Checkbox label="电影"></Checkbox>
                  </CheckboxGroup>
              </FormItem>
              <FormItem label="描述" prop="desc">
                  <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 6,maxRows: 8}" placeholder="写点什么..."></Input>
              </FormItem>
              <FormItem>
                  <Button size="large" type="primary" @click="handleSubmit('formValidate')"> 提交 </Button>
                  <Button size="large"   @click="handleReset('formValidate')" style="margin-left: 8px"> 重置 </Button>
              </FormItem>
          </Form>
      </div>
  </Card>
</template>
<style lang="scss">
  .form-page{
    width: 520px;
    margin: 40px auto auto auto;
  }
@media (max-width: 768px) {
    .form-page{
      width: 100%;
    }
}
</style>

<script>
export default {
  data() {
    return {
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        name: [{
          required: true,
          message: '姓名不能为空！',
          trigger: 'blur'
        }],
        mail: [{
            required: true,
            message: '邮箱不能为空！',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: '请输入正确的邮箱地址！',
            trigger: 'blur'
          }
        ],
        city: [{
          required: true,
          message: '请选择城市',
          trigger: 'change'
        }],
        gender: [{
          required: true,
          message: '请选择性别',
          trigger: 'change'
        }],
        interest: [{
            required: true,
            type: 'array',
            min: 1,
            message: '请至少选择一个爱好',
            trigger: 'change'
          },
          {
            type: 'array',
            max: 2,
            message: '最多只能选择两个',
            trigger: 'change'
          }
        ],
        date: [{
          required: true,
          type: 'date',
          message: 'Please select the date',
          trigger: 'change'
        }],
        time: [{
          required: true,
          type: 'string',
          message: '请选择时间',
          trigger: 'change'
        }],
        desc: [{
            required: true,
            message: '请填写描述',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 20,
            message: '最少二十个字符。',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>
