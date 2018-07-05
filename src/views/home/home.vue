<template lang="html">
      <div class="home">
          <Row :gutter="10">
              <Col :sm="6" >
                <Card :bordered="false" class="widget-item">
                  <div class="item-icon" style="color: #fff;background-color: #ff9900">
                        <i class="icon anticon icon-appstore-o"></i>
                  </div>
                  <div class="item-content">
                        <span class="num">108</span>
                        <p>基础组件</p>
                  </div>
                </Card>
              </Col>
              <Col   :sm="6"  >
                <Card :bordered="false" class="widget-item">
                    <div class="item-icon" style="color: #fff;background-color: #f96868">
                          <i class="icon anticon icon-form"></i>
                    </div>
                  <div class="item-content">
                        <span class="num">15</span>
                        <p>新增组件</p>
                  </div>
                </Card>
              </Col>
              <Col  :sm="6" >
                <Card :bordered="false" class="widget-item">
                    <div class="item-icon" style="color: #fff;background-color: #46be8a">
                          <i class="icon anticon icon-layout"></i>
                    </div>
                  <div class="item-content">
                        <span class="num">12</span>
                        <p>常用页面</p>
                  </div>
                </Card>
              </Col>
              <Col  :sm="6" >
                <Card :bordered="false" class="widget-item">
                  <div class="item-icon" style="color: #fff;background-color: #62a8ea">
                        <i class="icon anticon icon-github"></i>
                  </div>
                  <div class="item-content">
                        <span class="num">0</span>
                        <p>项目star</p>
                  </div>
                </Card>
              </Col>
          </Row>
          <Row :gutter="10">
              <Col :sm="18"  >
                <Card :bordered="false" class="item ntroduction">
                  <p class="ntroduction-title">基本介绍</p>
                  <div class="ntroduction-content">
                      Iview Pro是基于Vue.js,使用vue-cli 3.0 脚手架,
                      在[iView]UI组件库的基础上,参考[ivew-admin],
                      搭建的Vue后台管理通用后台管理系统,
                      实现动态路由和权限验证,
                      新增侧边栏对话框,
                      常用模块封装,
                      常用页面的整理,
                      使用ant-desgin图标库。
                  </div>
                  <div class="ntroduction-tag">
                    <Tag checkable color="blue">兼容IE11及现代浏览器</Tag>
                    <Tag checkable color="green">简单易用</Tag>
                    <Tag checkable color="red">crm</Tag>
                    <Tag checkable color="yellow">节省时间</Tag>
                    <Tag checkable color="blue">节约成本</Tag>
                     <Tag checkable color="green">响应式布局</Tag>
                  </div>
                  <div class="ntroduction-table">
                      <Table :columns="columns1" :data="data1"></Table>
                  </div>
                </Card>
              </Col>
              <Col :sm="6" >
                <Card :bordered="false" class="item">
                  <div class="time-line-wrapper">
                    <Timeline>
                       <TimelineItem color="green">
                           <Icon type="trophy" slot="dot"></Icon>
                           <p class="time-line-time">2018-7-7</p>
                           <p class="time-line-content">发布里程碑版本</p>
                       </TimelineItem>
                       <TimelineItem>
                         <p class="time-line-time">2018-7-7</p>
                         <p class="time-line-content">发布1.0版本</p></TimelineItem>
                       <TimelineItem>
                            <p class="time-line-time">2018-7-7</p>
                            <p class="time-line-content">发布2.0版本</p>
                        </TimelineItem>
                       <TimelineItem>
                           <p class="time-line-time">2018-7-7</p>
                           <p class="time-line-content">发布3.0版本</p>
                       </TimelineItem>
                   </Timeline>
                  </div>

                </Card>
              </Col>
          </Row>

      </div>

</template>

<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '模块',
                        key: 'model'
                    },
                    {
                        title: '说明',
                        key: 'description'
                    },
                    {
                        title: '进度',
                        key: 'schedule'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    }
                ],
                data1: [
                    {
                        model: 'Layout',
                        description:"主页面",
                        schedule: 18,
                        status: '进行中',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss">
.home{
  .item{
    margin-bottom: 10px;
  }
  // 基本信息
  .ntroduction{
    .ntroduction-title{
      margin-bottom:10px;
    }
    .ntroduction-content{
      margin-bottom: 10px;
      color: #76838f;
    }
    .ntroduction-tag{
      margin-bottom: 10px;
    }
    .ntroduction-table{

    }
  }
  // 时间轴
  .time-line-wrapper{
    .time-line-time{
        font-size: 14px;
        font-weight: bold;
    }
    .time-line-content{
        padding-left: 5px;
    }
  }
  // 小部件
  .widget-item{
    padding:20px;
    margin-bottom:10px;
    .item-icon{
      position: absolute;
      left: 20px;
      top: 20px;
        height: 36px;
        width: 36px;
        line-height: 36px;
        border-radius: 100%;
        text-align: center;
        border-radius:100%;
        background: #000;
        i{
          font-size: 20px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
    }
    .item-content{
      white-space: nowrap;
      text-align: center;
      .num{
        font-weight: 100;
        font-size: 40px;
      }
      p{
        color: #a3afb7;
        font-weight: 100;
      }
    }


  }
}
</style>
